---
abbrlink: e337
---
# express框架



## 创建服务器

```javascript
const express = require("express")
    
const server = express()
let port = 8081
server.listen(port,()=>{
    console.log('HTTP服务已启动',`http://localhost:${port}/`)
})

server.get('/test',function(req,res,next){
    res.send('test successful')
})
// 访问 http://localhost:8081/test/ 返回"test successful"

// 自带中间件 放在最后，这样没有找的接口就当是访问文件
server.use(express.static("./static/"));  // 寻找当前文件层级下的 static文件夹中的文件
```




## 中间件

### body-parse

- bodyParser.urlencoded    解析 application/x-www-form-urlencoded	默认的提交方式

- bodyParser.json

- 创建不同的中间件用来解析对应的请求数据，感觉常用的就上面两个

- 代码演示

  ```javascript
  const express = require('express')
  const body = require('body-parser')
  
  const parseJson = body.json()
  const parseUrlencoded = body.urlencoded()
  const server = express()
  
  // server.use(parseJson,parseUrlencoded);
  server.post('/test',parseJson,function(req,res,next){
      console.log(req.body); // {"xx":"xx"}; json数据
      res.send('test successful')
  })
  ```

  

### multer

- body-parse不能处理 multipart/form-data格式的请求数据，所以来用multer新的中间件，但是multer又不能处理其他的，两个互补。

- 代码演示
  ```javascript
  const express = require('express')
    const multer = require("multer")
    
    const server = express()
    let port = 8182
    const upload = multer({dest:'./static'});	// 上传文件存放路径
    
    srever.use(upload.any()); // 表示任何字段文件类型和普通类型都能通过req.body或req.files获得请求数据
  
  // req.body
    [Object: null prototype] { testsss: 'sss' }]
  
    // req.files
    [
      {
        fieldname: 'test',
        originalname: 'bufferFileTest.txt',
        encoding: '7bit',
        mimetype: 'text/plain',
        destination: 'static/',
        filename: '2b764f716cad656b5e9a0044b69a2508',
        path: 'static/2b764f716cad656b5e9a0044b69a2508',
        size: 13
      }
    ]
  ```
  

### cookie-parser

### cookie-session



## 疑问

- TODO:post什么情况下会把参数附加到url上？
- module.exports={}和expoert.xxx=xxx。学习node的模块化方式
  - 只用Moudle.exports就对了，防止出错。可以等于任何东西
  - exports.xxx只能这种形式。
- 未解决：`req.on('data',buffer=>{})` 为什么好像只能监视multipart/form-data 格式类型的请求？
- *如何拦截所有一类请求。`server.get('/',(req,res,next)=>{})`这样的话行不通！！！*
  - `server.get('*',(req,res,next)=>{})`
- 我在postman上测试，post请求也可以写params参数(附加在url上的)，get请求也可以在body中设置各种参数，那么他俩的本质上有什么区别？
  - 传输上好像没啥区别，就是协议规定，规定就是这样的。按规矩来，大家都好办事。
  - 未解决：*待确认答案*

## 待整理

- cookie和session

  ```
  /*
   * cookie     session
   *   cookie    存在浏览器中，请求服务器的时候附带发过去
   *     - 不安全
   *       - 签名  s:value.signature(s:值.签名)
   *       - 签名逻辑有点懵比啊，保存签名密钥，对传过来的值重新签名比对？
   *       - 签名算法天然安全？
   *         - 签名算法不可逆，加密算法可逆
   *     - 怎么禁止请求附带cookie信息？
   *     - domain
   *       - 子域名可以访问主域名的cookie，反过来不行
   *       - 设置domain值为主域名，这样同域名下就都能访问了
   *     - path 使用如上
   *
   *   session   存在服务器中，与cookie配合  id--可以加密id      存在cookie里的seeionId--token
   *     - session劫持
   *     - cookie-session中间件，自动返回签名的sessionId
   *     - maxAge 20分钟。有效期20分钟
   *     - 通常登录信息存在session中
   *     - 我的理解就是，session就是存在服务器端的数据，因为是在服务端普通用户不可见，所以就比较安全。
   *
   *
   *
   * */
  ```



- get的数据请求数据是`&`链接的
- post
  - 如果是x-www-form-urlencoded格式的话也是`&`链接的，只不过是放进了body中，
  - 如果是multipart/form-data的话，用`content-type`中的boundary分隔符切割数据。每个完整的数据由`Content-Disposition: form-data; name="sdfasd";\r\n\r\nvalue`组成，文件的话特殊一点在`Content-Disposition`后一行多一个`Content-Type: text/plain`，然后才是数据。
  - 如果是json的话，也是放在了body中，在头部信息隔一个空行之后`{"test":"nihao"}`