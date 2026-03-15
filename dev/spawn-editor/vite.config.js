var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/// <reference types="node" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
var __dirname = path.dirname(fileURLToPath(import.meta.url));
var repoRoot = path.resolve(__dirname, "../..");
var libDist = path.join(repoRoot, "dist");
var libDistIndex = path.join(repoRoot, "dist", "index.js");
var editsPath = path.join(repoRoot, "dev", "spawn-editor", "edits.json");
var applyScriptPath = path.join(repoRoot, "dev", "scripts", "apply-spawn-edits.js");
function pathIsInDir(file, dir) {
    var rel = path.relative(path.resolve(dir), path.resolve(file));
    return rel !== "" && !rel.startsWith("..") && !path.isAbsolute(rel);
}
function readJsonBody(req) {
    return new Promise(function (resolve, reject) {
        var chunks = [];
        req.on("data", function (chunk) { return chunks.push(chunk); });
        req.on("end", function () {
            try {
                resolve(JSON.parse(Buffer.concat(chunks).toString("utf-8")));
            }
            catch (e) {
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
            configureServer: function (server) {
                var _this = this;
                server.middlewares.use("/__apply-edits__", function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
                    var body, edits, out, applied, countMatch, err_1;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (req.method !== "POST")
                                    return [2 /*return*/, next()];
                                res.setHeader("Content-Type", "application/json");
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, readJsonBody(req)];
                            case 2:
                                body = (_b.sent());
                                edits = (_a = body === null || body === void 0 ? void 0 : body.edits) !== null && _a !== void 0 ? _a : body;
                                if (typeof edits !== "object" || edits === null || Array.isArray(edits)) {
                                    res.statusCode = 400;
                                    return [2 /*return*/, res.end(JSON.stringify({ ok: false, error: "Body must be { edits: { ... } }" }))];
                                }
                                fs.writeFileSync(editsPath, JSON.stringify(edits, null, 2), "utf-8");
                                out = execSync("node \"".concat(applyScriptPath, "\""), { cwd: repoRoot, encoding: "utf-8" });
                                applied = 0;
                                countMatch = out.match(/APPLIED_COUNT=(\d+)/);
                                if (countMatch)
                                    applied = parseInt(countMatch[1], 10);
                                try {
                                    execSync("npm run build", { cwd: repoRoot, encoding: "utf-8", stdio: "pipe" });
                                }
                                catch (_c) {
                                    // build failed; spawns.ts was still updated
                                }
                                res.statusCode = 200;
                                res.end(JSON.stringify({ ok: true, applied: applied }));
                                return [3 /*break*/, 4];
                            case 3:
                                err_1 = _b.sent();
                                res.statusCode = 500;
                                res.end(JSON.stringify({
                                    ok: false,
                                    error: err_1 instanceof Error ? err_1.message : String(err_1),
                                }));
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
            },
        },
        {
            name: "serve-repo-assets",
            configureServer: function (server) {
                server.middlewares.use("/maps", function (req, res, next) {
                    var _a;
                    var url = (_a = req.url) !== null && _a !== void 0 ? _a : "";
                    var file = path.join(repoRoot, "maps", url);
                    if (!pathIsInDir(file, path.join(repoRoot, "maps")))
                        return next();
                    fs.createReadStream(file).on("error", next).pipe(res);
                });
                server.middlewares.use("/neutrals", function (req, res, next) {
                    var _a;
                    var url = (_a = req.url) !== null && _a !== void 0 ? _a : "";
                    var file = path.join(repoRoot, "neutrals", url);
                    if (!pathIsInDir(file, path.join(repoRoot, "neutrals")))
                        return next();
                    fs.createReadStream(file).on("error", next).pipe(res);
                });
            },
        },
        {
            name: "watch-unite-lib",
            configureServer: function (server) {
                var doReload = function () {
                    server.ws.send({ type: "full-reload", path: "*" });
                };
                if (fs.existsSync(libDist)) {
                    server.watcher.add(libDist);
                    server.watcher.on("change", function (file) {
                        if (pathIsInDir(file, libDist))
                            doReload();
                    });
                    server.watcher.on("add", function (file) {
                        if (pathIsInDir(file, libDist))
                            doReload();
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
