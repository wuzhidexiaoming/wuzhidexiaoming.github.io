---
title: ES6基础语法
tags:
  - JS
  - ES6
categories: 前端
copyright: true
toc: false
date: 2019-11-14 10:31:12
---


{% note info %} es6基础语法,let,const,解构,箭头函数等 {% endnote %}

<!-- more -->

# ES6基础

## 常量 `const` 和变量 `let`

- `var`的缺陷
  - 可以重复声明(JS高程中说`var`无视重复声明,但如果赋新值的话会生效)
  - 没有块级作用域
  - 不能限制,常量,变量
- `let`和`const`
  - `let` 禁止重复声明,重复声明报错
  - `let` 可以修改
  - 支持块级作用域
  - `const` 禁止修改,修改报错

## 块级作用域

- ES5中只有全局作用域和函数作用域
- ES6增加了一个块级作用域,`{}` 就是一个块
- 变量跟着语法块的变,下面的示例用 `var` 声明的话,就是全局作用域,整个代码只有一个i变量,settimeout异步执行,所以最后var打印的会是同一个值(闭包也可以实现)

```javascript
  for (let a = 0;a<5;a++){
        setTimeout(()=>console.log(a),0)
    }

    // 闭包版本
    for (var a = 0;a<5;a++){
        // 下面这行里面的参数必须是a
        setTimeout((function(a) {
            return function() {
              console.log(a)
            }
        })(a),0)
    }
```

## 解构赋值

- 定义大量变量
- 左右一样
- 右边需要是个 `东西` (可以用的东西.数组,对象.字符串等)
- 对象按照属性名解构,数组按照位置
- `console.log` 封装成 `log`

```javascript
    let log = str => console.log(str);
    log(55);  //55
```

## 箭头函数

- `(xxx)=>{return xxx}`
- 箭头函数执行块return一个对象该怎么写?--加括号({a:'hello',b:'world'})
  `javascript let fn = (a,b)=>({[a]:b})`

- 箭头函数this固向化,在定义的时候固定(没有自己的this)
- 箭头函数没有arguments

## `...` 剩余参数/展开数组

- 剩余参数(函数传参)
  - 不定数量的参数表示为一个数组(真)
  - 包含没有对象形参的实参
  - 多余的实参放到一个数组中
  - 注意 `...` 必须在最后
- 展开数组(操作数组)
  - `let arr = [1,2,3]` , `...arr` 等于 `1,2,3`
  - `let newArr = [...arr,...arr1]`  将数组 `arr` 与数组 `arr1` 合并赋值给新数组
  - `...` 展开的数组返回的是什么类型?  `['1','2','3']怎么变成[1,2,3]`?
    - 方法① `['1','2','3'].map(Number)`

## 自带对象

### Array

- `map`  **映射**
  - `console.log(arr.map(function(item,index){return true}))`  打印出 `arr` 的拷贝并且所有项都为 `true`
- `reduce`  减少
- `forEcach`  遍历
- `fifter`  过滤

### String

### JSON

## 异步处理,之前靠回调

- 现在 `promise`,`async`,`await`
