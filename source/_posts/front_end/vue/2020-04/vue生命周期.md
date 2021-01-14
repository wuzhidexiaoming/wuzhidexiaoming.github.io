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

{% note info %}笔记-vue 生命周期，创建一个 vue 实例发生了什么？各个阶段做了那些？父子组件的生命周期执行顺序{% endnote %}

<!-- more -->

## 生命周期图

![vue生命周期](https://cn.vuejs.org/images/lifecycle.png)

## vue 生命周期

### 挂载

1. new Vue 实例
2. 初始化 event&&lifecycle
3. beforeCreate
4. 注入数据，校验
5. created
6. 是否指定 el 选项
   1. 是，是否指定 template 选项
      1. 是，开始编译生成 render 函数
      2. 否，将 el 外部的 html 作为模板编译，
         1. 存在于 new Vue()的情况。Vue.componetn()没有 template 是不行的。
   2. 否，等待 vm.\$mount()手动挂载
7. beforeMount
8. 创建 vm.\$el,替换掉 el
9. mounted。挂载完毕

### 更新阶段

1. 更新阶段，data 修改
2. beforeUpdate
3. 重新执行 render 函数，new Vnode，新的虚拟 dom，并应用更新（diff）。(多个数据改变为一次循环).
4. updated。更新完毕

### 销毁阶段

1. 下面就是销毁阶段，beforeDestroy
2. 解除绑定，销毁子组件(又走了一边周期)以及事件监听器
3. destroyed.销毁完毕

## 父子组件的生命周期函数执行顺序

- 有父组件 A 和子组件 B，生命周期执行顺序为 `beforeCreate-->created-->beforeMount-->mounted-->beforeUpdate-->updated-->beforeDestroy-->destroyed`
- 除 beforeCreate/created 外，都是父组件先执行 beforeXXX 钩子函数，然后子组件执行整个阶段（挂载、更新、销毁）的钩子函数，执行完阶段最后一个钩子函数之后再执行父组件阶段内的最后一个钩子函数。

## 散乱知识点

- `initState(vm)`是在 `callHook(vm, 'beforeCreate')`之后 `callHook(vm, 'created')`之前，所以在 `beforeCreate`生命周期函数中，无法使用 `props`、 `methods`、`data`、`computed`、`watch`
  ![vue初始化实例源码](https://cdn.llow22.com/picture/Snipaste_2020-03-24_20-42-42.png)
- mounted阶段才可以获取`this.$refs`，可以在这一阶段获取数据。
- 可以beforeCreate弄个loading，然后在created结束
- beforeDestroy,销毁定时器等。或者来个弹窗-确认xx吗？
## 疑问

1. 如果一直不 vm.\$mount(),下面怎么进行
   1. 没有 el 的情况就相当于 vue.componetn(),是由 vue 自动执行 vm.\$mount()的。
2. vm.\$el 替换 el，后面的 el 是指什么东西？
3. 销毁阶段，解除绑定是 el 选项么。还有默认的事件监听器包含了什么？
4. "将 el 外部的 html 作为 template 编译"什么意思？
   1. 就是将 el 节点中的 html 作为 template 编译
   2. 优先 teplate 选项，template 选项编译结果会覆盖掉所挂载的节点上的内容。

---
