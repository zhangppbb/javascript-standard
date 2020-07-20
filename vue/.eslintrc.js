// "off"或0-关闭规则
// "warn"或1-将规则作为警告打开（不影响退出代码）
// "error"或2-将规则作为错误打开（退出代码将为1）
module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    "plugin:vue/recommended",
    "@vue/airbnb"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    // https://eslint.vuejs.org/rules/max-attributes-per-line.html 每行vue / max属性 
    "vue/max-attributes-per-line": [2, {
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    // https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html 在单行元素的内容之前和之后需要换行
    "vue/singleline-html-element-content-newline": 0,
    // https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html 在多行元素的内容之前和之后需要换行
    "vue/multiline-html-element-content-newline": 0,
    // https://eslint.vuejs.org/rules/no-v-html.html#vue-no-v-html 禁止使用v-html防止XSS攻击
    "vue/no-v-html": 0,
    // https://eslint.org/docs/rules/camelcase 需要驼峰
    'camelcase': 0,
    // https://eslint.org/docs/rules/max-len 强制最大行长
    'max-len': 0,
    'no-prototype-builtins': 0,
    'no-unresolved': [0],
    "import/extensions": [0, 'always'],
    // https://eslint.org/docs/rules/consistent-return 语句始终或永不指定值
    'consistent-return': 0,
    // https://eslint.org/docs/rules/no-console 禁止使用console
    'no-console': 0,
    // https://eslint.org/docs/rules/quotes 强制使用反引号，双引号或单引号（引号）的一致使用
    "quotes": [1, "single"],
    // https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-unresolved.md 导入/未解决
    "import/no-unresolved": [
      1,
      {
        "ignore": ["^@/"]
      },
    ],
    // https://eslint.org/docs/rules/no-underscore-dangle 禁止在标识符中悬挂下划线（no-underscore-dangle）
    'no-underscore-dangle': 0,
    // https://eslint.org/docs/rules/no-plusplus 禁止一元运算符++和--
    'no-plusplus': 0,
    // https://eslint.org/docs/rules/no-nested-ternary 禁止嵌套三元表达式（无嵌套三元
    'no-nested-ternary': 0,
    // https://eslint.org/docs/rules/no-unused-expressions 禁止使用未使用的表达式
    'no-unused-expressions': 0,
    // https://eslint.org/docs/rules/no-shadow 止在外部范围中声明的阴影变量中声明
    'no-shadow': 0,
    // https://eslint.org/docs/rules/no-new 禁止新的副作用
    'no-new': 0,
    // https://eslint.org/docs/rules/no-lonely-if 禁止将if语句作为else块中的唯一语句
    'no-lonely-if': 0,
    // https://eslint.org/docs/rules/global-require 在顶层模块范围内强制require
    'global-require': 0,
    // https://eslint.org/docs/rules/no-restricted-syntax 禁止使用指定的语法
    'guard-for-in': 0,
    // https://eslint.org/docs/rules/no-param-reassign 禁止重新分配功能参数（无参数重新分配）
    'no-param-reassign': 0
  }
}
