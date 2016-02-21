
self.addEventListener('message', function(e) {
	self.postMessage('worker ' + e.data);
})