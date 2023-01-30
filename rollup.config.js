import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import babel from "rollup-plugin-babel";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      globals: {
        "styled-components": "styled",
      },
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
      globals: {
        "styled-components": "styled",
      },
    },
  ],
  external: ["react", "styled-components"],

  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: [".css"],
    }),
    babel({
      plugins: ["babel-plugin-styled-components"],
      exclude: "node_modules/**",
    }),
  ],
};
