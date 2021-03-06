# Effective JavaScript:68 Specific Ways to Harness the Power of JavaScript

## 第2章 变量作用域

### 8.尽量少用全局变量
* JS 中很容易在全局命名空间中创建变量：不加任何形式的声明，而且能被整个程序的所有代码自动的访问
* 全局变量的问题：
    - 会污染共享的公共命名空间，并可能导致意外的命名冲突
    - 不利于模块化，因为会导致程序中独立组件间的不必要耦合
* 全局命名空间是 JS 程序中独立的组件进行交互的唯一途径，因此，利用全局命名空间的情况是不可避免的
* JS 的全局命名空间也被暴露为在程序全局作用域中可以访问的全局对象，该对象作为 this 关键字的初始值。在 Web 浏览器中，全局对象被绑定到全局的 window 变量。添加或修改全局变量会自动更新全局对象，更新全局对象也会自动更新全局命名空间
```JS
var foo = 123;
console.log(this.foo);
console.log(window.foo);

this.foo = 'abc';
console.log(foo);
```
* 创建全局变量的方式：
    - 在全局作用域内使用 var 声明
    - 将变量加入到全局对象中
* 由于全局对象提供了全局环境的动态反应机制，所以可以利用全局对象来做平台特性检测
* 特性检测是一种使得程序在平台特性集合的变化中依旧健壮的相对简单的方法。这种技术也适合于其他方法。例如，此技术使得在浏览器和 JS 服务器环境中共享程序库称为可能

### 9.始终声明局部变量
* 意外(隐式)的全局变量：程序中给一个未绑定的变量赋值将会简单的创建一个新的全局变量并赋值给它，而不是引发错误(省略 var 时会隐式的创建全局变量)

### 10.避免使用 with
* with 语句的动机：程序中需要对单个对象依次调用一系列方法，使用 with 可以很方便的避免对对象的重复引用
```JS
function status(info) {
    var widget = new Widget();
    with(widget) {      // 当 widget 包含一个 info 属性时会出现逻辑不明
        setBackground('blue');
        setForeground('white');
        setText('Status: ' + info);
        show();
    }
}

function f(x, y) {
    with(Math) {      // 当 Math 包含一个 x,y 属性时会出现逻辑不明
        return min(round(x), sqrt(y));
    }
}
```
* JS 对待所有的变量都是相同的。JS 从最内层的作用域开始向外查找变量。
* ES5 规范称的 "词法环境"，在旧版本标准中被称为作用域链
* with 语句的问题
    -  with 块中的每个外部变量的引用都隐式的假设在 with 对象(以及它的任何原型对象)中没有同名的属性。变量作用域和对象命名空间之间的冲突使得 with 代码块异常脆弱[with 所引用的对象可能含有与函数参数一致的属性，会覆盖对应的调用]
    -  with 代码块需要搜索对象的原型链来查找 with 代码块里的所有变量，因此运行速度远远低于一般代码块
* 可以使用简短的变量名代替重复访问的对象，或者显式的绑定局部变量到对象属性上来避免 with 语句

### 11.熟练掌握闭包
* 闭包的3个事实：
    - JS 允许引用在当前函数以外定义的变量
    ```JS
    function makeSandwich() {
        var magicIngredient = 'peanut butter';

        function make(filling) {
            return magicIngredient + ' and ' + filling;
        }

        return make('jelly');
    }
    makeSwidwich();
    ```
    - 即使外部函数已经返回，当前函数仍然可以引用在外部函数所定义的变量。意味着可以返回一个内部函数，并稍后调用
    > 原理：JS 的函数值包含了比调用它们时执行所需要的代码还要多的信息。而且，JS 函数值还在内部存储它们可能会引用的定义在其封闭作用域的变量。那些在其所涵盖的作用域内跟踪变量的函数被称为闭包。
    > 函数可以引用在其作用域内的任何变量，包括参数和外部函数变量。
    
    ```JS
    function makeSandwich() {
        var magicIngredient = 'peanut butter';

        function make(filling) {
            return magicIngredient + ' and ' + filling;
        }

        return make;
    }
    var f = makeSwidwich;
    f('jelly');
    f('bananas');
    f('marshmallows');
    ```
    - 闭包可以更新外部变量的值。闭包存储的是外部变量的引用，而不是值的副本。
    ```JS
    // 此方法产生了包含三个闭包的对象
    function box() {
        var val;

        return {
            set: function(newVal) { val = newVal; },
            get: function() { return val; },
            type: function() { return typeof val; }
        };
    }

    var b = box();
    b.type();
    b.set(23);
    b.get();
    b.type();
    ```
* 闭包是 JS 最优雅、最有表现力的特性之一，也是许多惯用法的核心。JS 甚至提供了一种更为方便的构建闭包的字面量语法 - 函数表达式
```JS
function sandWichMaker(magicIngredient) {
    return function(filling) {
        return magicIngredient + ' and ' + filling;
    };
}
```

