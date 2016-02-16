
/**
 * step3:增加 controller 处理业务逻辑
 * @param {Function} callback [description]
 */
function Controller(callback) {
	var models = {};
	var views = document.querySelectorAll('[bind]');

	views = Array.prototype.slice.call(views, 0);
	views.forEach(function(view) {
		var modelName = view.getAttribute('bind');
		models[modelName] = models[modelName] || new Model();
		models[modelName].bindView(view);
	});

	callback.call(this, models);
}