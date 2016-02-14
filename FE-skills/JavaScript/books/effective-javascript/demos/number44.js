
function C() {}

C.prototype = null;

var o = new C();
console.log(Object.getPrototypeOf(o) === null);
console.log(Object.getPrototypeOf(o) === Object.prototype);

var x = Object.create(null);
console.log(Object.getPrototypeOf(o) === null);

var x = {
	__proto_: null
};
console.log(x instanceof Object);