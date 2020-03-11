---
title: JavaScript实现冒泡排序、选择排序
categories:
  - 前端
  - JavaScript
copyright: true
tags: JS
abbrlink: 15b4
date: 2019-09-28 17:27:02
---

{% note info%}用JavaScript实现冒泡排序和选择排序 {% endnote %}
<!-- more -->



## 冒泡排序	(Bubble Sort)

​		冒泡排序就是重复“从序列左(右)开始比较相邻两个数字的大小，再根据结果交换两个数字的位置”这一操作的算法。在这个过程中，数字会像泡泡一样，慢慢从左(右)往右(左)“浮”到序列的另顶端，所以这个算法才被称为“冒泡排序”。



### 实现方法①

```javascript
			function major(arr) {
        for (var j = 0; j < arr.length - 1; j++) {
          for (var i = 0; i < arr.length - 1 - j; i++) {
            var temp;
            if (arr[i] > arr[i + 1]) {
              temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
            }
          }
        }
        console.log(arr[arr.length - 1]);
        console.log(arr);
      }
      major([5, 6, 8744, 8, 9, 8, 9, 96, 9, 6, 6]);
```



## 选择排序	(Selection Sort)

​	选择排序就是重复“从待排序的数据中寻找最小值，将其与序列最左边的数字进行交换”这一操作的算法。在序列中寻找最小值时使用的是线性查找。



### 实现方法①

```javascript
      function selectionSort(arr) {
        for (let i = 0, len = arr.length; i < len - 1; i++) {
          let minIndex = i;

          for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
              minIndex = j;
            }
          }
          if (i !== minIndex) {
            swap(arr, i, minIndex);
          }
        }

        return arr;
      }

      const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
      console.log(selectionSort(arr));
```


## 参考文章
1. https://www.rayjune.me/2018/03/22/elegant-javascript-sorting-algorithm-es6/