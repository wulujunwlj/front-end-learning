try {
	setTimeout(function() {
		throw new Error('Catch me if you can!');
	}, 0);
} catch(e) {
	console.error(e);
};