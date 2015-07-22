
## JavaScript 秘密花园 笔记
### from:http://bonsaiden.github.io/JavaScript-Garden/zh/   

#### JavaScript 中所有变量都是对象，处了两个例外：null 和 undefined   
-------------
	可调用 toString() 方法来检查。   
	思考：2.toString()/2..toString()

JavaScript 的对象可以作为 哈希表 使用，主要用来保存命名的键与值的对应关系。   
访问属性的方法：点操作符或者中括号操作符，两种语法是等价的。   
中括号操作符的优点：   
* 动态设置属性[可使用变量]   
* 属性名不是一个有效的变量名[属性名包含空格，或者属性名包含关键字]   

删除属性：delete 操作符。设置属性为 undefined 或者 null 并不能真正删除属性，仅仅是移除了属性和值的关联。   
思考：示例？    

#### 原型：prototype   
-----------------

属性查找：原型链(prototype chain)    [原型链的遍历查找机制？]     

查找机制：当查找一个对象的属性时，JavaScript 会向上遍历原型链，直到找到给定名称的属性为止；当查找到达原型链顶部-Object.prototype-仍然没有找到指定属性，就会返回 undefined.   

常用方案：
* 遇到全局方法/属性时，或者多重对象嵌套时，考虑用临时变量暂存对应方法/属性，以减少原型链回溯的开销。[用到超过两次的情况就可以进行临时变量缓存]
* 使用 for in 循环遍历对象的属性时，原型链上的所有属性都将被访问。[数组用index进行遍历，不要采用 for in；hasOwnProperty(Angular 的 forEach)； 尽量不要在内置对象的 prototype 上添加原型方法(monkey patching)]   
* 扩展内置类型的唯一理由是为了和新的 JavaScript 保持一致。

#### 函数
--------------