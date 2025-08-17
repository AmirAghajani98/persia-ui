import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  target: "es2019",

  treeshake: true,
  // If you need to tweak JSX handling, uncomment below:
  // esbuildOptions(options) {
  //   options.jsx = 'automatic' // or 'transform' | 'preserve'
  // },
  minify: true,
});
