# Eloquent JavaScript - A Modern Introduction to Programming(JavaScript 编程精解)
[来源](http://eloquentjavascript.net/)

## 第1章 JavaScript 基础：值、变量、控制流程
### 1.1 值
* JS 中的6种基本类型:number,string,boolean,object,function,undefined
* number
    - 标准的 JS 数字描述是64位浮点型值，可以包括分数和指数
    - 64 bit 的组成：1 bit 存储数字符号；11 bit 来存储数字的小数点位置；52 bit 表示数字
    - 应该将小数视为近似值而不是精确值
* string
    - string 用于表示文本
    - `+` 表示字符串连接(重载)
* 操作符
    - 一元操作符：`typeof` `-` `!` 等
    - 二元操作符：`+` `-` `*` `/` `%` `>` `<` 等
* boolean
    - 只有 true 和 false 两个值
    - 比较：
    - 布尔逻辑：`与 &&` `或 ||` `非 !`
    - 运算符优先级：`|| < && < (>、== 等) < 其他`
* 表达式与语句
    - 表达式：一段创建值的代码成为表达式。每一个直接写出来的值都是一个表达式
    - 语句：比表达式更大的单位，大多数以分号结束。最简单的语句是由一个表达式及其后面的分号构成
* object
* function
* undefined

### 1.2 变量
* 为了捕获程序中的值，JS 提供了变量(不保存值的话，会即时丢失，因此程序没有任何实际意义)
* 可以把变量想象成触手而不是盒子，它不"容纳"值，而是"抓取"值
* 变量命名规则？
* 关键字？

### 1.3 环境
* 在给定时间存在的变量和变量值的集合叫做环境
* 标准环境提供的很多值都是函数类型的，函数是包含在值中的一段程序
* 执行函数里的代码成为调用或应用，完成这一过程所使用的符号是括号
* 

# Part 1: Language

## Introduction

## 1. Values,Types, and Operators
## 2. Program Structure
## 3. Functions
## 4. Data Structures: Objects and Arrays
## 5. Higher-order Functions
## 6. The Secret Life of Objects
## 7. Project: Electronic Life
## 8. Bugs and Error Handling
## 9. Regular Expressions
## 10. Modules
## 11. Project: A Programming Language