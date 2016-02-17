
var pinyin = require('pinyin');

console.log(pinyin('中心'));

console.log(pinyin('中心', {
	heteronym: true
}));

console.log(pinyin('中心', {
	heteronym: true,
	segment: true
}));

console.log(pinyin('中心', {
	style: pinyin.STYLE_INITIALS,
	heteronym: true
}));