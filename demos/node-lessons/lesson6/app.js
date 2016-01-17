var express = require('express');
var app = express();

app.get('/', function(req, res, next) {
	res.send('Unit Test');
});

app.listen(3000, function(req, res) {
	console.log('Server is listening on port 3000');
});