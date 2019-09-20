---
title: HTML/CSS的一些知识点-02
categories: 
- 前端
- 基础知识
copyright: true
date: 2019-09-17 12:02
tags: HTML/CSS
---

{% note info%} 一些关于 HTML 的基础知识点系列02,主要是边距问题, {% endnote %}

<!-- more -->

## HTML的一些知识点-02

### 垂直外边距折叠

外边距重叠时常见的问题,一般有三种,①相邻元素②父元素与其第一个或者最后一个子元素之间③空的块级元素,常见的

1. 相邻元素外边距折叠,垂直外边距折叠,取外边距值较大值
2. 第二种情况,可以通过**给父元素设置边框,内边距,恒内内容,创建BFC**解决这种情况下的外边距折叠问题
3. 第三种空元素,不是很懂
4. 如果所有参与折叠的外边距都为负，折叠后的外边距的值为最小的负边距的值。这一规则适用于相邻元素和嵌套元素。
5. **示例**

<iframe height="300" style="width: 100%;" scrolling="no" title="外边距折叠" src="//codepen.io/wuzhidexiaoming/embed/NWKLdQP/?height=300&theme-id=37768&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href='https://codepen.io/wuzhidexiaoming/pen/NWKLdQP/'>外边距折叠</a> by wuzhidexiaoming
    (<a href='https://codepen.io/wuzhidexiaoming'>@wuzhidexiaoming</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



### 行内元素的边距

1. 内边距,行内元素的内边距,上下左右都会显示效果,但是上下内边距只显示效果不占布局
2. 外边距,行内元素的外边距只有左右外边距显示效果并起作用
3. **示例**

<iframe height="265" style="width: 100%;" scrolling="no" title="行内元素的编剧问题" src="//codepen.io/wuzhidexiaoming/embed/wvwEJza/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href='https://codepen.io/wuzhidexiaoming/pen/wvwEJza/'>行内元素的编剧问题</a> by wuzhidexiaoming
     (<a href='https://codepen.io/wuzhidexiaoming'>@wuzhidexiaoming</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>

### 散乱知识点

1. a标签不继承文本样式
2. 浮动元素之后,后面的行内元素会围绕上面浮动的元素
3. 相对定位,如果相对于"html"的话,则需要给body和html指定高度,否则垂直方向的定位无效.[参考demo]([https://github.com/wuzhidexiaoming/bufanxueyuan/blob/master/WeekOne/Day4/work/00-%E5%B0%8F%E7%B1%B3banner%E6%A8%A1%E4%BB%BF.html](https://github.com/wuzhidexiaoming/bufanxueyuan/blob/master/WeekOne/Day4/work/00-小米banner模仿.html))
4. 标准和模型的宽度和高度(不加上margin的高度和宽度)