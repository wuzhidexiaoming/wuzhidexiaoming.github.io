---
title: ubuntu安装最新版nginx
categories: 默认
copyright: true
author: 小名
tags:
  - Linux
  - Nginx
abbrlink: 33a1
date: 2021-01-04 11:03:11
---

{% note info %}Ubuntu 安装最新稳定版的 nginx{% endnote %}

<!-- more -->

# Nginx Install

```shell
    sudo wget http://nginx.org/keys/nginx_signing.key
    sudo apt-key add nginx_signing.key
```

## 编辑 `/etc/apt/sources.list`

- 输入 `sudo vim /etc/apt/sources.list` 编辑
  ```shell
    # 文件末尾添加 bionic 参考 http://nginx.org/en/linux_packages.html#stable
    deb http://nginx.org/packages/ubuntu/ bionic nginx
    deb-src http://nginx.org/packages/ubuntu/ bionic nginx
  ```

## Install

- 最后输入
  ```shell
  sudo apt-get update
  sudo apt-get install nginx
  ```

---
