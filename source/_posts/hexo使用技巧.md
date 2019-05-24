---
title: hexo的一些使用技巧
copyright: true
date: 2019-05-23 18:07:48
tags: hexo
categories: hexo
---

{% note%}谈不上技巧,就是帮助文档上的一些东西等,记录一下,以便以后学习{% endnote%}

### 文本居中的引用

此标签将生成一个带上下分割线的引用，同时引用内文本将自动居中。 文本居中时，多行文本若长度不等，视觉上会显得不对称，因此建议在引用单行文本的场景下使用。 例如作为文章开篇引用 或者 结束语之前的总结引用。共两种使用方法

#### HTML 方式

```html
<p class="blockquote-center">html方式</p>
```

<p class="blockquote-center">html方式</p>

直接在 markdown 文件中编写 html 代码,加上上面的属性即可

#### 标签方式

##### 方式一

```
{% centerquote %}标签方式{% endcenterquote %}
```

{% centerquote %}标签方式{% endcenterquote %}

##### 方式二

```
{% cq %} 标签缩写方式 {% endcq %}
```

{% cq %} 标签缩写方式 {% endcq %}

### Bootstrap Callout(标注)

```
{% note class_name %} Content (md partial supported) {% endnote %}
```

共 6 种样式,替换 class_name 即可

- default
- primary
- success
- info
- warning
- danger

{% note default %}默认{% endnote %}
{% note primary %}主要{% endnote %}
{% note success %}成功{% endnote %}
{% note info %}信息{% endnote %}
{% note warning %}警告{% endnote %}
{% note danger %}危险{% endnote %}

### 一篇文章多个分类

#### 子分类

方式一

```
categories:
  - 父分类
  - 子分类
```

方式二

```
categories: [父分类,子分类]
```

两种方式的效果是一样的

#### 多分类

```
categories:
  - [分类一]
  - [分类二]
```

可以与子分类结合使用

```
categories:
  - [分类一,分类一的子分类]
  - [分类二]
```

暂时就写这么多,发现新的了或想起来了再写.
