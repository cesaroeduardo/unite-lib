import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "i18n/index": "src/i18n/index.ts",
  },
  format: ["esm", "cjs", "iife"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  globalName: "UniteLib",
  outDir: "dist",
});
