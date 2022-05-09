import babel from 'rollup-plugin-babel'
//rollup 默认可以导出一个对象作为打包的配置文件
export default {
  input: './src/index.js', //入口
  output: {
    file: './dist/vue.js',  //出口
    name: 'Vue', //global.Vue
    format: 'umd',//esm:es6模块,commonjs:node中使用 iife:自执行函数 umd:统一模块规范,(commonjs ,amd)
    sourcemap:true,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' //排除node_modules所有文件
    }),
  ]
}
