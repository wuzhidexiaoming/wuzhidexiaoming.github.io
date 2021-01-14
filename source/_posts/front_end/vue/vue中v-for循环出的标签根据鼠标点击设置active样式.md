---
title: v-for循环出的标签点击时给添加一个active的类名
categories: 
  - 前端
  - Vue
copyright: true
author: 小名
abbrlink: 59ed
date: 2020-03-06 17:42:18
tags: Vue
---

{% note info %}有一标签`v-for`循环,实现点击每个循环的标签给其一个激活样式{% endnote %}

<!-- more -->

# vue中v-for循环出的标签根据鼠标点击设置active样式

```html
  <div v-for="(item,index) in 5" :key=index @tap="clickItem(index)" :class="{active:tempArr[index]}">
  </div>
```
上面的代码指,有一标签`v-for`循环,想要实现点击每个循环的标签给其一个激活样式
```JavaScript
  data(){
    return{
      tempArr:[false,false,false,false,false,false,false,false,false,false] //此处tempArr.length只要大于5就可以
    }
  },
  method:{
    clickItem(index){
      this.temp = {}
      this.tempArr[index] = true
    }
  }
```
+ 源码: [https://gitee.com/wuzhidexiaoming/material/blob/master/20200305/vue-demo1.html](https://gitee.com/wuzhidexiaoming/material/blob/master/20200305/vue-demo1.html)

---

