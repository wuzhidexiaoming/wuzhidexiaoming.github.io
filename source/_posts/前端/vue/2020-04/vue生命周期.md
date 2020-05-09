---
title: vue生命周期
categories: 前端
copyright: true
author: 小名
tags:
  - Vue
abbrlink: 54f6
date: 2020-04-07 14:24:16
---

{% note info %}笔记-vue生命周期，创建一个vue实例发生了什么？各个阶段做了那些？父子组件的生命周期执行顺序{% endnote %}

<!-- more -->
# vue生命周期
![vue生命周期](https://cn.vuejs.org/images/lifecycle.png)

## 挂载
1. new Vue实例
2. 初始化event&&lifecycle
3. beforeCreate
4. 注入数据，校验
5. created
6. 是否指定el选项
   1. 是，是否指定template选项
      1. 是，开始编译生成render函数
      2. 否，将el外部的html作为模板编译，
         1. 存在与new Vue()的情况，Vue.componetn()没有template是不行的。
   2. 否，等待vm.$mount()手动挂载
7. beforeMount
8. 创建vm.$el,替换掉el
9. mounted。挂载完毕

## 更新阶段
1. 更新阶段，data修改
2. beforeUpdate
3. 重新执行render函数，new Vnode，新的虚拟dom，并应用更新。(多个数据改变为一次循环).
4. updated。更新完毕

## 销毁阶段
1. 下面就是销毁阶段，beforeDestroy
2. 解除绑定，销毁子组件(又走了一边周期)以及事件监听器
3. destroyed.销毁完毕


## 注意
- `initState(vm)`是在 `callHook(vm, 'beforeCreate')`之后 `callHook(vm, 'created')`之前，所以在 `beforeCreate`生命周期函数中，无法使用 `props`、 `methods`、`data`、`computed`、`watch`
  ![vue初始化实例源码](https://cdn.llow22.com/picture/Snipaste_2020-03-24_20-42-42.png)

## 疑问

1. 如果一直不vm.$mount(),下面怎么进行
   1. 没有el的情况就相当于vue.componetn(),是由vue自动执行vm.$mount()的。
2. vm.$el替换el，后面的el是指什么东西？
3. 销毁阶段，解除绑定是el选项么。还有默认的事件监听器包含了什么？
4. "将el外部的html作为template编译"什么意思？
   1. 就是将el节点中的html作为template编译
   2. 优先teplate选项，template选项编译结果会覆盖掉所挂载的节点上的内容。

---

