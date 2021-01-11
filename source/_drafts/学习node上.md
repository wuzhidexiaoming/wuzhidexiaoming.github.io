---
title: 学习node上
categories:
  - 前端
copyright: true
author: 小名
abbrlink: 9d4a
date: 2020-03-10 13:08:35
tags:
  - node
---

# 数据交互

## 基础

- 接收请求，根据请求读相应文件，返回状态码和数据。
  - 请求的是 html 文件时，html 文件所需的内容会有浏览器自动发送请求，所以 server 中的回调会执行两遍
- 如果请求有错，要返回给浏览器对应的状态码，否则默认就是 200
- 响应请求、数据交互、数据库链接
- HTTP 报文结构
  - header+body

## 请求方式

- get
- post

## url 模块

- pathname 就是请求路径，不带参数
- query 就是请求参数，对象形式，但是`url.parse(req.url,true); `要加 true 参数，不然还要自己转换。

## 断言

- 条件
- 消息
- `assert(1<2,'success')`

## net 模块

- OSI 七层参考模型
  - 物理-数据链路-网络(ip)-传输(TCP,UDP)-会话-表现-应用(HTTP)
- 五层
  - 物理-数据链路-网络-传输-应用

## 注意

1. res.write 不能直接返回 json 数据
2. 无论何种请求，都会走 http 创建的的服务中的代码，但是因为请求参数的传递方式不同，所以很多地方做的处理不一样
3. `urlencoded`只能传输据，`multipart/form-data`传文件
4. `let str2= '\r\n'`,`str2.length=2`

## 疑问

1. node 后台中怎么判断前台请求数据的方式的？
   - req.method
2. 如果在 res.write 和 res.end 中间写一段异步代码，会执行么？
   - 测试后，console.log()在定时器中会执行，包括 res.end()之后的 console.log 也会执行
3. form 表单 get 请求和 post 请求分别做一遍
4. 为何表单提交没有跨域限制？而 ajax 有？
   - 因为表单浏览器自带的，ajax 是代码自定义的请求的。
5. req.on("data")和 req.on("end")有什么用？
6. `__dirname`是哪来的？
7. 为什么 HTTP 属于应用层？
8. fs 读取的内容默认为 buffer，但是 res.write(data)怎么就能直接返回非 buffer 数据？
   - 浏览器与 node 直接对接，浏览器自己可以将 buffer 转为可读懂的数据
9. write 与 send 的区别？
   - 一个是原生的一个是 express 的
10. http2，服务器可以推送，websocket 不是也可以服务器段推送内容么？
11. 为什么请求参数不对返回的状态码会是 5xx?不是应该 4xx 么？
12. 早 postman 中 Params 中的参数和 header 中添加的参数有何不同，不是说 get 请求就是将参数附加在 url 中么？
13. get 请求怎么弄得？
14. post 数据也可以放进 url 里？什么情况下？get 请求数据不能放进 body 里！
15. post 请求传输 base64 图片
16. TCP 是什么？怎么写一个简易聊天室？
17. post 请求`req.on('data',()=>{})` `req.on('end',()=>{})`，这种方式怎么返回数据给浏览器？（就是浏览器一直在转圈请求，但是后台已经执行了相关代码，然后浏览器端还是没有一个结束状态）
18. Content-Type 有多少种，各自代表着什么东西？
19. 跨域好像还可以通过更改 hosts 文件，将请求地址都应到代码中请求的地址？
20. jsonp 又是啥？
