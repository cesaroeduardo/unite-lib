/// <reference types="node" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");
const libDist = path.join(repoRoot, "dist");
const libDistIndex = path.join(repoRoot, "dist", "index.js");
const editsPath = path.join(repoRoot, "dev", "spawn-editor", "edits.json");
const applyScriptPath = path.join(repoRoot, "dev", "scripts", "apply-spawn-edits.js");

function pathIsInDir(file: string, dir: string): boolean {
  const rel = path.relative(path.resolve(dir), path.resolve(file));
  return rel !== "" && !rel.startsWith("..") && !path.isAbsolute(rel);
}

function readJsonBody(req: NodeJS.ReadableStream & { url?: string }): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk: Buffer) => chunks.push(chunk));
    req.on("end", () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf-8")));
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: "apply-edits-api",
      configureServer(server) {
        server.middlewares.use("/__apply-edits__", async (req, res, next) => {
          if (req.method !== "POST") return next();
          res.setHeader("Content-Type", "application/json");
          try {
            const body = (await readJsonBody(req)) as { edits?: Record<string, unknown> };
            const edits = body?.edits ?? body;
            if (typeof edits !== "object" || edits === null || Array.isArray(edits)) {
              res.statusCode = 400;
              return res.end(JSON.stringify({ ok: false, error: "Body must be { edits: { ... } }" }));
            }
            fs.writeFileSync(editsPath, JSON.stringify(edits, null, 2), "utf-8");
            const out = execSync(`node "${applyScriptPath}"`, { cwd: repoRoot, encoding: "utf-8" });
            let applied = 0;
            const countMatch = out.match(/APPLIED_COUNT=(\d+)/);
            if (countMatch) applied = parseInt(countMatch[1], 10);
            try {
              execSync("npm run build", { cwd: repoRoot, encoding: "utf-8", stdio: "pipe" });
            } catch {
              // build failed; spawns.ts was still updated
            }
            res.statusCode = 200;
            res.end(JSON.stringify({ ok: true, applied }));
          } catch (err) {
            res.statusCode = 500;
            res.end(
              JSON.stringify({
                ok: false,
                error: err instanceof Error ? err.message : String(err),
              })
            );
          }
        });
      },
    },
    {
      name: "serve-repo-assets",
      configureServer(server) {
        server.middlewares.use("/maps", (req, res, next) => {
          const url = (req as { url?: string }).url ?? "";
          const file = path.join(repoRoot, "maps", url);
          if (!pathIsInDir(file, path.join(repoRoot, "maps"))) return next();
          fs.createReadStream(file).on("error", next).pipe(res);
        });
        server.middlewares.use("/neutrals", (req, res, next) => {
          const url = (req as { url?: string }).url ?? "";
          const file = path.join(repoRoot, "neutrals", url);
          if (!pathIsInDir(file, path.join(repoRoot, "neutrals"))) return next();
          fs.createReadStream(file).on("error", next).pipe(res);
        });
      },
    },
    {
      name: "watch-unite-lib",
      configureServer(server) {
        const doReload = () => {
          server.ws.send({ type: "full-reload", path: "*" });
        };
        if (fs.existsSync(libDist)) {
          server.watcher.add(libDist);
          server.watcher.on("change", (file) => {
            if (pathIsInDir(file, libDist)) doReload();
          });
          server.watcher.on("add", (file) => {
            if (pathIsInDir(file, libDist)) doReload();
          });
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Carrega sempre do dist da raiz do repo (evita cópia antiga em node_modules)
      "unite-lib": libDistIndex,
    },
  },
  server: {
    port: 5174,
    fs: { allow: [repoRoot] },
  },
  optimizeDeps: {
    exclude: ["unite-lib"],
  },
});
