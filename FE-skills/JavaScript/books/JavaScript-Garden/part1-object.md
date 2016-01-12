# JavaScript 秘密花园

[来源](http://bonsaiden.github.io/JavaScript-Garden/zh/#object)

## 对象

### 对象使用和属性
* JavaScript 中所有变量都可以当做对象使用，除了 `null` 和 `undefined`
* 考虑 2.toString()

#### 对象作为数据类型
* JS 对象可以作为 `哈希表` 使用，主要用来保存命名的键和值的对应关系。
* 使用对象字面量 {} 创建对象

#### 访问属性
* 点操作符
* 中括号操作符
    * 动态设置属性(使用变量设置)
    * 属性名不是一个有效的变量名

#### 删除属性
* delete
* = undefined/ = null。仅仅是移除了属性和值的关联，并不能删除属性

#### 属性名的语法
* 字符串
* 普通字符(ECMASAcript 5 之前会抛出 SyntaxError 错误)

### 原型
JavaScript 不包含传统的类继承模型，而是使用 prototype 原型模型

#### 属性查找
当查找一个对象的属性时，JavaScript 会向上遍历原型链，知道找到给定名称的属性为止。如果查找到原型链的顶部(Object.prototype)仍然没找到指定属性，就会返回 undefined

#### 原型属性
使用原型属性来创建原型链时，可以把任何类型赋值给它(prototype)。
    * 将原子类型赋给 prototype 的操作将会被忽略
    * 将对象赋值给 prototype，将会动态创建原型链

#### 性能
* 查找原型链上端的属性，会比较消耗性能。试图获取不存在的属性将会遍历整个原型链
* 使用 `for in` 循环遍历对象的属性时，原型链上所有属性都将被访问

#### 扩展内置的原型
* 扩展 Object.prototype 或者其他内置类型的原型对象的技术被称之为 monkey patching，并且会破坏封装
* 扩展内置类型的唯一理由是为了和新的 JavaScript 保持一致。比如 Array.forEach

#### 总结

### hasOwnProperty 函数
* 判断一个对象是否包含自定义属性而不是原型链上的属性，需要使用继承自 Object.prototype 的 hasOwnProperty 方法
* hasOwnProperty 是 JS 中唯一一个处理属性但不查找原型链的函数
* 如果一个对象存在 hasOwnProperty 属性，可以使用 ({}).hasOwnProperty.call(foo, 'bar')

### for in 循环
for in循环中总是使用 hasOwnProperty 方法过滤

## 函数

### 函数声明与表达式

#### 函数声明
* 
    ``` 
    function foo() {} 
    ```
* 执行前被解析(hoisted):预解析。因此它可以存在于当前上下文的任何地方。

#### 函数赋值表达式
* 
    ```
    var foo = function() {};
    ```
* 对变量 foo 的解析是在代码运行之前，但是赋值语句只在运行时执行

#### 命名函数的赋值表达式
```
var foo = function bar() {
    bar();  // 正常运行
}
bar();  // 出错:ReferenceError
```

### this 的工作原理
this 在不同情况下，指向的各不相同

#### 全局范围内
this指向全局对象

#### 函数调用
this 指向全局对象

#### 方法调用
this 指向调用的对象

#### 调用构造函数
* 如果函数倾向于和 new 关键字一块使用，则我们称这个函数是 `构造函数`
* this 指向新创建的对象

#### 显式设置 this
当使用 Function.prototype 上的 call 或者 apply 方法时，函数内的 this 将会被显式设置为函数调用的第一个参数

#### 常见误解
* 函数调用中的 this 指向全局变量是语言中一个错误设计的地方
* 一般的处理方式是定义 that/_this/self 持有一个当前对象

#### 方法的赋值表达式
```
var test = someObject.methodTest;test();
```
中的 test 就像一个普通的函数调用，因此函数内的 this 将不再被指向到 someObject 对象(指向全局对象)。

### 闭包和引用
* 闭包意味着当前作用域总是能够访问外部作用域的变量
* 因为函数是 JS 中唯一拥有自身作用域的结构，因此闭包的创建依赖于函数

#### 模拟私有变量
```
    function Counter(start) {
        var count = start;

        return {
            increment: function() {
                count++;
            },
            get: function() {
                return count;
            }
        }
    }

    var foo = Counter(4);
    foo.increment();
    foo.get();
```

#### 为什么不可以在外部访问私有变量
JS 中不可以对作用域进行引用或赋值，因此只能通过闭包访问私有变量

#### 循环中的闭包
*  `错误的代码`

```
    for(var i=0; i<10; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
```

* 原因：当console.log被调用的时候，匿名函数保持对外部变量 i 的引用，此时 for 循环已经结束，i的值被修改成了 10
* 解决办法：每次循环中创建变量 i的拷贝
    ```
        for(var i=0; i<10; i++) {
            (function(e) {
                setTimeout(function() {
                    console.log(e);
                }, 1000);
            })(i);
        }
    ```

#### 避免引用错误

* 为了正确的获得循环序号，最好使用匿名包装器(自执行匿名函数) 
* 原因：外部的匿名函数会立即执行，并把 i 作为它的参数，函数内的 e 变量就拥有了 i的一个拷贝。当传递给 setTimeout 的匿名函数执行时，它就拥有了对e的引用，而这个值是不会被循环改变的
* 另外的方法：从匿名包装器中返回一个函数
    ```
    for(var i=0; i<10; i++) {
        setTimeout((function(e) {
            return function() {
                console.log(e);
            }
        })(i), 1000);
    }
    ```

### arguments 对象
* JS 中每个函数内部都能访问一个特别变量 arguments,这个变量维护着所有传递到这个函数中的参数列表
* arguments 不是一个数组。虽然在语法上它有数组相关的属性 length,但它不从 Array.prototype 继承
* 通过 var 定义arguments或者将 arguments 声明为一个形参，都将导致原生的 arguments 不会被创建

#### 转化为数组
* 此方法转换较慢
```
Array.prototype.slice.call(arguments)
```

#### 传递参数
* 推荐做法1
```
function foo() {
    bar.apply(null, arguments);
}
function bar(a, b, c) { 
    //
}
```

* 推荐做法2
```
function Foo() {}
Foo.prototype.method = function(a, b, c) {
    console.log(this, a, b, c);
}
```

* 推荐做法3(使用 call 和 apply，创建一个快速的解绑定包装器)
```
function Foo() {}
Foo.prototype.method = function(a, b, c) {
    console.log(this, a, b, c);
}

Foo.method = function() {
    Function.call.apply(Foo.prototype.method, arguments);
}
```

#### 自动更新
`arguments` 对象为其内部属性以及函数形式参数创建 getter 和 setter 方法。因此，改变形参的值会影响到 `arguments` 对象的值，反之亦然
```
function foo(a, b, c) {
    arguments[0] = 2;
    a;

    b = 4;
    arguments[1];

    var d = c;
    d = 9;
    c;
}

foo(1, 2, 3);
```

#### 性能真相
* 不管是否被使用，`arguments` 对象总会被创建，除了两个特殊情况 - 作为局部变量声明和作为形式参数。
* 推荐不要使用 `arguments.callee` 和它的属性

### 构造函数
* 通过 `new` 关键字方式调用的函数都被认为是构造函数
* 在构造函数内部，`this` 指向新创建的对象 `Object`。新创建的对象的`prototype` 被指向到构造函数的 `prototype`
* 如果被调用的函数没有显式的 `return` 表达式，则会隐式的返回 `this` 对象。显式的 `return` 表达式将会影响返回结果，但仅限于返回的是一个对象

#### 工厂模式
