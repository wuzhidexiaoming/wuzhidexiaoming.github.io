---
title: vant的rem适配
categories: 默认
copyright: true
author: 小名
abbrlink: 8b7e
date: 2019-12-17 09:56:54
tags:
---

{% note info %}{% endnote %}

<!-- more -->

# vant_rem适配

1. 需要安装两个插件

	1. [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 
	2. [lib-flexible](https://github.com/amfe/lib-flexible)

2. 在`main.js`文件下,`import "lib-flexible/flexible"`

3. 在项目根目录下创建`postcss.config.js`

	```javascript
	const autoprefixer = require('autoprefixer')
	const pxtorem = require('postcss-pxtorem')
	
	module.exports = () => {
	  return {
	    plugins: [
	      autoprefixer(),
	      pxtorem({
	        rootValue: rootValue,
	        propList: ['*'],
	        minPixelValue: 2
	      })
	    ]
	  }
	}
	
	```

4. 或者在`package.json`配置文件中添加

	```javascript
	 "postcss": {
	    "plugins": {
	      "autoprefixer": {
	        "browsers": [
	          "Android >= 4.0",
	          "iOS >= 7"
	        ]
	      },
	      "postcss-pxtorem": {
	        "rootValue": 37.5,
	        "propList": [
	          "*"
	        ]
	      }
	    }
	  },
	```

	

---

