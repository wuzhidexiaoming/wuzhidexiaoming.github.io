---
title: javasript总结
categories: 默认
copyright: true
author: 小名
abbrlink: b807
date: 2019-12-16 20:32:34
tags:
---

{% note info %}{% endnote %}

<!-- more -->



1.  for循环+定时器代码执行顺序
    ```javascript
    for(let i =0;i<5;i++){
        setTimeout(ele=>{
            console.log(i)
        },5000)
    }
    // 会依次打印0,1,2,3,4
    // 执行顺序,显示进行for循环,创建三个定时器,在脚本解析完成后,开始一次执行创建		的定时器,(因为执行定时器的过程很快),所以最后会在同一时间打印出0,1,2,3,4
    ```

2. 参数解构?

---

