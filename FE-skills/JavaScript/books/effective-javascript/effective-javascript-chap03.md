# Effective JavaScript:68 Specific Ways to Harness the Power of JavaScript

## 第3章 使用函数

### 18.理解函数调用、方法调用及构造函数调用之间的不同
```JS
// 函数调用
function hello(username) {
    return 'hello, ' + username;
}
hello('JavaScript');
// 方法调用
var obj = {
    username: 'JavaScript',
    hello: function() {
        return 'hello, ' + this.username;
    }
}
obj.hello();
// 构造函数调用
function User(name, password) {
    this.name = name;
    this.password = password;
}
var user = new User('JS', '123456');
user.name;
```
* 函数调用：将全局对象(严格模式为 undefined)作为接收者
* 方法调用：由调用表达式来确定 this 变量的绑定，绑定到 this 变量的对象被称为调用接收者 - receiver
* 构造函数调用：需要通过 new 运算符调用。将一个全新的对象作为 this 变量的值，并隐式的返回这个新对象作为调用结果。构造函数的主要职责是初始化该新对象

### 19.熟练掌握高阶函数
* 高阶函数：将函数作为参数(回调函数)或者返回值的函数
* 

### 20.使用 call 方法自定义接收者来调用方法

### 21.使用 apply 方法通过不同数量的参数调用函数
* 可变参数、可变元的函数(函数的元数是指其期望的参数个数)：可以接收任意数量的参数
* 

### 22.使用 arguments 创建可变参数的函数

### 23.永远不要修改 arguments 对象
* arguments 对象复制到一个真正的数组的方法：[].slice.call(arguments);

### 24.使用变量保存 arguments 的引用
* 迭代器(iterator)：是一个可以顺序存取数据集合的对象；
* 

### 25.使用 bind 方法提取具有确定接收者的方法

### 26.使用 bind 方法实现函数柯里化
* 将函数与其参数的一个子集绑定的技术称为函数柯里化(curring)，以逻辑学家 Haskell Curry 的名字命名。
* 比起显式的封装函数，函数柯里化是一种简洁的、使用更少引用来实现函数委托的方式

### 27.使用闭包而不是字符串来封装代码
* 函数是一种将代码作为数据结构存储的便利方式，这些代码可以随后被执行。这使得妇幼表现力的高阶函数抽象如 map 和 forEach 称为可能。也是 JS 异步 I/O 方法的核心
* 将代码表示为字符串的形式传递给 eval 函数可以达到同样功能
* 

### 28.不要信赖函数对象的 toString 方法
* JS 函数具有将其源代码重现为字符串的能力
```JS
(function() {
    return x + 1;
}).toString();

(function(x) {
    return function(y) {
        return x + y;
    }
})(42).toString();
```
* 当调用函数的 toString 方法时，并没有要求 JS 引擎能够精确的获取到函数的源代码
* 由于在不同的引擎下调用 toString 方法的结果可能不同，所以不要信赖函数源代码的详细细节
* toString 方法的执行结果并不会暴露存储在闭包中的局部变量值
* 通常情况下，应该避免使用函数对象的 toString 方法

### 29.避免使用非标准的栈检查属性
* 调用栈：指当前正在执行的活动函数链
* arguments.callee：指向该 arguments 对象被调用的函数； argument.caller：指向调用该 arguments 对象的函数，大多数函数已经移除了次属性，但是许多 JS 环境可以使用 caller 属性，指向函数最近的调用者
```JS
var factorial = (function(n) {
    return (n <= 1) ? 1 : (n * arguments.callee(n - 1));
});
// 等价于
function factorial = function(n) {
    return (n <= 1) ? 1 : (n * factorial(n - 1));
}

// caller 的使用
function revealCaller() {
    return revealCaller.caller;
}
function start() {
    return revealCaller();
}
start() === start;

// 利用 caller 获取栈跟踪
function getCallStack() {
    var stack = [];

    for(var f = getCallStack.caller; f; f = f.caller) {
        stack.push(f);
    }
    return stack;
}

// call 获取栈跟踪的问题
function f(n) {
    return n === 0 ? getCallStack() : f(n - 1);
}
```
* 栈跟踪(stack trace)是一个提供当前调用栈快照的数据结构
* 通过 caller 获取函数调用栈跟踪的问题：如果某个函数在调用栈中出现了不止一次，栈检查逻辑将会陷入循环。原因：函数 f 递归调用自己，因此其 caller 属性会自动更新，指回到函数 f
* ES5 的严格模式中，arguments 的 caller 或 callee 属性都将抛出错误