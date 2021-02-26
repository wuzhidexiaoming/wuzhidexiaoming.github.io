---
title: iView中Form表单校验
categories: default
copyright: true
author: 小名
abbrlink: 339c
date: 2021-02-04 16:45:34
---
{% note info %}iView中Form表单校验{% endnote %}
<!-- more -->
# iView中Form表单校验

- `Form` 的 `model`和`rules`属性
- `FormItem`的`prop`属性
- `rules`中属性名对应 `FormItem`的`prop`属性值
- `Input` 绑定的是 必须对应`model`中对应的属性(属性名与`FormItem`的`prop`一致)
- 自定义校验情况下,第四条部分非必要