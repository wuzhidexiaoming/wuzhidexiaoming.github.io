---
title: vue数据监听原理
categories: 前端
copyright: true
author: 小名
tags:
  - Vue进阶
abbrlink: 560e
date: 2020-03-27 11:49:37
---

{% note info %}vue中是如何对数据进行监听的--笔记{% endnote %}

<!-- more -->

# Vue数据监听（对象、数组）
## 这是对象的监听方式
```javascript
    /**
     * updateView() 更新
     * defineReactive() 核心功能
     * observer() 入口
     * /
    function updateView() {
      console.log('更新视图');
    }
    function defineReactive(target,key,value) {
      observer();
      Object.defineProperty(target,key,{
        get(){
          return value;
        },
        set(val){
          observer();
          if (val!==value) {
            value = val;
            updateView();
          }
        }
      })
    }

    function observer(target) {
      if (typeof target !=='object' || typeof target==='null') {
        return target
      }
      for(let key in target){
        defineReactive(target,key,target[key])
      }
    }
```

## 这是数组的监听方式
```javascript
    /**
     * arrProto 新数组原型
     * updateView() 更新
     * defineReactive() 核心功能
     * observer() 入口
     * /
    
    const oldArrProto = Array.prototype;
    const arrProto = Object.create(oldArrProto);
    let methods = ['push','shift']; // 此处拿这两个方法举例
    methods.forEach(methodName=>{
      methodName=function(){
        updateView();
        oldArrProto[methodName].call(this,...arguments);
      }
    })

    function updateView() {
      console.log('更新视图');
    }
    function defineReactive(target,key,value) {
      observer();
      Object.defineProperty(target,key,{
        get(){
          return value;
        },
        set(val){
          observer();
          if (val!==value) {
            value = val;
            updateView();
          }
        }
      })
    }

    function observer(target) {
      if (typeof target !=='object' || typeof target==='null') {
        return target
      }
      // 相比对象的监听，此处添加一个判断，如果target为数组，则改变target的原型，使target使用开始定义的arrProto中的push和shift方法
      if (Array.isArray(target)) {
        Object.setPrototypeof(target,arrProto)
      }
      for(let key in target){
        defineReactive(target,key,target[key])
      }
    }
```
## 小结
- 以上就是vue中对数组和对象的监听，特点就是，**一次性递归到底（计算量略大）**,后来添加的新属性，无法添加到响应式中。（可以用vm.$set，实现方式还不知道。）
---

