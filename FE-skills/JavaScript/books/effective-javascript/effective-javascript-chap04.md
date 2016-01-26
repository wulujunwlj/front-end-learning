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

### 37.认识到 this 变量的隐式绑定问题

### 38.在子类的构造函数中调用父类的构造函数

### 39.不要重用父类的属性名

### 40.避免继承标准类

### 41.将原型视为实现细节

### 42.避免使用轻率的猴子补丁