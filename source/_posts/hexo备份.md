---
title: hexo备份
tags:
  - hexo
categories: hexo
copyright: true
toc: false
date: 2019-08-05 15:11:09
---


{% note info %} hexo备份恢复,做简单记录 {% endnote %}

<!-- more -->

### 主要文件夹及文件

1. public,存放生成的静态网页
2. source,存放编辑的md文件
3. _config.yml文件,配置文件(主题里面也有一个这样的文件)
4. scaffolds,存放默认模板

### 恢复过程

1. 从coding下载备份用的分支
2. 打开备份目录,首先全局安装`sudo npm install -g hexo-cli`,然后克隆备份文件,在文件夹中执行`sudo npm install`
3. 由于我备份了主题,这里需要下载需要的文件,从主题配置文件中查看需要哪些文件
   - [Fancybox](https://github.com/theme-next/theme-next-fancybox3)
   - [pace](https://github.com/theme-next/theme-next-pace)
   - [lazyload](https://github.com/theme-next/theme-next-jquery-lazyload)
   - 克隆的文件需要注意名称,不要带什么前缀,例:`pace`
   - [fontawesome](https://cdn.bootcss.com/font-awesome/4.6.2/css/font-awesome.min.css)用cnd,在主题配置文件中搜索关键字就行
   - 具体需要下载什么看主题配置文件,可以通过`hexo s --debug`,通过浏览器开发者工具查看哪里出错了

4. [`upx`](https://github.com/upyun/upx)又拍云增量同步工具,linxu平台下`/usr/local/bin/upx`,然后`chmod +x /usr/local/bin/upx`
5. `ssh-keygen -t rsa ` ssh密匙

至此,恢复就完成了，可能有一些细节没有处理好，暂时没有发现问题