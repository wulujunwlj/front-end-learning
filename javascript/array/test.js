'use strict';

/*
 当需要遍历数组元素的时候，应使用for循环或者数组对象的内置迭代函数（如forEach、map等），而不是for…in循环
 for…in 循环会遍历数组对象的原型链中所有的可枚举属性。 --> hasOwnProperty
 for…in 循环可能以任意顺序来遍历对象的属性
*/

// var tMinus = {
// 	two: 'Two',
// 	one: 'One',
// 	zero: 'Blast off!'
// };

Array.prototype.voice = 'James Earl Jones';

var tMinus = [
	'Two',
	'One',
	'Blast off!'
];

var countdown = '';

tMinus.announcer = 'Morgan Freeman';

for(var step in tMinus) {
	if(tMinus.hasOwnProperty(step)) {
		countdown += tMinus[step] + '\n';
	}
}

console.log(countdown);