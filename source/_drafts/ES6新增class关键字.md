---
title: ES6新增class关键字
categories: 前端
copyright: true
author: 小名
tags:
  - JS
  - ES6
abbrlink: b910
date: 2020-03-22 14:24:18
---

{% note info %}ES6新增class关键字{% endnote %}

<!-- more -->

# ES6新增class关键字

## 之前继承方式
```javascript
    function Person(name){
      this.name = name
    }
    Person.prototype.sayHello = function(){
      alert(this.name)
    }

    function Subp(name,age) {
      Person.call(this,name)
      this.age = age
    }
    Subp.prototype = new Person()
    Subp.prototype.constructor = Subp
    Subp.prototype.sayHello2 = function(){
      alert(this.age)
    }
```
## class关键字
---

