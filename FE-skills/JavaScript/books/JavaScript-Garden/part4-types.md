# JavaScript 秘密花园

[来源](http://bonsaiden.github.io/JavaScript-Garden/zh/#types)

## 类型

### 相等与比较
* JS 中有两种方式判断两个值是否相等
    - ==:等于操作符，会为了比较两个值而进行的强制类型转换，从而会带来性能消耗
    - ===:严格等于操作符，不会进行强制类型转换，有助于提升性能
    - 对于对象，等于操作符不是值是否相等，而是是否同一个对象的实例
    - 结论：推荐使用严格等于，如果需要类型转换，在比较前进行显式转换

### typeof 操作符
* typeof 操作符(和 instanceof 一起)或许是 JS 中最大的设计缺陷，因为几乎不可能从它们那里得到想要的结果
* typeof 可以用来检测一个对象是否已经定义或者是否已经赋值
* typeof 是一个操作符，typeof() 的形式中的括号只是用来计算一个表达式的值，这个返回值作为 typeof 操作符的一个操作数
* 对象的类定义：JS 标准文档中给出了一种获取 [[Class]] 值的方法 - Object.prototype.toString
* JS 标准文档中定义：[[Class]] 的值只可能是在下面字符串中的一个:Arguments,Array,Boolean,Date,Error,Function,JSON,Math,Number,Object,RegExp,String
* 检测一个对象的类型，推荐使用 `Object.prototype.toString` 方法(?20160112)

### instanceof 操作符
* 比较两个操作数的构造函数。只有在比较自定义的对象时才有意义
```JS
// 比较自定义对象
function Foo() {}
function Bar() {}
Bar.prototype = new Foo();

new Bar() instanceof Bar;
new Bar() instanceof Foo;

// 比较内置类型
new String('foo') instanceof String;
new String('foo') instanceof Object;

'foo' instanceof String;
'foo' instanceof Object;
```

* `instanceof` 用来比较属于不同 JS 上下文的对象时将会出错(例如浏览器中不同的文档结构)，因为他们的构造函数不是同一个对象

### 类型转换
* JS 是弱类型语言，会在任何可能的情况下应用强制类型转换
* 以 0 开头的数字字面量会被当做八进制解析，而在 ES5 的严格模式下，已移除该特性
* 内置类型的构造函数在被调用时，使用或者不使用 `new` 的结果完全不同。使用内置类型 `Number` 作为构造函数将创建一个新的 `Number` 对象，而在不使用 `new` 关键字的 `Number` 函数更像一个数字转换器
* 转换为字符串：一个值加上空的字符串
* 转换为数字
    - 使用一元的加号操作符
    - Number()
    - parsetInt()
* 转换为布尔值：使用否操作符两次(双重否定)
