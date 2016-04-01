
var http = require('http');
var url = require('url');

function start(route, handle) {
	function onRequest(req, res) {
		var postData = '';
		var pathname = url.parse(req.url).pathname;
		console.log('Request for ' + pathname + ' received.');

		req.setEncoding('utf8');

		req.addListener('data', function(postDataChunk) {
			console.log('in data...');
			postData += postDataChunk;
			console.log('Received Post data chunk "', postDataChunk, ' ".');
		});

		req.addListener('end', function() {console.log('in end....');
			route(handle, pathname, res, postData);
		});

		// route(handle, pathname, res);
	}

	http.createServer(onRequest).listen(8888);
	console.log('Server has started...');
}

module.exports.start = start;