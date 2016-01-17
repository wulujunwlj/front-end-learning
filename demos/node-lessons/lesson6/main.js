
var fibonacci = function(n) {
	if(typeof n !== 'number') {
		throw new Error('n should should be a number');
	}
	if(n < 0) {
		throw new Error('n should greater than 0');
	}
	if(n > 10) {
		throw new Error('n should lower or equal than 10');
	}
	if(n === 0) {
		return 0;
	}
	if(n === 1) {
		return 1;
	}

	return fibonacci(n - 1) + fibonacci(n - 2);
};

if(require.main === module) {
	// 如果直接执行 main.js 则进入此处
	// 如果 main.js 被其他文件 require，则此处不执行
	var n = Number(process.argv[2]);
	console.log('fibonacci(' + n + ') is ', fibonacci(n));
}

exports.fibonacci = fibonacci;