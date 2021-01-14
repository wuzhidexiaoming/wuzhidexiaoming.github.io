---
title: vue自定义v-model
categories: 前端
copyright: true
author: 小名
tags:
  - Vue
abbrlink: ef1d
date: 2020-03-27 11:16:28
---

{% note info %}vue 中自定义 v-model 写法--笔记{% endnote %}

<!-- more -->

# vue 中自定义 v-model

## 补充

- 个人认为严格来说,vue 属于单项数据流。因为什么双向绑定啊，其实是语法糖
- 用到了`model`、`props`

## 代码演示

```html
// 父组件
<xm-input v-model="text"></xm-input>
// 上面的写法与下面这个一段效果相同！如果用下面的这段写法，在子组件中不需要配置 model 选项。
<xm-input 
  :text="text"
  @change="val=>text = val"
></xm-input>
... 
... 
data(){ return{ text:"小名" } }
```

```javascript
// 子组件
<template>
  <div class="main">
    <input type="text" :value="text" @input="changeFn(e)" />>
  </div>
</template>
export default {
  model: {
    prop: "text", // prop后面的 text 与下面 props中的 text 必须一直，而下面 props中的 text是通过自定义属性而来的。v-model指令替我们做了一些东西（监听事件，自定义属性。）。
    event: "cahgne"
  },
  props:{
    text:{
      type:String,
      default(){
        return ""
      }
    }
  },
  methods:{
    changeFn(e){
      // 将input输入框的值传到change事件中
      this.$emit('change',e.target.value)
    }
  }
};
```

## 整个自定义v-model的逻辑
- 逻辑就是，自定义一个属性和一个事件，在子组件中，更改内容触发 input 事件时通过 $emit()调用之前自定义的事件A并将input输入框的value当作附加参数，A事件做的就是把自定义属性以来的数据变为接受的 value值，然后，自定义属性依赖数据变动，子组件props接受的数据也变动，改变 input 输入框中的内容。

## 常见应用
- 颜色选择器

---
