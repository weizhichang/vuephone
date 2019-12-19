//vue.config.js
const path = require('path')

module.exports = {
    chainWebpack: config => {
      config.module
        .rule("eslint")
        .use("eslint-loader")
        .loader("eslint-loader")
        .tap(options => {
          options.fix = true;
          return options;
        });
    },

    // 在全局引入less文件
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [path.resolve(__dirname, "./src/assets/styles/variables.less")] // 引入全局样式变量
      }
}
  };