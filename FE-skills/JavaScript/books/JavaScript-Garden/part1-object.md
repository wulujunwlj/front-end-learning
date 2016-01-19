# JavaScript 秘密花园

[来源](http://bonsaiden.github.io/JavaScript-Garden/zh/#object)

## 对象

### 对象使用和属性
* JavaScript 中所有变量都可以当做对象使用，除了 `null` 和 `undefined`
* 数字的字面值(literal)也可以当做对象使用。考虑 2.toString(),2..toString(),2 .toString(),(2).toString()

#### 对象作为数据类型
* JS 对象可以作为 `哈希表` 使用，主要用来保存命名的键和值的对应关系。
* 使用对象字面量 {} 创建的对象，继承自 Object.prototype，没有任何自定义属性

#### 访问属性
* 点操作符
* 中括号操作符
    * 动态设置属性(使用变量设置)
    * 属性名不是一个有效的变量名(包含空格，或者是 JS 关键字)

#### 删除属性
* delete
* 设置属性值为 undefined 或 null，仅仅是移除了属性和值的关联，并不能删除属性

#### 属性名的语法
* 字符串
* 普通字符(ECMASAcript 5 之前会抛出 SyntaxError 错误)

### 原型
* JavaScript 不包含传统的类继承模型，而是使用 prototype 原型模型
* JS 使用原型链的继承方式
```
function Foo() {
    this.value = 42;
}
Foo.prototype = {
    method: function() {
        // 
    }
}

function Bar() {}
```

#### 属性查找
* 当查找一个对象的属性时，JavaScript 会向上遍历原型链，直到找到给定名称的属性为止。如果查找到原型链的顶部(Object.prototype)仍然没找到指定属性，就会返回 undefined
> 代码中需要减少属性查找中对原型链的遍历(包括 定义变量缓存，hasOwnProperty() 方法判断等)

#### 原型属性
使用原型属性来创建原型链时，可以把任何类型赋值给它(prototype)。
    * 将原子类型赋给 prototype 的操作将会被忽略
    * 将对象赋值给 prototype，将会动态创建原型链

#### 性能
* 查找原型链上端的属性，会比较消耗性能。试图获取不存在的属性将会遍历整个原型链
* 使用 `for in` 循环遍历对象的属性时，原型链上所有属性都将被访问

#### 扩展内置类型的原型
* 扩展 Object.prototype 或者其他内置类型的原型对象的技术被称之为 monkey patching，并且会破坏封装(Prototype)
* 扩展内置类型的唯一理由是为了和新的 JavaScript 保持一致(Backport:将新的补丁添加到老版本中)。比如 Array.forEach

#### 总结
* 理解原型链的工作方式
* 原型链过长会带来性能问题，如何通过缩短原型链来提高性能
* 不要扩展内置类型的原型，除非为了和新的 JS 引擎兼容

### hasOwnProperty 函数
```
var foo = {
    hasOwnProperty: function() {
        return false;
    },
    bar: 'Here be dragons'
};
foo.hasOwnProperty('bar');
// 使用其他对象的 hasOwnProperty ，并将其上下文设置为 foo
({}).hasOwnProperty.call(foo, 'bar');
```

* 判断一个对象是否包含自定义属性而不是原型链上的属性，需要使用继承自 Object.prototype 的 hasOwnProperty 方法
* hasOwnProperty 是 JS 中唯一一个处理属性但不查找原型链的函数。没有其他方法可以用来排除原型链上的属性，而不是定义在对象自身上的属性
* 如果一个对象存在 hasOwnProperty 属性，可以使用 ({}).hasOwnProperty.call(foo, 'bar')

### for in 循环
* 和 in 操作符一样， for in 循环同样在查找对象属性时遍历原型链上的所有属性
* for in 循环中总是使用 hasOwnProperty 方法过滤