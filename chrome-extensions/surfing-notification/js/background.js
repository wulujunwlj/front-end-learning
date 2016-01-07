(function() {
	'use strict';
	console.log('background.js');

	chrome.tabs.onCreated.addListener(function(tab) {
		console.log('onCreated: ', tab);
	});

	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
		console.log('onUpdated:', tabId, changeInfo, tab);
	});

	chrome.tabs.onMoved.addListener(function(tabId, moveInfo) {
		console.log('onMoved:', tabId, moveInfo);
	})

	chrome.tabs.onRemoved.addListener(function(tab) {
		console.log('onRemoved: ', tab);
	});

	chrome.tabs.onActivated.addListener(function(activeInfo) {
		console.log('onActivated: ', activeInfo);
	})

	// var notification = webkitNotifications.createNotification('icon48.png', 'Notification', 'Hello');

	// notification.show();
	
	/*
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
	*/
})();