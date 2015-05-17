'use strict';

var tasks = [];

for(var i=0; i<3; i++) {
	tasks.push(function() {
		console.log('>>>' + i);
	});
};

console.log('end for.');

for(var j=0; j<tasks.length; j++) {
	tasks[j]();
}