var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var routesMain = require('./routes/main');

var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/angular.ico'));
app.use(express.static(path.join(__dirname, '')));
app.use('/', routesMain);

// app.get('/', function(req, res, next) {
// 	res.render('index');
// });

app.listen(3333, function(req, res) {
	console.log('Server is listening on port 3333');
});