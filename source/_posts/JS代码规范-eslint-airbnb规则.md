---
title: JS代码规范-eslint+airbnb规则
tags:
  - JS
categories: 默认
copyright: true
toc: false
originContent: ''
date: 2019-11-14 13:56:10
---



{% note info %} 简单配置eslint+aiebnb代码规范 {% endnote %}

<!-- more -->

# elsint+airbnb的规范
1. `npm init -f` 初始化
2. `npm install eslint`
3. `eslint --init` 看着选择,这个时候用的是`eslint-config-airbnb-base`
4. `npm info "eslint-config-airbnb@latest" peerDependencies` 查看`eslint-config-airbnb`安装需要的依赖版本
5. `npm install --save-dev eslint-config-airbnb eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#`
6. `npm insatll --save-dev babel-eslint` 解析
7. `npm install --save-dev eslint-plugin-html` html文件可用
8. 该安装的都安装完了

## 配置文件

```json
{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "plugins": ["html"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {}
}

```

配置文件参数参照[链接](https://cn.eslint.org/docs/user-guide/configuring)