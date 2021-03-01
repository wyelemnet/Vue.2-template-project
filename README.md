## eslint + prettier 配置：

- yarn add -D eslint babel-eslint eslint-config-prettier eslint-loader eslint-plugin-prettier eslint-plugin-vue
- 添加.eslintrc 及.eslintignore 文件
- vue.config.js 中添加代码配置 eslint-loader
  ```
  chainWebpack: (config) => {
    // 配置eslint-loader
    config.module
      .rule('lint')
      .test(/\.(vue|js|jsx)$/u)
      .use('eslint-loader')
      .loader('eslint-loader')
      .end();
  },
  ```
- package.json 的 scripts 中添加脚本代码
  ```
  "lint": "./node_modules/.bin/eslint --ext .js --ext .jsx --ext .vue src/ --fix"
  ```

## husky + lint-staged 配置：

- yarn add -D husky lint-staged
- package.json 的 scripts 中添加脚本代码
  ```
  "husky-prepare": "husky install",
  "lint-staged": "lint-staged",
  ```
- package.json 中添加属性代码
  ```
  "lint-staged": {
    "src/**/*.{js,vue,jsx,ts,tsx,json,css,scss,md}": [
      "yarn lint",
      "git add"
    ]
  },
  ```
- yarn husky-prepare生成husky初始文件
- npx husky add .husky/pre-commit "yarn lint-staged"添加pre-commit hook