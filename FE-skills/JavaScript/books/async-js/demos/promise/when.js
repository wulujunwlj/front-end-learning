(function($) {
	'use strict';

	$(document).ready(function() {
		
		var gameReadying = $.when(tutorialPromise, gameLoadedPromise);

		gameReadying.done(startGame);
	});
}(jQuery))