
第1章  JavaScript 的编程环境和模型
-----

* JS 中的数学计算包括简单计算符(+,-,*,/,%)和数学库(Math)
* JS 的 switch 语句中，用来判断的表达式可以是任意类型，而不仅限于整型
* JS 提供了两种定义函数的方式，一种有返回值，一种没有返回值(这种函数有时也叫子程或 void 函数)
* JS 中，函数的参数传递方式都是按值传递，没有按引用传递的参数。但是 JS 中有保存引用的对象，比如数组
* 变量的作用域是指一个变量在程序中的哪些地方可以访问
    - JS 中的变量作用域被定义为函数作用域
    - JS 中没有块级作用域
    - 变量的值在定义该变量的函数内是可见的，并且定义在该函数内的嵌套函数中也可以访问
    - 定义变量时不使用关键字 var，则自动拥有了全局作用域
* 递归：当一个函数被递归调用，在递归没有完成时，函数的计算结果暂时被挂起
* 对象创建方式：定义包含属性和方法声明的构造函数，并在构造函数后紧跟方法的定义

第2章  数组
-----
* JS 中对数组的定义