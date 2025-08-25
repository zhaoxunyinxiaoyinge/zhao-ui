import babel from '@rollup/plugin-babel';
import commonjs from "rollup-plugin-commonjs"//可以使用import的方式，导入，在导出文件中使用module.exports
import resolve from "@rollup/plugin-node-resolve"
import typescript from 'rollup-plugin-typescript2';
import json from "@rollup/plugin-json"
import postcss from 'rollup-plugin-postcss'
import vue from "rollup-plugin-vue";
import path from "path"
import VueSetupExtend from 'unplugin-vue-setup-extend/rollup';


const pkg = require(path.resolve( 'package.json'));
const outpoutConfig = {
  "esm-bundler": {
    file: `dist/es/zhao-ui.esm-bundler.js`,
    format: "es"
  },
  "cjs": {
    file: `dist/lib/zhao-ui.cjs.js`,
    format: 'cjs'
  }
}

function createBuild(format, output) {
  output.sourcemap = true
  output.exports = 'named';
  return{
    input: path.resolve("../../", 'packages/compnents/index.ts'),
    external: ['vue'],
    output,
    cache: false,
    plugins: [
      vue(),
      VueSetupExtend({
        name:false
      }),
      typescript(
          {tsconfig:"./tsconfig.json"
          }
      ),
      postcss(),
      babel({
        babelHelpers: 'bundled',
        presets: ["@vue/babel-preset-jsx"],
        extensions: ['.js', '.vue', ".ts", ".jsx", ".tsx"]
      }),
      json(),
      commonjs(),
      resolve()
    ]
  }
}



export default pkg.buildoption.format.map((item) => createBuild(item, outpoutConfig[item]));