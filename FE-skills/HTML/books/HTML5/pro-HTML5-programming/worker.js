
function messageHandler(e) {
	postMessage('worker says: ' + e.data + ' too');
}

addEventListener('message', messageHandler, true);

/*
// code for sharedWorker
sharedWorker.port.addEventListener('message', messageHandler, true);
sharedWorker.port.postMessage('Hello HTML5');
*/