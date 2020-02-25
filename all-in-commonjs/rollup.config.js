const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
export default [
  {
    input: "src/index.js",
    output: [
      {
        file: `dist/index.js`,
        format: "iife"
      }
    ],
    plugins: [
      resolve(),
      commonjs()
    ]
  }
];
