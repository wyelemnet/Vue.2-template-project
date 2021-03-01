module.exports = {
  chainWebpack: (config) => {
    // 配置eslint-loader
    config.module
      .rule('lint')
      .test(/\.(vue|js|jsx)$/u)
      .use('eslint-loader')
      .loader('eslint-loader')
      .end();
  },
};