### 12.理解变量声明提升
* JavaScript 支持词法作用域(lexical scoping)，除了极少的例外，对变量 foo 的引用会被绑定到声明 foo 变量最近的作用域中
* JavaScript 不支持块级作用域，即变量定义的作用域并不是离其最近的封闭语句或代码块，而是包含它们的函数
* JS 变量声明由两部分构成：声明和赋值。JS 隐式的提升(hoists)声明部分到封闭函数的顶部，而将赋值留在原地。换句话说，变量的作用域是整个函数，但仅在 var 语句出现的位置进行赋值。
* 例外：JS 中的 catch 拥有块级作用域。try...catch 语句将捕获的异常绑定到一个变量，该变量的作用域只是 catch 语句块。
```JS
function test() {
    var x = 'var', result = [];

    result.push(x);
    try {
        throw 'exceptions';
    } catch(x) {
        x = 'catch';
    }

    result.push(x);
    return result;
}
test();
```
* 可以考虑手动提升局部变量的声明，从而避免混淆(变量声明放到函数顶部)

### 13.使用立即调用的函数表达式创建局部作用域
```JS
function wrapElements(a) {
    var result = [], i, n;

    for(i =0, n = a.length; i < n; i++) {
        result[i] = function() { return a[i]; };
    }

    return result;
}
var wrapped = wrapElements([10, 20, 30, 40, 50]);
var f = wrapped[0];
f();
```

* 代码的输出结果与预期不一致的原因：(闭包通过引用而不是值来捕获它们的外部变量)

![](./files/iife-closure.png)

* 解决办法：通过创建一个嵌套函数并立即调用来强制创建一个局部作用域
```JS
function wrapElements(a) {
    var result = [];

    for(var i = 0, n = a.length; i < n; i++) {
        (function() {
            var j = i;
            result[i] = function() { return a[j]; };
        })();
    }

    return result;
}

function wrapElements(a) {
    var result = [];

    for(var i = 0, n = a.length; i < n; i++) {
        (function(index) {
            result[i] = function() { return a[index]; };
        })(i);
    }

    return result;
}
```

* 使用 IIFE 来创建局部作用域可能的问题：
    - 代码块不能包含任何跳出块的 break 和 continue 语句，因为在函数外使用 break 或 continue 是不合法的
    - 如果代码块引用了 this 或者 arguments 变量，IIFE 将改变它们的含义

### 14.当心命名函数表达式笨拙的作用域(?)P52
```
function double(x) { return x * 2; }

var f = function double(x) { return x * 2; }
```

* function double(x) { return x * 2; }。可以是一个函数声明，也可以是一个命名函数表达式(named function expression)。函数声明定义一个函数并绑定到当前作用域
* var f = function double(x) { return x * 2; }。根据 ECMAScript 规范，此语句将该函数绑定到变量f，而不是变量 dboule

### 15.当心局部块函数声明笨拙的作用域

### 16.避免使用 eval 创建局部变量
```
var y = 'global';
function test(x) {
    if(x) {
        eval('var y = "local"');
    }
    return y;
}
test(true);
test(false);

// 源代码将未在局部作用域内定义的变量传递给 eval 函数时，赋予了外部调用者改变 test 函数内部作用域的能力
var y = 'global';
function test(src) {
    eval(src);
    return y;
}
test('var y = "local"');
test('var z = "local"');

// 在明确的嵌套作用域中使用 eval
var y = 'global';
function test(src) {
    (function() { eval(src); })();
    return y;
}
test('var y = "local"');
test('var z = "local"');
```

* 错误使用 eval 函数的最简单方式之一是允许它干扰作用域
* eval 函数会将其参数作为 JS 程序进行解释，但是该程序运行于调用者的局部作用域中。嵌入到程序的全局变量会被创建为调用程序的局部变量
* 基于作用域决定程序的动态行为通常是个坏主意。导致的结果是，即使想简单的理解变量是如何绑定的都需要了解程序执行的细节
* ES5 严格模式将 eval 函数运行在一个嵌套作用域中防止这种污染(修改内部作用域)。保证 eval 函数不影响外部作用域的一个方法是在一个明确的嵌套作用域中运行它

### 17.间接调用 eval 函数优于直接调用
```
var x = 'global';
function test() {
    var x = 'local';
    return eval('x');       // direct eval
}
test();

var x = 'global';
function test() {
    var x = 'local';
    var f = eval;

    return f('x');       // indirect eval
}
test();
```

* eval 函数不仅仅是一个函数，eval 函数具有访问调用它那时的整个作用域的能力
* eval 函数很难调用任何一个函数，因为一旦调用的函数是 eval 函数，那么每个函数调用都需要确保在运行时整个作用域对 eval函数是可访问的
* 直接调用 eval 函数：函数调用涉及 eval 标识符。在这种情况下，编译器需要确保被执行的程序具有访问调用者局部作用域的权限。直接调用的问题：
    - 可能很容易被滥用：例如，对一个来自网络的源字符串进行求值，可能会暴露其内部细节给一些未受信者(参考16)
    - 直接调用 eval 函数性能上的损耗相当昂贵
* 间接调用 eval 函数：其他调用 eval 函数的方式。这些方式在全局作用域内对 eval 函数的参数求值。例如，绑定 eval 函数到另一个变量名，通过该变量名调用函数会使代码市区对所有局部作用域的访问能力
* 在实践中，，唯一能够产生直接调用 eval 函数的语句是可能被(许多的)括号包裹的名称为 eval 的变量
* 编写间接调用 eval 函数的一种简洁方式是表达式序列运算符(,)和一个明显毫无意义的数字字面量:`(0, eval)(src);` 。这种调用的形式几乎与简单的 eval 函数标识符完全一致，一个重要的区别在于整个调用表达式被视为是一种间接调用 eval函数的方式
* 表达式序列运算符(,)的计算结果为最后一个运算的结果
