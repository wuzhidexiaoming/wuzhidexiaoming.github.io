---
title: aria2使用
categories: 默认
copyright: true
author: 小名
tags: aria
abbrlink: bce
date: 2021-02-15 14:17:24
---

{% note info %}linux下 aria2c + ariaNg面板 使用{% endnote %}

<!-- more -->

# aria2c+AriaNg 使用

## 安装

- `sudo pacman -S aria2` 安装 `aria2`程序
- 下载 AriaNg 面板 [下载地址](https://github.com/mayswind/AriaNg)
  - 在 web服务器中部署，我用的 nginx

## 配置

- 创建 `.aria2.conf`配置文件， `mkdir ~/.aria2 && cd ~/.aria2 && vim aria2.conf`

    ```yaml
      # 文件的保存路径(可使用绝对路径或相对路径), 默认: 当前启动位置
      dir=/home/ming/downloads

      # 启用磁盘缓存, 0为禁用缓存, 需1.16以上版本, 默认:16M
      #disk-cache=32M
      #disk-cache=32M
      # 文件预分配方式, 能有效降低磁盘碎片, 默认:prealloc
      # 预分配所需时间: none < falloc ? trunc < prealloc
      # falloc和trunc则需要文件系统和内核支持
      # NTFS建议使用falloc, EXT3/4建议trunc, MAC 下需要注释此项
      file-allocation=prealloc
      # 断点续传
      continue=true

      ## 下载连接相关 ##

      # 最大同时下载任务数, 运行时可修改, 默认:5
      max-concurrent-downloads=10
      # 同一服务器连接数, 添加时可指定, 默认:1
      max-connection-per-server=10
      # 最小文件分片大小, 添加时可指定, 取值范围1M -1024M, 默认:20M
      # 假定size=10M, 文件为20MiB 则使用两个来源下载; 文件为15MiB 则使用一个来源下载
      min-split-size=10M
      # 单个任务最大线程数, 添加时可指定, 默认:5
      split=5
      # 整体下载速度限制, 运行时可修改, 默认:0
      #max-overall-download-limit=0
      # 单个任务下载速度限制, 默认:0
      #max-download-limit=0
      # 整体上传速度限制, 运行时可修改, 默认:0
      #max-overall-upload-limit=0
      # 单个任务上传速度限制, 默认:0
      #max-upload-limit=0
      # 禁用IPv6, 默认:false
      disable-ipv6=true

      ## RPC相关设置 ##
      enable-rpc=true
      pause=false
      rpc-allow-origin-all=true
      rpc-listen-all=true
      rpc-save-upload-metadata=true
      rpc-secure=false

      # 启用RPC, 默认:false
      #enable-rpc=true
      # 允许所有来源, 默认:false
      #rpc-allow-origin-all=true
      # 允许非外部访问, 默认:false
      #rpc-listen-all=true
      # 事件轮询方式, 取值:[epoll, kqueue, port, poll, select], 不同系统默认值不同
      #event-poll=select
      # RPC监听端口, 端口被占用时可以修改, 默认:6800
      rpc-listen-port=6800

    ```


## 启动

- `aria2c --conf-path=/home/ming/.aria2/aria2.conf`,然后在浏览器中访问 AriaNg 服务即可

---

