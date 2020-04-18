---
title: vue中extend的用法
categories: 前端
copyright: true
author: 小名
tags:
  - Vue
abbrlink: '3068'
date: 2020-04-18 12:59:20
---

{% note info %} “Vue.extend() 是一个类继承方法。它用来创建一个 Vue 的子类并返回其构造函数。”{% endnote %}

<!-- more -->

# Vue.extend()用法

- 使用Vue.component()会调用Vue.extend()方法，将options作为参数传到Vue.extend()中。
  ```javascript
    Vue.extend=function(extendOptions){
      ...
      var name = extendOptions.name || Super.options.name;
      ...
      Sub.options = mergeOptions(
        Super.options,
        extendOptions
      );
      // 调试代码，没看懂。。。回头再看。
  }
  ```

## 用Vue.extend()做一个loading "插件"
- 实现 `this._loading()` 出现加载页面

  ```javascript
  // main.js文件
  // 首先导入一个基础组件  loading就代表了一个组件，是一个对象，其中包含组件中设置的选项
  import Vue from 'vue'
  import loading from './main.vue'

  // 通过Vue.extend()创建基于loading的类
  const constructorLoading = Vue.extend(loading);

  function _loading_(msg) {
    const div = document.createElement('div');
    div.setAttribute('id','tempid')
    document.body.appendChild(div)

    //  创建loading实例（vueComponent实例额），传入options，会覆盖基础组件的options
    // 创建的实例通过$mount挂载到上面新建的<div id='tempid'></div>上。就是基础组件加上新传入的options，这个挂载会覆盖<div id='tempid'></div>
    new constructorLoading({
      props:{
        message:{
          type:String,
          default:msg
        }
      }
    }).$mount('#tempid')

    // return 一个关闭方法 达成闭环
    return ()=>{
      // 这个id是基础组件中预设好的
      let ele = document.getElementById('#loading');
      ele && ele.ParentNode.removeChild(ele)
    }
  }

  export default _loading
  ```

  ```html
  // main.vue文件
  <comment>
    # 基础vue实例
  </comment>
  <template>
  <!--  此处模板会覆盖所挂载的el,预设好的loading-->
    <div id="loading">
      {{ message }}
    </div>
  </template>

  <script>
  export default {
    name: "loading-instance",
    data() {
      return {};
    },
    props: {
      message: {
        type: String,
        default() {
          return "加载中...";
        },
      },
    },
  };
  </script>

  <style lang="scss" scoped>
  #loading {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: rgba(0, 0, 0, 0.7);
  }
  </style>
  ```

- 想要通过Vue.use()的方式使用插件,需要给插件添加一个`install`方法。
- 后面再补充Vue.use()，顺便做一个真正的插件。
---


