---
abbrlink: 9d4a
---
# 数据交互

## 基础
- 接收请求，根据请求读相应文件，返回状态码和数据。
  - 请求的是html文件时，html文件所需的内容会有浏览器自动发送请求，所以server中的回调会执行两遍
- 如果请求有错，要返回给浏览器对应的状态码，否则默认就是200
- 响应请求、数据交互、数据库链接
- HTTP报文结构
  - header+body

## 请求方式

- get
- post

## url模块

- pathname 就是请求路径，不带参数
- query就是请求参数，对象形式，但是`url.parse(req.url,true); `要加true参数，不然还要自己转换。

## 断言
  - 条件
  - 消息
  - `assert(1<2,'success')`
## net模块
  - OSI七层参考模型
    - 物理-数据链路-网络(ip)-传输(TCP,UDP)-会话-表现-应用(HTTP)
  - 五层
    - 物理-数据链路-网络-传输-应用

## 注意

1. res.write不能直接返回json数据
2. 无论何种请求，都会走http创建的的服务中的代码，但是因为请求参数的传递方式不同，所以很多地方做的处理不一样
3. `urlencoded`只能传输据，`multipart/form-data`传文件
4. `let str2= '\r\n'`,`str2.length=2`

## 疑问

1. node后台中怎么判断前台请求数据的方式的？
   - req.method
2. 如果在res.write和res.end中间写一段异步代码，会执行么？
   - 测试后，console.log()在定时器中会执行，包括res.end()之后的console.log也会执行
3. form 表单 get请求和post请求分别做一遍
4. 为何表单提交没有跨域限制？而ajax有？
   - 因为表单浏览器自带的，ajax是代码自定义的请求的。
5. req.on("data")和req.on("end")有什么用？
6. `__dirname`是哪来的？
7. 为什么HTTP属于应用层？
8. fs读取的内容默认为buffer，但是res.write(data)怎么就能直接返回非buffer数据？
   - 浏览器与node直接对接，浏览器自己可以将buffer转为可读懂的数据
9. write与send的区别？
   - 一个是原生的一个是express的
10. http2，服务器可以推送，websocket不是也可以服务器段推送内容么？
11. 为什么请求参数不对返回的状态码会是5xx?不是应该4xx么？
12. 早postman中Params中的参数和header中添加的参数有何不同，不是说get请求就是将参数附加在url中么？
13. get请求怎么弄得？
14. post数据也可以放进url里？什么情况下？get请求数据不能放进body里！
15. post请求传输base64 图片
16. TCP是什么？怎么写一个简易聊天室？
17. post请求`req.on('data',()=>{})` `req.on('end',()=>{})`，这种方式怎么返回数据给浏览器？（就是浏览器一直在转圈请求，但是后台已经执行了相关代码，然后浏览器端还是没有一个结束状态）
18. Content-Type 有多少种，各自代表着什么东西？
19. 跨域好像还可以通过更改hosts文件，将请求地址都应到代码中请求的地址？
20. jsonp又是啥？
