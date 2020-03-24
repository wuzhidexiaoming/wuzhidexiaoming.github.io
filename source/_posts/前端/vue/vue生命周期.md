---
title: vue生命周期
categories: 前端
copyright: true
author: 小名
tags:
  - Vue
abbrlink: 54f6
date: 2020-03-24 20:44:06
---

{% note info %}笔记看一点记一点{% endnote %}

<!-- more -->

# vue 生命周期
![vue生命周期](https://cn.vuejs.org/images/lifecycle.png)

## 初始化实例
- `initState(vm)`是在 `callHook(vm, 'beforeCreate')`之后 `callHook(vm, 'created')`之前，所以在 `beforeCreate`生命周期函数中，无法使用 `props`、 `methods`、`data`、`computed`、`watch`
  ![vue初始化实例源码](https://cdn.llow22.com/picture/Snipaste_2020-03-24_20-42-42.png)


---
