
var dict = {};
console.log('alice' in dict);
console.log('bob' in dict);
console.log('chris' in dict);
console.log('toString' in dict);
console.log('valueOf' in dict);

console.log(dict.hasOwnProperty('alice'));
console.log(dict.hasOwnProperty('toString'));
console.log(dict.hasOwnProperty('valueOf'));


