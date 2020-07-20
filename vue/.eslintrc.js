const isProduction = process.env.NODE_ENV === 'production'
// "off"或0-关闭规则
// "warn"或1-将规则作为警告打开（不影响退出代码）
// "error"或2-将规则作为错误打开（退出代码将为1）
module.exports = {
  // 更多配置 https://eslint.bootcss.com/docs/user-guide/configuring
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  "extends": [
    // plugin:vue vue 开发规范https://eslint.vuejs.org/
    // plugin:vue/base 基础的
    // plugin:vue/essential 必须的
    // plugin:vue/recommended 推荐的
    "plugin:vue/recommended",
    // 基于airbnb 编码规范，主要用于规范JavaScript
    "@vue/airbnb"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "rules": {
    // 在线配置调试 https://mysticatea.github.io/vue-eslint-demo/#eJyNV8Fu4zYU/BVVl20Bc4Nub0YaoO2l9xbooemBkp4sbihSISnH3sD/3iEpUZTkAIsgsTnzRPK9Nxwx72WtGyqP5aOjfpDc0dOzKorHRpyLMyNp47go/iQp9aF4fy8U76m43X6IuI+M3wo80Grz63MpMFeh28J/2udypl/oOpGfRTPDTzOLmQPlp7/dpskfMPsU8ViNzmmFRbQ61lLUL5hMqz/8t+fy6ffAPj7EqJjE9PTjQ5bbo62NGBy+0WXQxhUNtXyUrnj3j/jFj8Wn34bh08GPG+74MVKJ/Ecb2US6iCkei39TFqI5Fj8fptjnkj+Xt8OK/LKQ1Y78ZSFrkJH7z3/EwJ5cpxubtjTl/+NPM1AUDw9FowurfahQp88RD1Phz82XYypBeSjNKMmWx3eoQFlnxtppw+w4kCmPXw4l2skaYah2QquAnMg5MsyQG01ElGY1t8QaqiU33EfaREhuLcOvOC3Buh+4IaboxL6R0Quuml2oslpSPnR3QhxXLjwu0jYj44yW2OqJLjPYUDWeTlN2YSzJETvzBUHyjJuTXQExkZ76isyagahzAN2AzkJFZhTac1dWdyhO7WsX5lqTA/dVVSswDS6blOniDGeVRmW48iu5NWOpFzPScildZ/R46hI0qnoz40nqissNKJTCZu91Vagzl6KJlR0SajAeEczeOpwKO/A6laAXF2pYgCAH9NnxKk2n6I3Za19pOSO6+oq8pEwhunY8sYbipmgBsI9p9hmzJNtNQggw1vfW8KVlOCOWVQShU6Z7EKOCMSwDJIpTgCR6eIWQQtHCGeLobiUzyPKWWCsUkrhuUOie5zod1Wgxr+QVLQlPIHS5QEiJIEKyNR/iUqgTNsVsBx/rUNYAGnodcWTZVZCMCJ5kwioel4y9c9eBdMzvPNJDKAqroNAXcqGUsI6c1W971DkjYLfEuuvQkVqyWrGWadNMdfVEJXX9spvML40OuOtURY/VcEKZTlJAdN9z1nB1kmuQ4ACTUZ1XzKCV57ypQrdsfhH4Y5MvT6/+Jw0710ucU+1jUlWg09T3D4O2eYUgCoqfLCWhAgpTbo29jtrRJi5IeVonMV/txSvCLhLxKMxot4Oeu7pjSylaISnUI4uAxSztwiFgq0ST5FnMRlKotzfYUNtNXfoRjlx3vt4wtUHLIIzdvkJLBqOxnLfHdT+gd26vMCr0zG999EdvChZZgRA3G+H0Hs8p7LAdQ3vCzQR/RZvzawNfwMnEl5rkfKhG7jYT7t3FL0U4LCYnDFkyZ+x/uxIILBBcBbk6fslJi/cFiKVv/iqyChANMWpbaN5+R5lm88W7AGqER8DwvTuGZ1Om+RPprGDfd3FssdFva+risG3OZg3k5ORpKSN7h1ypOZpe6Bp7E66LXczpc1BkQiY/rEcj9+cguNBcqM0GfMmiR2x0OJvp0gZhd+SkvFD4PRlcicXL5o4NC3svZtkF7OOo/doG3rK+j+VslH3ev8SEt8AHO/dz3ZPUMk28QW4tzJdO0vc7RdAkJmnFhenBbvBRcXNd4eFlnbl4IqJMYDJ0wR0rwWdWYYebt0qI85eg4Er+mrGmNtHxbTlL3mjtNlxcZAfCsPnLDvX/UOUmlOM7MBf7jK30PoN3JuzxX90+MHs/L1C9X3kwewy3jLcd6A88wNuhjFL4S3yLT8bh31d/UynjXfBQhgsYcipxOzRE5e1/8xHuHg==
    // 更多关于 vue eslint 配置 https://eslint.vuejs.org/rules/
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
    'no-console': isProduction ? 1 : 0,
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
    'guard-for-in': 0
  }
}
