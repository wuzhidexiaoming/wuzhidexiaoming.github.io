---
title: vue项目部署
categories: 前端
copyright: true
author: 小名
tags:
  - Vue
  - ssh
abbrlink: a69a
date: 2020-03-11 13:58:41
---

{% note info %}打包好的 Vue 项目部署到服务器上{% endnote %}

<!-- more -->

# 项目部署

## 放到 github、gitee、coding 等平台（非常简单）

- 初始化 dist 文件夹 `git init`
- 提交到远程仓库
- **开启 pages 服务**（国内建议 gitee，但是 gitee 需要手动部署更新，开会员可解决）

## 放到对象存储(非常简单)

- **国内的对象存储都需要一个备过案的域名**,然后像七牛、又拍、腾讯云、阿里云等对象存储服务都不错。（个人使用，推荐又拍）
- 直接将打包好的文件`dist`下的`index.html`和`static`目录上传到对象存储中即可

## 部署到服务器(简单,使用 nginx)

### 安装`nginx`

- 直接安装编译好的`nginx`(简单) `sudo pacman -S nginx`

### 修改`nginx`配置

- `nginx -t` 查看`nginx.config`的位置,一般在`/etc/nginx/nginx.config`

- `suod vim /etc/nginx/nginx.config` 编辑`nginx` 配置文件

```json
    server {
      listen  888;  // 端口
      server_name  test;

      location / {
        root  home/ming/www/dist; // 前端文件路径  打包好的项目上传到了 /home/ming/www/dist
        index  index.html; // hash模式只配置访问html就可以了
        try_files $uri $uri/ /index.html; // history模式下
      }
    }
```

- `systemctl reload nginx` 重启`nginx` 服务,`systemctl status nginx`查看`nginx`状态

- 访问`xxx.xxx.xxx.xx:888` 即可访问

---
