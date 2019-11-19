---
title: vue学习-01
categories: 默认
copyright: true
author: 小名
abbrlink: 49f7
date: 2019-11-19 19:07:07
tags: 
  - Vue 
  - Js
---

{% note info %}vue初体验,一些指令介绍{% endnote %}

<!-- more -->

# Vue简单介绍

## 常用指令

### `v-on`

- `<button v-on:click="fn()">点击</button> ` ,在这之中,fn后面的()不写也会生效,但是通常添加!
- 简称`@`,`<button @click="fn()">点击</button> `

### `v-bind`

### `v-model`

### `v-for`

- `<li v-for="item in list"></li>` ,`item`是数组的每一项,`v-for`指令就是循环创建`list.lenght`个`li`元素,即使数组项为`empty`

### `v-show`

- [点击显示/隐藏案列](https://xhxm.xyz/xiaomingDemo/learnVue01.html)
- 只是显示/隐藏,元素还存在

### `v-if`,`v-else`,`v-else-if`

- > 这块内容只会在指令的表达式返回 truthy 值的时候被渲染。 

- 直接删除元素(删除元素后会`<!---->`替代)

### `v-text`

### `v-html`

---

​	