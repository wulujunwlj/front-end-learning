var exec = require('child_process').exec;
var querystring = require('querystring');

function start(res, postData) {
	console.log('Request handler "start" was called.');

	var body = '' + 
		'<html>' + 
		'<head>' + 
		'</head>' + 
		'<body>' + 
		'<form action="/upload" method="post">' + 
		'<textarea name="text" rows="20" cols="60"></textarea>' + 
		'<input type="submit" value="submit text">' + 
		'</form>' + 
		'</body>' + 
		'</html>';

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(body);
	res.end();
}

function upload(res, postData) {
	console.log('Request handler "upload" was called.');

	res.writeHead(200, { 'Content-Type': 'text/plain' });
	// res.write('You\'ve sent: ', postData);
	res.write('You\'ve send: ', querystring.parse(postData).text);
	res.end();
}

module.exports.start = start;
module.exports.upload = upload;