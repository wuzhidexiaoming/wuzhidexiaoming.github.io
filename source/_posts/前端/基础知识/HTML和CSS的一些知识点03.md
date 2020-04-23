---
title: HTML和CSS的一些知识点03
categories:
  - 前端
  - 基础知识
copyright: true
tags: HTML/CSS
abbrlink: f8a9
date: 2019-09-20 20:00:04
---

{% note info%} CSS常用的选择器、浮动{% endnote %}

<!-- more -->

### [CSS选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)

#### 基本选择器

1. 元素选择器。`p{color:red;}`,所有p标签里面的文字都为红色
2. class，类选择器。`.classname{width:100px;}`，所有类名为"classname"的元素，宽度设置为100px.(一个元素可以有很多类名，每个类名用空格隔开`class="oneClassName twoClassName"`)
3. id选择器，**一个页面中每个id都是唯一的**，`#idName{width:100px}`，所有id名为"idName"的元素，宽度设置为100px
4. 通配符选择器，`*{padding:0}`,就是页面中所有元素都被选中
5. **属性选择器**
   1. `div[attr]` 所有带有`attr`属性的元素
   2. `div[attr="word"]` 所有带有`atrr`属性并且其值为`attr="word`的元素
   3. `div[attr*="w"]` 所有带有`attr`属性并且其值包含`w`的元素
   4. `div[attr^="w"]` 所有带有`attr`属性并且其值以`w`开头的的元素
   5. `div[attr$="d"]`所有带有`attr`属性并且其值以`d`结尾的的元素

#### 组合选择器

1. 子选择器，`ul>li`，选中所有直接嵌套在ul内的li元素(**子元素**)。
2. 后代选择器，`ul li`，选中所有嵌套在ul内的li元素(**后代元素**)

#### 伪类

1. `:hover`等。待补充...

#### 伪元素

1. `::first-line`等。待补充...

### 浮动

####  浮动的介绍

   1. 脱离文档流，不占据布局空间
   2. 浮动元素会浮动到父元素的边框或者其他浮动元素（超不过内边距），如果浮动元素上面是一个没有浮动的块元素，则浮动元素不会超过块元素，浮动的元素不会超过它上边的兄弟元素
   3. 如果一行内容不下所有的浮动元素，则会自动换行

#### 浮动带来的效果

   1. 使行内元素变成块级元素
   2. 左浮动，右自适应。左边元素设置左浮动，右边元素设置overflow:hidden属性，即可实现行内元素右自适应
   3. 如果浮动之前的宽度为默认继承父元素的100%，则浮动之后，宽度由内容撑开

#### 浮动带来的副作用

   1. 高度坍塌，
   ```html
      .clearfix:after,
      .clearfix:before {
        	content: '';
        	display: table;
        	clear: both;
       }      
     /*上面的样式可以很少副作用的解决浮动带来的高达坍塌影响以及父子元素外边距折叠等*/   
   ```



### 补充：BFC

#### 特性
1. 隐藏的属性，可以设置打开或者关闭（默认是关闭的）。
2. 父元素的外边距不会和子元素重叠。
3. 开启BFC的元素不会被浮动覆盖
4. 开启BFC的元素可以包含浮动的元素。（可以解决浮动打来的高度塌陷问题）

#### 如何开启BFC

1. position属性值为absolute,fixed
2. float属性值不为none
3. display属性值为inline-block,flex,inline-flex,table-cell,table-caption
4. **将元素的overflow设置为一个非visible值**。*推荐使用hidden*
5. IE6,设置元素属性zoom:1;(zoom实现放大的效果)

### 颜色

1. rgb
2. rgba.**可以设置颜色值的透明度，相较opacity，它们不具有继承性，即不会影响子元素的透明度。**
3. hsla

