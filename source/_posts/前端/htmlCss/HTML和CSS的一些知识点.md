---
title: HTML/CSS的一些知识点
categories:
  - 前端
  - 基础知识
copyright: true
tags: HTML/CSS
abbrlink: d479
date: 2019-05-24 12:05:47
---

{% note info%} 一些关于 HTML 的基础知识点 {% endnote %}

<!-- more -->

### HTML

#### html 开头声明

开头用`<!DOCTYPE HTML>`**声明**的文件,意思是让浏览器按照 HTML5 标准进行渲染.注意它不是 HTML 标签

#### 常见标签

每一个元素都有默认的 display 属性

- 常见的**内联**元素
  `<a></a>` `<b></b>` `<span></span>` `<img></img>` `<input>` `<select></select>` `<strong></strong>`等
- 常见的**块级**元素:
  `<div></div>` `<ul></ul>` `<ol></ol>` `<p></p>` `<dl></dl>` `<dt></dt>` `<dd></dd>` `<h1></h1>`等
- 常见的**自闭和**元素
  `<br>` `<hr>` `<img>` `<input>` `<link>` `<meta>`等
- i 与 em 和 b 与 strong 的区别
  - i 和 b 不带语义,属于自然样式标签,累死的还有 u, s, pre
  - em 和 strong 属于语义样式标签,类似的还有 ins, del, cde

#### 常见的浏览器内核

1. Trident (万恶的 IE 等)
2. Geoko (火狐等)
3. Presto (Opera,不过现在变成 Blink 了等)
   4.Webkit (Safari,Chrome 等)
   如果有兴趣的同学可以参考[五大主流浏览器及四大内核](https://blog.csdn.net/yuyanjing123456789/article/details/78689595)

#### HTML5 语义化

现在 HTML 都是要求语义化了,什么是语义化呢?就是用正确的标签做正确的事,标签分配到位,各负各的责任。语义化让页面内容结构化，结构更清晰，还便于浏览器 、搜索引擎解析，利于 SEO。便于阅读维护。[详情可以参考](https://segmentfault.com/a/1190000005626375)

#### 奇思妙想

- 画出一条 1px 线，在不使用 border 的的情况下
  `<div style="height:1px;overflow:hidden;background:red"></div>`

暂时写这么多,想起了再写.待更
