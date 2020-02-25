const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
export default [
  {
    input: "src/index.js",
    output: [
      {
        file: `dist/index.js`,
        format: "esm"
      }
    ],
    plugins: [
      resolve(),
      commonjs()
    ]
  }
];
