
var arr = [1, 'abc', 'xyz', 'aaa'];

for (var i = 0; i < arr.length; i++) {
	console.log(i, arr[i]);
}

for (var index in arr) {
	console.log(index, arr[index]);
}

arr.forEach(function(value, index) {
	console.log(index, value);
});

for (var index of arr) {
	console.log(index);
}

for (var chr of 'abcdefg') {
	console.log(chr);
}

var words = ['hello', 'world', 'Sunday', 'world', 'word'];
var uniqueWords = new Set(words);

console.log(uniqueWords);

var obj = {
	name: 'abc',
	age: 5
}
for (var key of Object.keys(obj)) {
	console.log(key, ':', obj[key]);
}