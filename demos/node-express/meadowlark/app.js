var express = require('express');
var path = require('path');
var app = express();
var index = require('./routes/index');

var jade = require('jade');
var ejs = require('ejs');

app.set('port', process.env.PORT || 3000);

// static 中间件
app.use(express.static(__dirname + '/public'));

// routers setup
app.use('/', index);

// app.engine('ejs', ejs.engine);
// app.set('view engine', ejs);

// template engine setup
app.set('view engine', 'jade');
// app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').__express);

app.listen(app.get('port'), function() {
	console.log('Express started on http://localhost:' + 
		app.get('port') + '; press Ctrl - C to terminate...');
});