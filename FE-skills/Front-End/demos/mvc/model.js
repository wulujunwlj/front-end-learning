
function Model(value) {
	this._value = typeof value === 'undefined' ? '' : value;
	this._listeners = [];
}

/**
 * step1:set 方法设值，watch 方法监控变化
 * @param {[type]} value [description]
 */
Model.prototype.set = function(value) {
	var self = this;

	self._value = value;

	setTimeout(function() {
		self._listeners.forEach(function(listener) {
			listener.call(self, value);
		});
	});
};

Model.prototype.watch = function(listener) {
	this._listeners.push(listener);
};

/**
 * step2:增加 bindView 方法，用于更新 view
 * @param  {[type]} node [description]
 * @return {[type]}      [description]
 */
Model.prototype.bindView = function(node) {
	this.watch(function(value) {
		node.innerHTML = value;
	});
};