
var fs = require('fs');
process.chdir('recipes');

var concatenation = '';

fs.readdirSync('.')
	.filter(function(filename) {
		return fs.statSync(filename).isFile();
	})
	.forEach(function(filename) {
		concatenation += fs.readFileSync(filename, 'utf8');
	});

	console.log(concatenation);