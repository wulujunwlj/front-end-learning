
## JavaScript Garden

[JavaScript 秘密花园](http://bonsaiden.github.io/JavaScript-Garden/zh/)

---
### 对象
---
#### 对象使用和属性
* JavaScript 中所有变量都可以当做对象使用，除了 `null` 和 `undefined`
* 考虑 2.toString()

##### 对象作为数据类型
* JS 对象可以作为 `哈希表` 使用，主要用来保存命名的键和值的对应关系。
* 使用对象字面量 {} 创建对象

##### 访问属性
* 点操作符
* 中括号操作符
    * 动态设置属性(使用变量设置)
    * 属性名不是一个有效的变量名

##### 删除属性
* delete
* = undefined/ = null。仅仅是移除了属性和值的关联，并不能删除属性

##### 属性名的语法
* 字符串
* 普通字符(ECMASAcript 5 之前会抛出 SyntaxError 错误)

#### 原型
JavaScript 不包含传统的类继承模型，而是使用 prototype 原型模型

##### 属性查找
当查找一个对象的属性时，JavaScript 会向上遍历原型链，知道找到给定名称的属性为止。如果查找到原型链的顶部(Object.prototype)仍然没找到指定属性，就会返回 undefined

##### 原型属性
使用原型属性来创建原型链时，可以把任何类型赋值给它(prototype)。
    * 将原子类型赋给 prototype 的操作将会被忽略
    * 将对象赋值给 prototype，将会动态创建原型链

##### 性能
* 查找原型链上端的属性，会比较消耗性能。试图获取不存在的属性将会遍历整个原型链
* 使用 `for in` 循环遍历对象的属性时，原型链上所有属性都将被访问

##### 扩展内置的原型
* 扩展 Object.prototype 或者其他内置类型的原型对象的技术被称之为 monkey patching，并且会破坏封装
* 扩展内置类型的唯一理由是为了和新的 JavaScript 保持一致。比如 Array.forEach

##### 总结

#### hasOwnProperty 函数
* 判断一个对象是否包含自定义属性而不是原型链上的属性，需要使用继承自 Object.prototype 的 hasOwnProperty 方法
* hasOwnProperty 是 JS 中唯一一个处理属性但不查找原型链的函数
* 如果一个对象存在 hasOwnProperty 属性，可以使用 ({}).hasOwnProperty.call(foo, 'bar')

#### for in 循环
for in循环中总是使用 hasOwnProperty 方法过滤

---
### 函数
---
#### 函数声明与表达式
##### 函数声明
* 
    ``` 
    function foo() {} 
    ```
* 执行前被解析(hoisted):预解析。因此它可以存在于当前上下文的任何地方。

##### 函数赋值表达式
* 
    ```
    var foo = function() {};
    ```
* 对变量 foo 的解析是在代码运行之前，但是赋值语句只在运行时执行

##### 命名函数的赋值表达式
```
var foo = function bar() {
    bar();  // 正常运行
}
bar();  // 出错:ReferenceError
```

#### this 的工作原理
this 在不同情况下，指向的各不相同

##### 全局范围内
this指向全局对象

##### 函数调用
this 指向全局对象

##### 方法调用
this 指向调用的对象

##### 调用构造函数
* 如果函数倾向于和 new 关键字一块使用，则我们称这个函数是 `构造函数`
* this 指向新创建的对象

##### 显式设置 this
当使用 Function.prototype 上的 call 或者 apply 方法时，函数内的 this 将会被显式设置为函数调用的第一个参数

##### 常见误解
* 函数调用中的 this 指向全局变量是语言中一个错误设计的地方
* 一般的处理方式是定义 that/_this/self 持有一个当前对象

##### 方法的赋值表达式
```
var test = someObject.methodTest;test();
```
中的 test 就像一个普通的函数调用，因此函数内的 this 将不再被指向到 someObject 对象(指向全局对象)。

#### 闭包和引用
* 闭包意味着当前作用域总是能够访问外部作用域的变量
* 因为函数是 JS 中唯一拥有自身作用域的结构，因此闭包的创建依赖于函数

##### 模拟私有变量


