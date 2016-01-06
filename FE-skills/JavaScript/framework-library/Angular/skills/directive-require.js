
(function() {
	angular.module('demo', []);
})();

(function(app) {
	'use strict';

	function tabs() {
		return {
			restrict: 'E',
			scope: {},
			transclude: true,
			controller: function() {
				var self = this;

				this.tabs = [];

				this.addTab = function addTab(tab) {
					self.tabs.push(tab);
				}
			},
			controllerAs: 'tabs',
			template: '' + 
				'<div class="tabs">' + 
					'<ul class="tabs-list"></ul>' +
					'<div class="tab-content" ng-transclude>' + 
				'</div>'
		};
	}

	function tab() {
		return {
			restrict: 'E',
			scope: {
				label: '@'
			},
			require: '^tabs',
			transclude: true,
			template: '' + 
				'<div class="tabs-content" ng-if="tab.selected">' + 
					'<div ng-transclude></div>' + 
				'</div>',
			link: function(scope, elem, attrs, ctrl) {
				// 
			}
		}
	}

	app
		.directive('tab', tab)
		.directive('tabs', tabs);
})(angular.module('demo'));