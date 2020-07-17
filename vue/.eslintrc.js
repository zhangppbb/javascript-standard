module.exports = {
  // 更多配置 https://eslint.bootcss.com/docs/user-guide/configuring
  "root": true,
  "env": {
    "node": true
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
  }
}
