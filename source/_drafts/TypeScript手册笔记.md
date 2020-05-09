---
abbrlink: '2301'
---
# TypeScript手册笔记

## 陌生术语
- Interfaces   接口
- Generics     泛型
- Classes       类
- Enums        枚举类型

## 基础

1. 原始数据类型
2. 任意值
3. 类型推论
4. 联合类型
5. 对象的类型-接口
6. 数组的类型
7. 函数的类型
8. 类型断言
9. 生命文件
10. 内置对象

### 原始数据类型
- Boolean
- Number
- String
- null
- undefined
- Symbol
- 和JS中原始数据类型一样

### 对象类型-接口

- TS中使用 interfaces 来定义对象的类型
- 什么是interfaces（接口）呢？
  - 默认情况下使用定义好的interface时，固定了对象的形状（shape），属性不多不少，且属性类型固定。
- interface接口在定义的时候可以设置可选属性任意属性以及只读属性
  - 可选属性`interface Person{name:string;age?:number}`,这个时候定义`Person`类型的对象时可以不用写 `age` 属性，但是仍然不能添加interface未定义的属性
  - 任意属性



### 数组的类型

- 注意函数中的agauments是类数组，`let res:number[]=agauments`就会报错，可以使用接口的形式描述类数组。
- 泛型和内置对象，常用的类数组都有自己的接口定义

### 函数的类型

- 定义输入的类型和输出的类型。
- 然后有个默认参数，写代码的时候，有默认值的参数放再最后就对了。有默认值的参数也是可选参数。
- **重载**，不太理解

### 类型断言

- 两种写法`value as type` `<type>value`
- 

## 疑问

- 定义类型的时候 `string` 与 `String`的区别 ，还有Object和object的区别
- interface是不是就相当于’类‘了，预设固定的属性及其类型，使用的时候不多不少不能变！(不设置可选属性及任意属性的话就是不多不少不可变，直接定死了对象的形状)
- 给一个函数参数定义类型时，现在怎么指定参数只能是普通对象（不包括 Date() RegExp() 等等）