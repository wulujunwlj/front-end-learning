onmessage = function(msg) {
	var data = msg.data;
	data.msg = 'Hi from task.js';
	postMessage(data);
}