---
title: v-if与v-show的区别
categories: 前端
copyright: true
author: 小名
tags:
  - Vue
  - Performance
abbrlink: f683
date: 2020-04-20 06:59:46
---

{% note info %}v-if 与 v-show 的区别？display:none;与 visibility: hidden;的区别？{% endnote %}

<!-- more -->

# v-if 与 v-show 的

- 前者是根据条件渲染，后者是根据条件设置 display 属性。意味着，前者根据条件决定带有 v-if 的元素是否出现 Dom Tree 中，而后者则是根据条件决定带有 v-show 的元素是否出现在 Render Tree 中

- Render Tree 是由 Dom Tree 和 CSSOM 合成的。
- Dom Tree 是解析 HTML 生成的。
- CSSOM 是解析 css 构建生成的
  ![Render tree](https://cdn.llow22.com/picture/render-tree-construction.png)

---
