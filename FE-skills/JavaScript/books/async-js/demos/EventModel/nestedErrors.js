setTimeout(function A() {
	setTimeout(function B() {
		setTimeout(function C() {
			throw new Error('Something terrible has happened...');
		}, 0);
	}, 0);
}, 0);