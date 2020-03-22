---
title: JS继承与原型链
categories: 默认
copyright: true
author: 小名
abbrlink: 8b29
date: 2020-03-21 16:14:43
tags:
---

{% note info %}JS 继承、原型链**笔记**{% endnote %}

<!-- more -->

# 原型链与继承

## 补充

### 几个关键词

- `__proto__`，每个实例对象都有一个 `__proto__` 属性，此属性**指向构造函数的原型**。
- `prototype`，每个函数都有一个 `prototype` 属性，**此属性指向函数的原型对象**
- `constructor`，每个 `prototype` 属性都有一个 `constructor` ,**此属性指向原型所在函数(就是构造函数本身)**。

### `this`指向

- **作为方法被调用**
  - **哪个对象的方法 `this` 就指向哪个对象**
- 作为普通函数被调用
  - 普通函数调用就是指向全局对象,浏览器中就是 `window`
- 构造器构造器调用
  - `this` 指向 `new` 出来的新对象

### 工厂模式

- 木得 **new**
- 创建出来的**每一个实例对象中的方法都是独立一份**,浪费内存

```javascript
function Person(name, age) {
  let obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.sayHello = function() {
    console.log(this.name + "你好");
  };
  return obj;
}
let person1 = new Person("小名", 88);
```

### 混成模式（构造+原型）

- **属性写构造函数内,方法写原型上。**(也能优化点性能)
- 原型（prototype）：使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法（修改原型就是直接修改模具，new 出来的实例对象就是成品）
- `new` 运算符,① 创建新对象，② 并将新对象作为 `this` (的上下文)，③ 执行构造函数内的代码 ④ 返回新对象。如果函数没有返回值，就返回 `this`

```javascript
// 与上面工厂模式演示代码的功能相同
function Person(naem, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log(this.name + "你好");
};

let person1 = new Person("小名", 88);
```

## 原型

### 一图胜千言！

![原型解释图](https://cdn.llow22.com/picture/%E5%8E%9F%E5%9E%8B%20(1).png)
高清大图： https://www.processon.com/embed/5d99a85ce4b07a0a4d4c1645

### 注意点

- 重写原型对象切断了现有原型与任何之前已经存在的对象实例之间的联系；因为它们引用的仍然是最初的原型。

## 继承

- **理清构造函数、原型、实例的关系**
  - "每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针"
- 通过使用 call()方法（或 apply()方法也可以），实际上就是在（将要）新创建的"子"实例的环境下调用了"父"构造函数。这样一来，就会在新"子对象上执行"父函数中定义的所有对象初始化代码。结果就是"子"函数的每个实例就都会走一遍"父"函数中的代码。
- 组合继承方式

  ```javascript
      // "父"---xiao家族
      function XiaoFamily(name, age) {
        this.lastname = "xiao";
        this.name = name;
        this.age = age;
      }

      XiaoFamily.prototype.sayHello = function() {
        console.log(this.name + "*" + this.lastname);
      };


      // 家族分支① xiao-ming支（嫡系牛批）
      function Xiaoming(name, age, skill) {
        XiaoFamily.call(this, name, age);
        this.skill = skill;
      }

      // 先继承家族身份
      Xiaoming.prototype = new XiaoFamily();
      Xiaoming.prototype.constructor = Xiaoming;

      // 赋予嫡系独特的牛批功能
      Xiaoming.prototype.sayNiubi = function() {
        alert(`${this.lastname}${this.name}牛批`);
      };


      // 家族分支② xiao-hei支（旁系傻冒）
      function Xiaohei(name, age, height) {
        XiaoFamily.call(this, name, age);
        this.height = height;
      }

      // 先继承家族身份
      Xiaohei.prototype = new XiaoFamily();
      Xiaohei.prototype.constructor = Xiaohei;

      // 赋予旁系憨憨光环
      Xiaohei.prototype.sayShamao = function() {
        alert(`${this.lastname}${this.name}大傻个（身高：${this.height}）`);
      };


      // 创建一个嫡系孩子，再创建一个旁系孩子
      let xiaoming = new Xiaoming("ming", 18);
      let Xiaohei = new Xiaohei("hei", 22, "222");
  ```

- 还有啥 原型式继承，什么寄生式继承。太难了。后续做补充（ES6 class '类'它不香么？）

## 参考
- 《JavaScript设计模式与开发实践》第2章this、call和apply
- 《JavaScript高级程序设计》第三版（6.2创建对象，6.3继承）
- [掘金：JavaScript 原型精髓 #一篇就够系列](https://juejin.im/post/5bcdb6c6f265da0afd4b75c0#heading-6)
- [画图工具-processon](https://www.processon.com/diagrams)
---