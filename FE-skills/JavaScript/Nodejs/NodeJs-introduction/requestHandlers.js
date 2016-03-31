
function start() {
	console.log('Request handler "start" was called.');
}

function upload() {
	console.log('Request handler "upload" was called.');
}

module.exports.start = start;
module.exports.upload = upload;