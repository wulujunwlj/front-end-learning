
var server = require('./server.js');
var routes = require('./routes.js');
var requestHandlers = require('./requestHandlers.js');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(routes.route, handle);