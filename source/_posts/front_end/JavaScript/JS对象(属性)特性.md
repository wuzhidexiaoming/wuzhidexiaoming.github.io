---
title: JS中的对象（属性）特性
categories: 前端
copyright: true
author: 小名
tags:
  - JS进阶
  - Object
abbrlink: 5e3b
date: 2020-03-26 09:27:19
---

{% note info %}JS 中对象详解-笔记{% endnote %}

<!-- more -->

## `Object`

### 数据描述符

- `value`，就是属性值
- `configurable`
  - 可以多次对一个属性进行特性修改，**但是当 `configurable` 改为 `false`的时候，这个操作不可逆。**此时除了 `writable`特性可以修改（有限制，只能由 `true` 变为 `false`,反之则不能），其他特性都不能修改。
- `writable` 是否可写
- `enumerable` 可枚举性，设置一个属性的 `enumerable` 为 `false` 的话，难么这个属性在`for of`中就不会迭代。
  - 补充:`for of`迭代普通对象(普通对象没有内置的`@@iterator`)
    ```javascript
        // 给普通函数自定义一个iterator接口
        let o = {a:"a",b:"b"}
        // 通过 Object.defineProperty 添加,可以使其不具枚举性
        Object.defineProperty(o, Symbol.iterator, {
          // 设置此属性不可写
          writable: false,
          configurable: true,
          // 设置成不可枚举
          enumerable: false,
          value: function() {
            let _this = this;
            let index = 0;
            let ks = Object.keys(_this);
            return {
              next() {
                return {
                  value: _this[ks[index++]],
                  done: index > ks.length
                };
              }
            };
          }
        });

        for(let i of o){
          console.log(i); // a,b
        }

        // 上述代码就简单的给一个对象添加了 iterator接口,使其可以使用 for..of迭代,具体的话可以也可以自定义实现复杂的遍历
    ```

  - 原生就具备 iterator 接口的有 `Array`、`Map`、`Set`、`String`、函数的 arguments 对象、NodeList 对象。

### 访问描述符

- `get` 这个是读取属性时调用的函数
  - `obj.a` 当进行这种操作的时候，就执行[[Get]]操作，顺序是，先看看对象中有没有名称相同的属性，有就返回这个属性的值。没有，就遍历[[prototype]]（重中之重-原型链！）。实在没有，那就返回undefined
- `set` 这个是写入属性时条用的函数
  ```javascript
      let o = {};
      // 通过 Object.defineProperty 添加了一个 a 属性。
      Object.defineProperty(o, "a", {
        configurable:true,
        enumerable: true,
        get() {
          return this._a_;
        },
        set(val) {
          this._a_ = val;
        }
      });
  ```

### `Object.defineProperty()`

- 数据属性和访问器属性不能同时存在，否则报错。

  ```javascript
  let o = {};
  Object.defineProperty(o, "a", {
    configurable: true,
    enumerable: true,

    // 数据属性
    //value: "temp",
    // writable:true,

    //访问器属性
    get() {
      return this._a_;
    },
    set(val) {
      this._a_ = val;
    }
  });
  ```

- 可以通过这个方法，来修改对象属性的特性。接收三个参数。属性所在对象、属性的名字、描述符对象
- 如果用 `Object.defineProperty()`方法新建属性的时候，不指定`configurable` `writable` `enumerable`的话，都是默认`false`。（`value`默认为`undefined`）
- 如果用 `Object.defineProperty()`只设置`set` 或 `get` 一个，剩余一个默认是 `undefined`
- 如果用 `Object.defineProperty()`只设置`configurable`和`enumerable`，那么相应的属性通过`Object.getOwnPropertyDescriptor()`返回的对象则有`configurable` `enumerable` `writable` 和 `value`
- vue2x 中就是通过此方法监听数据的。(vue3用了`Proxy`)，这种方法是一次性递归

### 一些其他相关的方法

#### 对象不变性
- 通过 `writable:false`和`configurable:false` 就可以创建一个**不可修改的且不能删除、重定义的属性。**
- `Object.preventExtensions()` 对象不可扩展。效果：不能添加新属性。
- `Object.seal()` 先调用`Object.preventExtensions()`然后再将已有属性标记为 `configurable:fasle`。效果就是，不能添加新属性，且不能重新配置或者删除已有属性。（可以修改值）
- `Object.freeze()` 这个是先调用 `Object.seal()` ，然后又把所有属性的数据属性标记为`writable:false`。效果：啥都不能干，只能用。**注意：上述两种方法（包括这一个），都只是限制了对象本身，对象中引用的其他对象不受影响。可以用递归来个'深度冻结'**。'深度冻结'代码演示如下：
  ```javascript
      let o= {obj1:{name:"obj对象",obj2:{name:'obj2对象'}},name:'你好'}
      o.new = "我是新属性"
      console.log(o); //{ obj1: { name: 'obj对象', obj2: { name: 'obj2对象' } },name: '你好',new: '我是新属性' }

      // '深度冻结'
      function deepObj(obj){
       for(let i in obj){
        if (Object.prototype.toString.call(obj[i])==="[object Object]") {
          deepObj(obj[i])
        }else{
          Object.freeze(obj)
        }
       }
      }

      deepObj(o)
      o.new2 = '我也是新属性'
      o.obj1.new ="试图向obj1对象添加新属性"
      o.obj1.obj2.new = "试图向obj2对象添加新属性"
      o.obj1.obj2.name = '试图修改obj2中的name属性'
      console.log(o); //经过这些修改,打印 o 对象与冻结之前的返回值相同  { obj1: { name: 'obj对象', obj2: { name: 'obj2对象' } },name: '你好', new: '我是新属性' }

  ```

#### 真的是一些其他相关的方法😂

- `Object.getOwnPropertyDescriptor()` 两个参数：对象，属性名。获取给定属性的描述符，返回一个对象。
- `Object.defineProperties()` 同时定义多个属性，使用上参考 `Object.defineProperty()`

## 补充-对象深克隆
- 当存在以下这种情况，对象不可深克隆
  ```javascript
      let antherArray = [];
      let antherObject = {
        c: true
      };
      let myObject = {
        a: 2,
        b: antherArray,
        c: antherObject
      };
      antherArray.push(antherObject,myObject)
      // 再上面一行代码执行之后，无法使用递归对 myObject进行克隆，解决方法吧，暂时不知道😂
  ``` 

## 参考

- 《你不知道的 JavaScript-上卷》（3.3）
- 《JavaScript 高级程序设计-第三版》（6.1）

---
