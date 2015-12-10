
## JavaScript Garden

[JavaScript 秘密花园](http://bonsaiden.github.io/JavaScript-Garden/zh/)

### 对象
---
#### 对象使用和属性
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
---

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

