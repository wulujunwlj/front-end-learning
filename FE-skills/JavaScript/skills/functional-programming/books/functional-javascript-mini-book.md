## Functional JavaScript Mini Book

### Preface

1.选用的函数库[Eweda](https://github.com/CrossEye/eweda)
2.包含一些 ECMAScript6 的新特性

### Lambda

1.定义   

    lambda 包括一条变换规则和一条函数定义方式，Lambda演算之通用在于，任何一个可计算函数都能用这种形式来表达和求值。因而，它是等价于图灵机的。   
    即：lambda 其实就是 x 到 y 的映射关系。
2.在大多数支持函数式的编程语言中，等价于匿名函数，被称为 lambda 表达式。
3.匿名函数在程序中的作用是可以作为参数传递给高阶函数，或者作为闭包被返回。但是匿名函数并不是原生的 lambda 算子，因为匿名函数也可以接受多个参数
4.接受一个参数返回另一个接受第二个参数的函数叫柯里化。
5.JavaScript 中的 lambda 表达式：   

* 箭头函数(arrow function):arrow function 里面的 this 会自动 capture 外层函数的 this 值   
([param][, params]) => { statement } or param => expression
* JavaScript 的匿名函数(anonymous function)
	支持匿名函数，就意味着函数可以作为一等公民，可以被当做参数，也可以被当做返回值。
	var squareA = function(x) { return x * x; }


