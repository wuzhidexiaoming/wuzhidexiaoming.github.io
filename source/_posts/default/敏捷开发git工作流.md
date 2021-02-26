---
title: 敏捷开发git工作流
categories: default
copyright: true
author: 小名
tags:
  - Linux
abbrlink: 336h
date: 2021-02-04 16:45:34
---
{% note info %}敏捷开发git工作流{% endnote %}
<!-- more -->


# 敏捷开发git工作流

  现在使用的方法，主分支 master 保持最慢跟新，都是线上的版本。新需求出来之后创建新的功能分支，相关功能分支开发完成后，提测，如果多个功能之间有相互关系，将有关系的分支合并到一个单独的分支中，之后提测。

场景

- 现有功能分支1和功能分支2,然后发现很久很久之前的线上版本出现bug,之后再master之上创建一个分支修复bug,这个commit需要合并到两个功能分支么?
- 线上版本 出bug了,找到最近的 版本标签,从其检出新的分支, 个别 commit 用 cherry-pick,然后修复之后 打新的标签,并基于新分支运行流水线
  - cherry-pick 相同的 commit 合并的话 会合并到一个提交么?