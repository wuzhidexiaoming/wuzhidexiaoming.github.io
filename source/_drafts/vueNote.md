---
title: vueNote
categories: 默认
copyright: true
author: 小名
abbrlink: b490
date: 2019-11-19 21:00:57
tags:
---

{% note info %}vue临时学习笔记{% endnote %}

<!-- more -->

# `v-for`

- 数组
- json
- 字符串,也是数组
- 数字
- 对象

# `key`属性

- 跟踪,
- `key`属性不能重复,不能变
- 

## 虚拟Dom-json

在页面执行的时候,vue把页面解析一遍,创建一个自己用的大json



# 数据同步原理

- `proxy`对象

# 疑问

1. `v-once`的用法
2. 了解一下`v-pre` ,预编译
3. 学习一下`v-clock`在页面加载完(编译)之前`v-clock`属性尚在,加载(编译)完成之后,`v-clock`属性就会被移除.配合样式`*[v-clock]{display:none}`,

# 事件修饰符

- 可以添加多个事件`@click.stop.once='fn()'`
- `@click.stop='fn()'`
- `.stop`禁止冒泡
- `.once`修饰符,单词事件
- `.prevent` 阻止默认事件
- *`native` 原生事件(组件)*
- `@keydown.enter` 按下回车触发`.keycode|name`,按键
	- 组合键`@keydown.ctrl.enter`
- `self`
- `capture`
- 自定义事件



# 计算属性

- 根据其他数据变化而变化,根据其他数据变得
- 
- 当检测到修改数据a时,就会把跟computed有关的数据a的计算重新计算一遍
- 与methods的区别
- **带缓存**,不会自己重新计算,只有数据变动时才会重新计算,性能较高
- **可读写**
- 属性的方式

# 监听

-   计算属性二里有疑问,10行,v-model=“user_info.name”不需要写字符串么



# vue-router



---

