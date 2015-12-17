
var worker = new Worker('task.js');
worker.postMessage({
	id: 1,
	msg: 'Hello World!'
});
worker.onmessage = function(msg) {
	var data = msg.data;
	console.log(JSON.stringify(data));
	worker.terminate();
};
worker.onerror = function(err) {
	console.log(err);
};