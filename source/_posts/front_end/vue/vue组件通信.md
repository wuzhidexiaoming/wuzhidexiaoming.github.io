---
title: vue组件通信
categories: 前端
copyright: true
author: 小名
tags:
  - Vue
  - 组件通信
  - 笔记
abbrlink: '90e3'
date: 2020-03-24 18:34:14
---

{% note info %}vue 组件常用组件传值的方法-笔记{% endnote %}

<!-- more -->

# Vue 组件通信的几种方式

## 父子通信`props`/`$emit`

- 父(传): 通过自定义属性给子组件传递父组件的数据
- 子(收): 通过`props`选项接收来自父组件的数据。
  - `undefined` 和 `null` 可以通过任意 `type` 类型
  - `props`早于组件实例创建之前验证，实例的属性`data`、`computer`等在 `default`(默认值，当没有接收到数据) 或 `validator`(自定义验证函数)中无法使用。
  - `type` 或 `validator`验证失败的话，在开发环境中只会在控制台报错，依旧会继续进行传值。

## `ref` / `$refs`
- 这个可以通过 `$refs` 获取指定 `ref`实例的数据和方法。

## `eventbus` 事件总线

- `$emit` 触发当前实例上的事件，附加的参数传给监听器回调--传值的组件
- `$on` 监听当前实例上的事件，回调函数会接收 `$emit`触发事件时附加的参数
- `$off` 在 `beforeDestroy` 中销毁事件，防止内存泄漏

## vuex

- 单一状态树，具体文档说的很详细(这里只提一下,但是它是vue中很重要的一部分)。[文档地址](https://vuex.vuejs.org/zh/)

## 其他的不常用

- `$children` / `$parent`
  - 可以通过 `parent` 选项建立父子组件的关系。那样子实例就可以用 `this.$parent` 访问父实例
- `provide` / `inject` 选项，直接能将数据传给888代子孙。

## 参考
- https://cn.vuejs.org/v2/guide/routing.html

---
