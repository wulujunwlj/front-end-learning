# JavaScript 秘密花园

[来源](http://bonsaiden.github.io/JavaScript-Garden/zh/#array)

## 数组

### 数组遍历和属性
* 不用 for in 循环遍历数组的原因：for in 循环会枚举原型链上的所有属性，唯一过滤这些属性的方式是使用 hasOwnProperty 函数，因此会比普通的 for 循环慢上好多倍

#### 遍历
* 推荐使用普通的 for 循环并缓存数组的 length 属性
```
var list = [];
for(var i=0; i<10000; i++) {
    list.push(i);
}
var date1 = new Date();
console.log(date1);
for(var i=0; i<list.length; i++) {
    // 
}
console.log(new Date() - date1);
```

### Array 构造函数
```
[1, 2, 3];
new Array(1, 3, 3);
[3];
new Array(3);
new Array(3);

// 使用构造函数传入数组长度时的逻辑
var arr = new Array(5);
arr.length;     // 5
arr[2];         // undefined
3 in arr;       // false:数组还没有生成
arr.join('#');  // ####
```

* 由于 Array 的构造函数在如何处理参数时有点模棱两可，因此总是推荐使用数组的字面量语法 - [] 来创建数组
* 当只有一个参数传递到构造函数，并且这个参数是数字时，构造函数会返回一个 length 属性被设置为此参数的空数组。注意：`此时只有 length 属性被设置真正的数组并没有生成`