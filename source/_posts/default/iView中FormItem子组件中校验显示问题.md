---
title: iView中FormItem子组件中校验显示问题
categories: default
copyright: true
author: 小名
tags:
  - Linux
abbrlink: 536c
date: 2021-02-04 16:45:34
---
{% note info %}iView中FormItem子组件中校验显示问题{% endnote %}
<!-- more -->
# iView中FormItem子组件中校验显示问题

## 问题

  最近在使用 `iView` 组件库开发的时候遇到一个问题感觉比较奇怪,就是在`FormItem`组件中的子组件中包含`Form`组件,然后,当父组件`FormItem`校验失败的时候发现其中子组件中所有的`Input` 都变红了。就比较奇怪,为什么父组件`FormItem`校验失败了,而其子组件中所有的`Input` 都变红了?起初以为是不是校验的时候把子组件中的 field 也添加到校验集合里面了,后来看了相关组件源码后发现竟是因为 css 的原因😂

​	![图片](https://er-1253891782.cos.ap-guangzhou.myqcloud.com/picture/clipboard_20210224_042452.png)

```vue
// 父组件
// ...
<FormItem prop="lform" label="测试子组件中的表单表现">
    <div style="border: 1px solid gray">
        <Lform ref="lformRef" />
    </div>
</FormItem>
// ...
```

```
import Lform from "../components/Lform";
export default{
  components:{
    Lform
  },
  data(){
    return {
      rules:{
        lForm:[
          // 对应的自定义校验代码
          {
          required: true,
          validator: async (rule, value, callback) => {
            // 这里直接抛出错误
            callback(new Error("直接失败"));
          },
          trigger: "change",
          }
        ]
      }
    }
  }
}

```

## 为何会出现

`iView`组件库中,`FormItem`校验失败的话会给其添加一个名叫`ivu-form-item-error`的类名,而关键在于在`input.less` 文件中有这个一个样式


```css
.ivu-form-item-error .ivu-input{
   border: 1px solid #ed4014;
}
```

  所以问题就来了,如果父组件`FormItem`上多了一个`ivu-form-item-error`类名,那么它下面只要符合 上面那个 css 选择器的元素都将变红。类似`ivu-input`类名的还有好多,都是不同的表单组件



![图片](https://er-1253891782.cos.ap-guangzhou.myqcloud.com/picture/clipboard_20210224_050650.png)

​	

​	通过上图可以看出，这个`InputNumber`是不应该变红的，但是因为它所在的`FormItem`组件校验失败了, 有了`ivu-form-item-erro`类名,再加上`InputNumber`本身的类名,完美命中,”报错”的选择器

## 解决方法

​	问题是找到原因了,但是一时间没想到什么好的办法,或许这么写组件关系本身就不合理。最后我是去掉了`FormItem`组件校验，做成了通过弹出消息提示表单未完善。

​	还有一种方法，感觉也可以，就是父组件不做校验，通过`$refs`调用子组件中的表单校验方法，那么哪些表单变红就会正常了，但是总的父组件的校验是没有做的，不过影响也不大。

## 参考

- [`iView`源码](git@e.coding.net:xiaomingda/temp/liview.git)

