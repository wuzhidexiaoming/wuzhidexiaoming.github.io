---
title: 浅述ajax
tags:
  - JS
categories: 默认
copyright: true
toc: false
abbrlink: c803
date: 2019-11-13 14:40:52
---




{% note info %} 对ajax的理解,以及ajax如何应用 {% endnote %}

<!-- more -->

# ajax

> AJAX是异步的JavaScript和XML（Asynchronous JavaScript And XML）。简单点说，就是**使用`XMLHttpRequest`对象与服务器通信**。 它可以使用JSON，XML，HTML和text文本等格式发送和接收数据。AJAX最吸引人的就是它的“异步”特性，也就是说他可以在不重新刷新页面的情况下与服务器通信，交换数据，或更新页面.	--[MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/AJAX/Getting_Started)

## ajax流程

1. 创建`XMLHttpRequest`对象
2. 设置响应HTTP请求状态变化的函数,`xhr.onreadystatechange`, 
3. `open(method,url,true)` `method`:`GET`,`POST`,`HEAD`,第三个参数为是否异步
4. `send()` 发送数据
5. 当发送请求时,处理响应的函数,先检查状态,状态值为4时说明服务器收到响应并无问题,继续执行。（不加判断处理响应的函数正常情况会执行4次[状态详情链接](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState)）
6. 判断HTTP响应码是否为200，成功/失败分别处理对象情况
7. ` httpRequest.responseText `和` httpRequest.responseXML `都可以访问服务器发来的数据,前者为文本字符形式,后者为XMLDocument对象方式返回
8. 