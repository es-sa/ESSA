import typescript from "@rollup/plugin-typescript";
import react from "react";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: { main: "./lib/js/es-sa.ts", component: "./lib/js/SaBox.tsx" },
  output: {
    format: "esm",
    dir: "dist",
    entryFileNames: "[name].js",
    chunkFileNames: "[name].js",
    sourcemap: true,
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "./dist",
      rootDir: "./",
    }),
    terser(),
    commonjs(),
  ],
  external: ["react"],
};
