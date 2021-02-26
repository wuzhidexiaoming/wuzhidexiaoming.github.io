---
title: Class类
categories: default
copyright: true
author: 小名
tags:
  - Linux
abbrlink: 336d
date: 2021-02-04 16:45:34
---
{% note info %}Class类{% endnote %}
<!-- more -->
## 类的定义

```javascript
class Person{
    constructor({age,name}){
        this.age = age
        this.name = name
    }
    // wheel和seeMe定义在了实列身上
    wheel = 2
	// 如果是这种形式,可以实现 "绑定" this
	seeMe = ()=>{
       console.log("i'm" + " " + this.name)
    }
	// sayHello 定义在了 Person.prototype 上
	sayHello(){
        conosle.log('Hello' + " " + this.name)
    }
}
```

## 绑定 this

```javascript
let xiao = new Person({age:18,name:"xiaoming"})
xiao.seeMe();	// i'm xiaoming
let monkey = xiao.seeMe
monkey(); // i'm xiaoming
```



