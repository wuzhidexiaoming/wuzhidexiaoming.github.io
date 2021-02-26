---
title: JS使用对象模拟栈结构
categories: default
copyright: true
author: 小名
tags:
  - Linux
abbrlink: 436c
date: 2021-02-04 16:45:34
---
{% note info %}JS使用对象模拟栈结构{% endnote %}
<!-- more -->
# 栈数据结构 后进先出（LIFO）

> 栈是一种遵从后进先出（LIFO）原则的有序集合。新添加或待删除的元素都保存在栈的同
> 一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。

  实现下面这些方法

- `push`
- `pop`
- `peek`
- `size`
- `isEmpty`
- `clear`
- `toString`



```javascript
/*
 * 用对象模拟栈结构
 * */

class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  pop() {
    delete this.items[this.count];
    this.count--;
  }
  size() {
    return this.count;
  }
  clear() {
    this.items = {};
  }
  peek() {
    if (this.isEmpty()) {
      return "";
    } else {
      return this[0];
    }
  }
  isEmpty() {
    return this.count <= 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    // 每一次循环都是上一层加一个逗号再加上当前层，直到最后一层 妙啊！
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
```