# JavaScript 秘密花园

[来源](http://bonsaiden.github.io/JavaScript-Garden/zh/#core)

## 核心

### 为什么不要使用 `eval`
* `eval` 函数会在当前作用域中执行一段 JS 代码字符串
* `eval` 只在被直接调用并且调用函数式 `eval` 本身时，才在当前作用域中执行
* 在任何情况下都应该避免使用 `eval`，99.9% 使用 `eval` 的场景都有不使用 `eval` 的解决方案
* 隐藏的 `eval`：定时函数 `setTimeout`, `setInterval` 在接受字符串作为第一个参数时，字符串总是在全局作用域中执行
* 安全问题：因为 `eval` 会执行任意传给它的代码，在代码字符串未知或者是来自一个不信任的源时，绝对不要使用 `eval` 函数
```JS
// eval 在当前作用域中执行一段 JS 代码字符串
var foo = 1;
function test() {
    var foo = 2;
    eval('foo = 3');
    return foo;
}
test();
foo;

// eval 在被直接调用并且调用函数是 eval 本身时，在当前作用域中执行
var foo = 1;
function test() {
    var foo = 2;
    var bar = eval;
    bar('foo = 3');
    return foo;
}
test();
foo;

// 等价于
var foo = 1;
function test() {
    var foo = 2;
    window.foo = 3;
    return foo;
}
test();
foo;

// 等价于
var foo = 1;
function test() {
    var foo = 2;
    eval.call(window, 'foo = 3');
    return foo;
}
test();
foo;
```

### undefined 和 null
* `undefined` 和 `null` 是 JS 中两个表示 "空" 的值，比较有用的是 `undefined`
* `undefined` 是一个值为 `undefined` 的 `类型`
* JS 中也定义了一个全局变量，值为 `undefined`，这个变量也被称为 `undefined`。这个变量不是一个常亮，也不是一个关键字，可以轻易被覆盖
* 会返回 `undefined` 值的情况：
    - 访问未修改的全局变量 `undefined`
    - 由于没有定义 `return` 表达式的函数隐式返回
    - `return` 表达式没有显式的返回任何内容
    - 访问不存在的属性
    - 函数参数没有被显式传递
    - 任何被置为 `undefined` 值的变量
* JS 中 `null` 是另外一种数据类型

### 自动分号插入
* JS 需要分号来解析源代码
* JS 的解析器在遇到由于缺少分号导致的解析错误时，会自动在源代码中插入分号
* 自动的分号插入被认为是 JS 语言最大的设计缺陷之一，因为它能改变代码的行为
* 在前置括号的情况下，解析器不会自动插入分号
* 建议保留括号；并把花括号和相应的表达式放在一行。