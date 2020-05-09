---
title: vue项目解决跨域
categories: 默认
copyright: true
author: 小名
abbrlink: f97
date: 2020-05-08 10:03:31
tags:
---

{% note info %}为什么会产生跨域问题？常见解决方法？最好的解决方法？{% endnote %}

<!-- more -->

## 同源策略

### 什么是同源？

- 如果两个 URL 的 protocol、port (如果有指定的话)和 host 都相同的话，则这两个 URL 是同源。 [MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)

    - 协议相同  http https
    - 域名相同
    - 端口相同
         ```html
         https://www.xhxm.xyz/  		源地址
         https://xhxm.xyz/      		非同源	域名不同
         http://www.xhxm.xyz/	  	非同源	协议不同
         https://www.xhxm.xyz:8181/	非同源 端口不同
         https://xhxm.xyz/about/		同源	
         ```

- **websocket不受同源策略限制。**

## 跨域问题

- 如果非同源访问，就产生了常见的跨域问题！跨域是因为浏览器的行为产生的。当浏览器检测到不符合同源策略的行为就会针对行为作出一些对应的举动
- 跨域限制
    - LocalStorage(本地缓存)    禁止读取 
    - Dom 获取不到dom
    - XMLHttpRequest请求   就算返回了数据，也不能使用
- cookie     
    - 前端的话通过设置相同的`document.domain`,可以共享cookie。
    - 后端可以通过`domain=xxx`属性设置cookie。(xxx为一级域名)，这样的话，xxx下的的二/三级域名都可以访问到这个cookie了。

## 如何解决`ajax`产生的跨域问题

- jsonp、**CORS**、**代理**

### 通过代理解决跨域

​		先来看看通过代理怎么解决跨域问题的。代理：前端请求还是用前端的域名，但是通过代理服务器帮助把请求转到真正的后端域名上。

#### webpack-devServer.proxy

```javascript
// 这是vue项目的vue.config.js配置。。。本文前端可以通过这个配置解决跨域问题
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5252/',
        changeOrigin: true,
        // 下面这个表示 虽然前端请求中包含了api，但是通过代理发送到服务端的url地址上是不包含api的
        // 前端请求地址都是http://localhost:8080/api/upload，然后经过代理转到http://localhost:5252/，并且忽略api的传递。
        pathRewrite: {'^/api' : ''}
      },
    }
  }
}

// 表示现在 捕获所有前端'/api'请求都会通过代理转到了https://xhxm.xyz:5252上（接口地址）
```

![picture-show](https://cdn.llow22.com/picture/%E6%B7%B1%E5%BA%A6%E6%88%AA%E5%9B%BE_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20200508092106.png)



#### nginx

- 待补充
- 解决开发机的跨域问题

### CORS

- 待补充。最好是后端做CORS。
- koa `ctx.response.set({'Access-Control-Allow-Origin':'*'})`

---

