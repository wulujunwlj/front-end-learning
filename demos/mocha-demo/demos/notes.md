Data Structures & Algorithms with JavaScript
==========

第1章  JavaScript 的编程环境和模型
-----

* JS 中的数学计算包括简单计算符(+,-,*,/,%)和数学库(Math)
* JS 的 switch 语句中，用来判断的表达式可以是任意类型，而不仅限于整型
* JS 提供了两种定义函数的方式，一种有返回值，一种没有返回值(这种函数有时也叫子程或 void 函数)
* JS 中，函数的参数传递方式都是按值传递，没有按引用传递的参数。但是 JS 中有保存引用的对象，比如数组
* 变量的作用域是指一个变量在程序中的哪些地方可以访问
    - JS 中的变量作用域被定义为函数作用域
    - JS 中没有块级作用域
    - 变量的值在定义该变量的函数内是可见的，并且定义在该函数内的嵌套函数中也可以访问
    - 定义变量时不使用关键字 var，则自动拥有了全局作用域
* 递归：当一个函数被递归调用，在递归没有完成时，函数的计算结果暂时被挂起
* 对象创建方式：定义包含属性和方法声明的构造函数，并在构造函数后紧跟方法的定义

第2章  数组
-----

### 2.1 JS 中对数组的定义
### todo
* 数组中所有属性和方法示例的代码实现

### 定义
* 数组：
    - 标准定义：一个存储元素的线性集合(collection)，元素可以通过索引来任意存取，索引通常是数字，用来计算元素之间存储位置的偏移量
    - JS 中的定义：JavaScript 中的数组是一种特殊的对象，用来表示偏移量的索引是该对象的属性，索引可能是整数。然而，这些数字索引在内部被转换为字符串类型， 这是因为 JavaScript 对象中的属性名必须是字符串。数组在 JavaScript 中只是一种特殊的对象，所以效率上不如其他语言中的数组高

### 2.2 使用数组
* 创建数组:var numbers = [];
* Array.isArray() 可判断一个对象是否是数组
* 字符串的 split() 方法生成数组
* 整体赋值(浅复制，新数组指向原来的数组)：引用传递
* 深复制:
```
function copy(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        arr2[i] = arr1[i];
    }
}
```

* 显示数组里的元素：print()

### 2.3 存取函数
* JS 提供了一组用来访问数组元素的函数，叫做存取函数，这些函数返回目标数组的某种变体
* 查找：indexOf()/lastIndexOf()
* 数组转化为字符串：join(),toString()
* 数组合并：concat() - 创建新数组
* 数组截取：splice() - 创建新数组

### 2.4 可变数组
* 数组末尾添加元素：push()/numbers[numbers.length] = newNum;
* 数组开头添加元素：unshift()
* 删除数组末尾元素：pop()
* 删除数组第一个元素：shift()
* 数组中间位置添加和删除元素：splice(index, elemNum, newElems);
* 顺序翻转：reverse()
* 排序：sort()。sort() 方法是按照字典顺序对元素进行排序，因此假定元素都是字符串类型。可传入比较函数
```
function compare(num1, num2) {
    return num1 - num2;
}
var nums = [3, 1, 2, 100, 4, 200];
nums.sort(compare);
```

### 2.5 迭代器方法
*  迭代器方法对数组中的每个元素应用一个函数，可以返回一个值、一组值或者一个新数组
*  不生成新数组：
    -  forEach()
    -  every()
    -  some()
    -  reduce()/reduceRight()
*  生成新数组
    -  map()
    -  filter()

### 2.6 二维和多维数组
* JS 只支持一维数组，但可以在数组中保存数组元素
* 创建二维数组
```
Array.matrix = function(numrows, numcols, initial) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
        var columns = [];
        for (var j = 0; j < numcols; ++j) {
            columns[j] = initials;
        }

        arr[i] = columns;
    }

    return arr;
}

var grades = [[], [], []];
```

### 2.7 对象数组
* 数组中可以包含对象

### 2.8 对象中的数组
* 对象内部可以使用数组保存数据

## 第3章  列表

### 3.1 
* 列表的抽象数据类型定义
* 列表是一组有序的数据，每个列表中的数据项称为元素
* 不包含任何元素的列表称为空列表。列表中包含元素的个数称为列表的 length
![列表抽象数据类型定义](./files/list-ADTD.png)

### 3.2 实现列表类
* 

