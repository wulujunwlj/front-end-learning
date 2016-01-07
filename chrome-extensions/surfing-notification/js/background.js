(function() {
	'use strict';
	console.log('background.js');
	// var notification = webkitNotifications.createNotification('icon48.png', 'Notification', 'Hello');

	// notification.show();
	
	// tabs
	chrome.tabs.get(tabId, function(tab) {
		console.log(tab);
	});

	chrome.tabs.getCurrent(function(tab) {
		console.log(tab);
	});

	chrome.tabs.query({
		active: true
	}, function(tabsArr) {
		console.log(tabsArr)
	});
})();