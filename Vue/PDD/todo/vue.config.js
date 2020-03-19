const path = require("path");
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('css')
        .test(/\.css$/)
        .oneOf('vue')
        .resourceQuery(/\?vue/)
        .use('px2rem')
          .loader('px2rem-loader')
          .options({
            remUnit: 75
          })
  },
  pluginOptions: {
    'style-resources-loader': {
        preProcessor: 'scss',
        patterns: [
          //加上自己的文件路径，不能使用别名
          path.resolve(__dirname, 'src/styles/_variables.scss'),
        ]
      }
    }
}
