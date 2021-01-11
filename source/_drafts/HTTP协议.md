---
title: HTTP协议
categories:
  - 前端
copyright: true
author: 小名
abbrlink: "2174"
date: 2020-04-10 13:08:35
tags:
  - HTTP
---

# HTTP 协议

- HTTP 协议使应用层的协议，建立在 TCP 传出层之上

## 请求报文

- 请求报文/响应报文
  - 请求行/状态行
  - 请求头 /响应头
    - 通用请求头
      - Content-type 请求体/响应体的类型
        - text/plain application/json multipart/form-data
        - [参考地址 iana media-types](https://www.iana.org/assignments/media-types/media-types.xhtml)
  - 请求体/响应体

## 报文由最多由三部分组成

- 请求行
- 头部信息 Headers
- 空行
- 请求体 body

## post-body 相关头部信息

- `content-type:multipart/form-data`
- 上传文件啊，表单提价啊，这个请求又一个`boundary`作为分隔符
  - `<delimiter>\r\n<header>\r\n\r\n<content>\r\n<delimter>\r\n<header>\r\n\r\n<content>`
- ` application/``x-www-form-urlencoded `
  - 默认的提交方式，
  - `\r\n<query>`,一个空行之后就是以 `'&'` 分隔的键-值对。
  - 不支持二进制数据

## 返回压缩内容

- `res.sertHeader("content-encoding","gzip")`,这样就不会下载文件了。默认`deflate`

## 注意

- 一次请求只能返回一次东西。
- post 请求，除了`text/plain`是 Request Payload，另外两种 x-www 和 multipart/form-data 都是 FormData。（在浏览器中显示的）xhxm
