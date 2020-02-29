---
title: 在vue使用高德地图获取定位
categories: 前端
copyright: true
author: 小名
tags:
  - Vue
  - Api
abbrlink: 4e8c
date: 2020-01-08 15:04:41
---

{% note info %}在Vue中使用高德Api定位{% endnote %}

<!-- more -->

# 在Vue中使用高德Api定位

## 准备

1. 申请高德地图key

## 步骤

1. 在`/utils/`下新建`Amap.js`文件,给

   ```javascript
   export default function MapLoader() {
     return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap);
    } else {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://webapi.amap.com/maps?v=1.4.15&key=bac4ad748318efc02caa0bf153e40f54=AMap.Geocoder&callback=initAMap";
      script.onerror = reject;
      document.head.appendChild(script);
    }
    window.initAMap = () => {
      resolve(window.AMap);
    };
     });
   }
   
   // 返回一个promise对象,给出window.AMap数据,用.then处理   给window添加Amap方法
// QS--怎么把Amap方法添加给Vue对象上?

   ```


3. 在需要使用地图的页面,引入Amap.js,创建method方法,处理函数MapLoader返回的Promise对象
    ```javascript
       .then(Amap=>{console.log(Amap)},error=>{console.log(error)})
    ```

---
