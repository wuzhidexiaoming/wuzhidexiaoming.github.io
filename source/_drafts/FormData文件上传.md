---
title: FormData文件上传
categories: 前端
copyright: true
author: 小名
tags: Js
abbrlink: 3a39
date: 2020-05-05 08:11:26
---

{% note info %}FormData文件上传{% endnote %}

<!-- more -->

# 利用`FormData`接口上传文件

## 直接使用一个表单对象
- 最快的方式就是创建一个表单，然后吧这个表单放进FormData实列中，然后就可以XHR发送了
### 代码演示
- 先创建一个表单，地址什么的都填好
  ```html
    ...
    <form id='form-instance' action='http://localhost:8181/upload-test/' method='POST' enctype='multipart/form-data'>
      <input id='form-file-test' type='file' name='file1' value=''>
    </form>
    <button id='submit-btn'>上传文件</button>
    <!--multipart/form-data 上传文件-->
    ...
  ```
- 然后利用`FormData`接口上传文件
  ```javascript
   let eleForm = document.getElementById('form-instance')
   // let eleInputFileTest = document.getElementById('form-file-test')

   let res = new FormData(eleForm)
   // 然后就可以发送res了
   var xhr = new XMLHttpRequest();
  xhr.open("POST", '/server', true);
  xhr.onload = function () { 
      // 请求结束后,在此处写处理代码 
  };
  xhr.send(res); 
  ```
## 自己添加属性

---

