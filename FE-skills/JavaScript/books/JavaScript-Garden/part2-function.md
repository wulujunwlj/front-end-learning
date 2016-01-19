# JavaScript 秘密花园

[来源](http://bonsaiden.github.io/JavaScript-Garden/zh/#function)

## 函数

### 函数声明与表达式
* 函数是 JS 中的一等对象，这意味着可以把函数像其他值一样传递。一个常见用法是把匿名函数作为回调函数传递到异步函数中

#### 函数声明
* 函数声明执行前被解析(hoisted):预解析。因此它可以存在于当前上下文的任何地方。
``` 
function foo() {} 
```

#### 函数赋值表达式
* 对变量 foo 的解析是在代码运行之前，但是赋值语句只在运行时执行
```
foo;            // 'undefined'
foo();          // 出错:ReferenceError - not a function
var foo = function() {};
```

#### 命名函数的赋值表达式
* bar 函数声明外是不可见的，这是因为已经把函数赋值给了 foo；然而在 bar 内部依然可见。这是由于 JS 的命名处理所致：函数名在函数内总是可见的
* IE8 及以下版本浏览器中 bar 在外部也是可见的，因为浏览器对命名函数赋值表达式进行了错误的解析，解析成 foo 和 bar 两个函数
```
var foo = function bar() {
    bar();  // 正常运行
}
bar();  // 出错:ReferenceError
```

### this 的工作原理
* this 在不同情况下，指向的各不相同

#### 全局范围内
* this指向全局对象(浏览器中为 window)

#### 函数调用
* this 指向全局对象

#### 方法调用
* this 指向调用的对象
* 在 ES5 的严格模式下(strict mode)，不存在全局变量，this 将会是 undefined

#### 调用构造函数
* 如果函数倾向于和 new 关键字一块使用，则我们称这个函数是 `构造函数`
* 构造函数中的 this 指向新创建的对象

#### 显式的设置 this
当使用 Function.prototype 上的 call 或者 apply 方法时，函数内的 this 将会被显式设置为函数调用的第一个参数
```
function foo(a, b, c) { console.log(a, b, c); }
var bar = {};
foo.apply(bar, [1, 3, 4]);
foo.call(bar, 1, 3, 4);
```

#### 常见误解
* 函数调用中的 this 指向全局变量是语言中一个错误设计的地方
* 一般的处理方式是定义 that/_this/self 持有一个当前对象

#### 方法的赋值表达式
```
var test = someObject.methodTest;test();

// 晚绑定使得 new Bar() 中的 this 指向  Bar 的实例对象
function Foo() {}
Foo.prototype.method = function() {};
function Bar() {}
Bar.prototype = Foo.prototype;

new Bar().method();
```
* 方法赋值表达式中的 test 就像一个普通的函数调用，因此函数内的 this 将不再被指向到 someObject 对象(指向全局对象)。
* this 的晚绑定是 `基于原型继承` 赖以生存的基础

### 闭包和引用
* 闭包意味着当前作用域总是能够访问外部作用域的变量
* 因为函数是 JS 中唯一拥有自身作用域的结构，因此闭包的创建依赖于函数

#### 模拟私有变量
```
// Counter 函数返回两个闭包
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
* JS 中不可以对作用域进行引用或赋值，因此没有办法在外部访问私有变量，只能通过闭包访问(私有变量)

#### 循环中的闭包
*  `错误的代码`

```
for(var i=0; i<10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
```

* 原因：当 console.log 被调用的时候，匿名函数保持对外部变量 i 的引用，此时 for 循环已经结束，i的值被修改成了 10
* 解决办法：每次循环中创建变量 i的拷贝

#### 避免引用错误
* 为了正确的获得循环序号，最好使用匿名包装器(自执行匿名函数) 
```
for(var i=0; i<10; i++) {
    (function(e) {
        setTimeout(function() {
            console.log(e);
        }, 1000);
    })(i);
}
```
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
* arguments 不是一个数组。虽然在语法上它有数组相关的属性 length,但它不从 Array.prototype 继承，实际上它是一个对象
* 通过 var 定义 arguments 或者将 arguments 声明为一个形参，都将导致原生的 arguments 不会被创建

#### 转化为数组
* 此方法转换较慢
```
Array.prototype.slice.call(arguments)
```

#### 传递参数(?)
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
* `arguments` 对象为其内部属性以及函数形式参数创建 getter 和 setter 方法。因此，改变形参的值会影响到 `arguments` 对象的值，反之亦然
```
function foo(a, b, c) {
    arguments[0] = 2;
    console.log(a);

    b = 4;
    console.log(arguments[1]);

    var d = c;
    d = 9;
    console.log(c);
}

foo(1, 2, 3);
```

#### 性能真相
* 不管是否被使用，`arguments` 对象总会被创建，除了两个特殊情况 - 作为局部变量声明和作为形式参数
* arguments 的 getters 和 setters 方法总会被创建，因此使用 arguments 对性能不会有影响。除非是需要对 arguments 对象的属性进行多次访问
* 在严格模式(strict mode)下不会创建 getters 和 setters
* 推荐不要使用 `arguments.callee` 和它的属性。严格模式下，arguments.callee 会报错 TypeError,因为已经被废除了
```
function f(a) {
    'use strict';
    a = 42;
    return [a, arguments[0]];
}
var pair = f(17);
console.assert(pair[0] === 42);
console.assert(pair[1] === 17);
```

### 构造函数
```
// 构造函数没有显式的 return，则返回创建的对象
function Foo() {
    this.bar = 1;
}

Foo.prototype.test = function() {
    console.log(this.bar);
}
var foo = new Foo();
foo.test();

// 当显式的 return 表达式为一个对象时将会影响构造函数的返回结果
function Bar() {
    return 2;
    // return new Number(2);    // 返回一个对象时为 false
}
var bar = new Bar();
bar.constructor === Bar;      // true

function Test() {
    this.value = 2;

    return {
        foo: 1
    };
}
var test = new Test();
test.constructor === Test;      // false
```

* JS 中通过 `new` 关键字方式调用的函数都被认为是构造函数
* 在构造函数内部，`this` 指向新创建的对象 `Object`。新创建的对象的`prototype` 被指向到构造函数的 `prototype`
* 如果被调用的函数没有显式的 `return` 表达式，则会隐式的返回 `this` 对象。显式的 `return` 表达式将会影响返回结果，但仅限于返回的是一个对象

#### 工厂模式
* 为了不使用 new 关键字，构造函数必须显式的返回一个值
```
function Bar() {
    var value = 1;

    return {
        method: function() {
            return value;
        }
    }
};
Bar.prototype = {
    foo: function() {}
};
// 以下两种方法创建了一个闭包，返回一个新创建的拥有 method 属性的对象
var bar = new Bar();
var bar2 = Bar();
bar.constructor === Bar;        // false
bar2.constructor === Bar;       // false
```

* 显式返回的对象原型不会执行 Bar.prototype，而是新创建的对象(包含 method 属性)，而且不能访问 Bar 原型链上的属性

#### 通过工厂模式创建新对象
* 创建一个工厂方法，并且在方法内构造一个新对象
```
function Foo() {
    var obj = {};

    obj.bar = 'bar';
    var private = 2;

    obj.method1 = function(value) {
        this.bar = value;
    };
    obj.getPrivate = function() {
        return private;
    }

    return obj;
}
```

* 工厂方法的优点：
    - 比 new 的调用方式不容易出错
    - 可以充分利用私有变量带来的便利
* 工厂方法的缺点：
    - 会占用更多的内存：因为新创建的对象不能共享原型上的方法
    - 为了实现继承，工厂方法需要从另外一个对象拷贝所有属性，或者把一个对象作为新创建对象的原型
    - 放弃原型链仅仅是为了防止遗漏 new 带来的问题，这似乎和语言本身的思想相违背

### 作用域与命名空间
* JS 支持花括号创建的代码段，但是并不支持块级作用域；仅仅支持函数作用域
* JS 中没有显式的命名空间定义，所有对象都定义在一个全局共享的命名空间下
* 每次引用一个变量，JS 会向上遍历整个作用域，如果到达全局作用域仍没找到，则会抛出 ReferenceError 异常

#### 隐式的全局变量
* 不使用 var 将会导致隐式的全局变量产生。即，不使用 var 会在全局作用域内定义变量，使用 var 会在当前作用域内定义变量

#### 局部变量
* JS 中定义局部变量的两种方式
    - 函数参数
    - var 关键字声明

#### 变量声明提升(hoisting)
* JS 中 var 表达式和 function 声明都会被提升到当前作用域的顶部
```
bar();
var bar = function() {};
var someValue = 42;

test();
function test(data) {
    if(false) {
        goo = 1;
    } else {
        var goo = 2;
    }
    for(var i=0; i<100; i++) {
        var e = data[i];
    }
}

// 等价于
var bar, someValue;
function test(data) {
    var goo, i, e;
    if(false) {
        goo = 1;
    } else {
        goo = 2;
    }
    for(i=0; i<100; i++) {
        e = data[i];
    }
}
bar();
someValue = 42;
bar = function() {};
test();
```

* 没有块级作用域会导致 var 表达式从循环内部移到外部

#### 名称解析顺序
* JS 中所有的作用域，包括全局作用域，都有一个特别的名称 this 指向当前对象
* 函数作用域有默认的变量 arguments，包含了传递到函数中的参数
* 当访问函数内的变量 foo 时，JS 的查找顺序为：
    1. 当前作用域是否有 var foo 的定义
    2. 函数形参是否有使用 foo 名称的
    3. 函数自身是否叫做 foo
    4. 回溯偶倒上一级作用域，按此顺序查找

#### 命名空间
* 只有一个全局作用域导致的常见错误时命名冲突，JS 中可以通过匿名包装器轻松解决
```
(function() {
    window.foo = function() {
        //
    }
})();
```

* 匿名函数被认为是表达式，为了可调用性，会首先被执行
* 调用函数表达式的其他形式：
    - +function() {}();
    - (function(){}());
