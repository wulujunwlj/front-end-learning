var express = require('express');
var app = express();

var favicon = require('serve-favicon');
var path = require('path');

// for socket.io starts
// var server = require('http').createServer(app);
// var io = require('socket.io')(server);

// io.on('connection', function(socket) {console.log('in connection');console.log(socket)
// 	socket.emit('news', { hello: 'world' });
// 	socket.on('my other event', function(data) {
// 		console.log(data);
// 	});
// });
// for socket.io ends

var routesMain = require('./routes/main');
var routesService = require('./routes/service.js');


app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/angular.ico'));
app.use(express.static(path.join(__dirname, '')));
app.use('/', routesMain);
app.use('/service', routesService);

// app.get('/', function(req, res, next) {
// 	res.render('index');
// });

app.listen(3333, function(req, res) {
	console.log('Server is listening on port 3333');
});
// server.listen(app.get('port'), function() {
// 	console.log('Express server listening on port ', app.get('port'));
// })