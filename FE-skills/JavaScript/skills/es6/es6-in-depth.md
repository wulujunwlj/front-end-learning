
# ES6 In Depth
[来源](https://hacks.mozilla.org/category/es6-in-depth/)

[infoq](http://www.infoq.com/cn/es6-in-depth/)

## ES6 是什么
* JavaScript 是 ECMAScript 的实现和扩展，由 ECMA 参与进行标准化。ECMAScript 定义了：
    - 语言语法
    - 类型
    - 原型和继承
    - 内建对象和函数的标准库
* ECMAScript 的版本：1、2、3、5、6(ES4因为太过激进而遭废除)
* ES5 新增特性
    - Object.create()
    - Object.defineProperty()
    - getters/setters
    - 严格模式
    - JSON 对象
    - 新的数组方法：map(),filter()

## 2 迭代器和 for-of 循环
* 遍历数组
    - for loop
    ```
    for(var index = 0; index < myArray.length; index++) {
        console.log(myArray[index]);
    }
    ```
    - forEach(不能使用 `break` 中断循环，也不能使用 `return` 返回到外层函数)
    ```
    myArray.forEach(function(value) {
        console.log(value);
    })
    ```
    - for in
    ```
    for(var index in myArray) {
        console.log(myArray[index]);
    }

    // 使用 Object.keys 遍历
    for(var key of Object.keys(someObject)) {
        console.log(key + ': ' + someObject[key]);
    }
    ```
    存在的问题
        + 赋值给 index 的值不是实际的数字，而是字符串 '0', '1', '2'，因此很可能在无意之间进行字符串算数计算
        + 作用于数组的 for-in 循环体除了遍历数组元素外，还会遍历自定义属性
        + 在某些情况下，遍历数组的顺序是随机的
        + for-in 是为遍历对象而设计的，可以遍历得到字符串类型的键。或者使用内建的 Object.keys() 方法
    - for of
    ```
    for(var value in myArray) {
        console.log(value);
    }
    // 遍历字符串
    for(var chr of '') {
        console.log(chr);
    }
    // 遍历 Set 对象
    var uniqueWords = new Set(words);
    for(var word of uniqueWords) {
        console.log(word);
    }
    // 遍历 Map 对象[解构(destructuring)]
    for(var [key, value] of phoneBookMap) {
        console.log(key + '\'s phone number is:' + value);
    }
    ```
    特点：
        + 最简洁、最直接的遍历数组元素的语法
        + 避开了 for-in 的所有缺陷
        + 可以正确响应 break, continue 和 return 语句
        + 可以遍历其他集合:大多数类数组对象(DOM NodeList对象)，字符串遍历，Map 和 Set 对象
        + for-of 循环不支持普通对象。可以使用 for-in 循环或内建的 Object.keys() 方法遍历对象
        + for-of 循环语句通过方法调用来遍历各种集合
* Symbols
    - 所有拥有 [Symbol.iterator] 的对象被称为可迭代的
* for-of 循环的操作过程：
    - for-of 循环首先调用集合的 [Symbol.iterator]() 方法，紧接着返回一个新的迭代器对象。迭代器对象可以是任意具有 .next() 方法的对象；for-of 循环将重复调用这个方法，每次循环调用一次
    ```
    var zeroesForeverIterator = {
        [Symbol.iterator]: function() {
            return this;
        },
        next: function() {
            return {
                done: false,
                value: 0
            }
        }
    };
    ```

## 3 生成器 Generators
* 简介
    - 代码示例
    ```
    // 定义
    function* quips(name) {
        yield '你好 ' + name + '!';
        yield '希望你能喜欢这篇介绍 ES6 的译文';

        if(name.startsWith('X')) {
            yield '你的名字 ' + name + ' 首字母是 X，这很酷';
        }
        yield '我们下次再见!';
    }

    // 调用
    var iter = new quips('Xplay');
    iter.next();        // 返回对象 { value: '', done: Boolean }
    iter.next();
    iter.next();
    ```
    - 生成器函数与普通函数的区别
        + 普通函数用 function 声明，生成器函数用 function* 声明
        + 在生成器函数内部，有一种类似 return 的语法：yield。普通函数只可以 return 一次，而生成器函数可以 yield 多次。
        + 在生成器的执行过程中，遇到 yield 表达式立即暂停，后续可恢复执行状态(最大的区别，普通函数不能自暂停，生成器函数可以)

* 
## 模板字符串
## 不定参数和默认参数
## 解构(Destructuring)
## 箭头函数(Arrow Functions)
## Symbols
## 学习 Babel 和 Broccoli，马上就用 ES6
## 集合
## 生成器 Generators，续篇
## 代理 Proxies
## 类 Class
## let 和 const
## 子类 Subclassing
## 模块 Modules
## 展望未来
