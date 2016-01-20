var express = require('express');
var app = express();

app.get('/', function(req, res, next) {
	res.render('index');
});

app.listen(3333, function(req, res) {
	console.log('Server is listening on port 3000');
});