const resolve = require("rollup-plugin-node-resolve");
const babel = require("rollup-plugin-babel");

const commonjs = require("rollup-plugin-commonjs");
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: `dist/index.js`,
        format: "iife"
      }
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: [["@babel/preset-typescript"]]
      }),
      resolve(),
      commonjs()
    ]
  }
];
