# Effective JavaScript:68 Specific Ways to Harness the Power of JavaScript

## 第4章 对象和原型
* 对象是 JS 中的基本数据结构，表示字符串与值的隐射
* JS 支持继承，即通过动态代理机制重用代码或数据

### 30.理解 prototype、getPropertyOf 和 __proto__ 之间的不同
```
function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
}

User.prototype.toString = function() {
    return '[User ' + this.name + ']';
}
User.prototype.checkPassword = function() {
    return hash(password) === this.password;
}

var u = new User('sfalken', '0sakdgjsaldgjsaldgjsadgsadg);
Object.getPrototypeOf(u) === User.prototype;    // true
u.__proto__ === User.prototype;                 // true
```

* 原型相关的访问器：
    - C.prototype 用于建立由 new C() 创建的对象的原型
    - Object.getPrototypeOf(obj) 是 ES5 中用来获取 obj 对象的原型对象的标准方法
    - obj.__proto__ 是获取 obj 对象的原型对象的非标准方法
* 构造函数的 prototype 属性用来设置新实例的原型关系。ES5 中的函数 Object.getPrototypeOf() 可以用于检索现有对象的原型
* JS 中的类本质上是一个构造函数与一个用于在该类实例间共享方法的原型对象的结合

### 31.使用 Object.getPrototypeOf 函数而不要使用 __proto__ 属性
* 在一些环境中，__prototype__ 属性继承自 Object.prototype，因此，拥有 null 原型的对象没有这个特殊的 __proto__ 属性
* 在支持 __proto__ 属性的非 ES5 环境中实现 Object.getPropertyOf() 函数
```
if(typeof Object.getPropertyOf === 'undefined') {
    Object.getPropertyOf = function(obj) {
        var t = typeof obj;
        if(!obj || (t !== 'object' && t !== 'function')) {
            throw new TypeError('Not an object');
        }

        return obj.__proto__;
    }
}
```

### 32.始终不要修改 __proto__ 属性
* __proto__ 属性很特殊，提供了 Object.getPropertyOf() 方法所不具备的额外能力，即修改对象原型链接的能力
* 避免修改 __proto__ 属性的原因：
    - 可移植性问题。并不是所有平台都支持改变对象原型的特性
    - 性能问题。更改了对象的内部结构时将会导致引擎的一些优化失败
    - 保持行为的可预测性(最大的原因)。会蒋欢对象的整个继承层次结构
* ES5 中的 Object.create 函数用来创建一个具有自定义原型链的新对象

### 33.使构造函数与 new 操作符无关

### 34.在原型中存储方法

### 35.使用闭包存储私有数据

### 36.只将实例状态存储在实例对象中
* 原型对象与其实例之间是一对多的关系
* 共享有状态的数据可能会导致问题。通常在一个类的多个实例之间共享方法是安全的，因为方法通常是无状态的，这不同于通过 this 来引用实例状态
* 一般情况下，任何不可变的数据可以被存储在原型中从而被安全的共享。在原型中最常见的数据是方法，而每个实例的状态都存储在实例对象中

### 37.认识到 this 变量的隐式绑定问题
```
function CSVReader(separators) {
    this.separators = separators || [','];
    this.regexp = new RegExp(this.separators.map(function(sep) {
        return '\\' + sep[0];
    }).join('|'));
}

CSVReader.prototype.read = function(str) {
    var lines = str.trim().split('\n');

    return lines.map(function(line) {
        return line.split(this.regexp);
    });
}

var reader = new CSVReader();
reader.read('a, b, c\nd, e, f\n');
```
* CSV(逗号分隔型取值)文件格式是一种表格数据的简单文本表示
* 

### 38.在子类的构造函数中调用父类的构造函数

### 39.不要重用父类的属性名

### 40.避免继承标准类

### 41.将原型视为实现细节
* 对象是接口，原型是实现

### 42.避免使用轻率的猴子补丁
* 猴子补丁(monkey-patching)：由于对象共享原型，因此每个对象都可以增加、删除或修改原型的属性。这个有争议的实践通常被称为猴子补丁
* 当多个库以不兼容的方式给同一个原型打猴子补丁时，会出现问题(不同库的不同实现)
* 处理办法：
    - 任意修改共享原型的程序库都应当清晰的记录其修改
    - 将修改置于一个导出函数中，使猴子补丁称为可选的
* 猴子补丁的一种可靠而且有价值的使用场景:polyfill