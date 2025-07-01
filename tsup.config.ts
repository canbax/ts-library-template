import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs", "iife"],
  globalName: "GraphLayout",
  dts: true,
  minify: true,
  clean: true,
  sourcemap: true,
});
