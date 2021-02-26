---
title: React中的函数式组件this指向问题
categories: default
copyright: true
author: 小名
abbrlink: 136c
date: 2021-02-04 16:45:34
---
{% note info %}React中的函数式组件this指向问题{% endnote %}
<!-- more -->
  React中组件有函数式组件和类式组件,类式组件中的方法有自己的`this`,只需做到绑定`this`就可以避免方法作为事件绑定情景时`this`丢失的问题了

## 函数式组件

  ```react
// Person.js 定义一个 Person组件
function Person(){
  return (
  	<p>打工人</p>
  )
}
export default Person

  ```

  函数式的组件中,是有没 `this` 的,`props`可以通过参数的方式使用,而`refs`和`state`则没有(用hooks则可以解决)

## 副作用

## 纯函数

