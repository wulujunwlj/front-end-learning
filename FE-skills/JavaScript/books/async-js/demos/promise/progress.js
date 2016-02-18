(function($) {
	'use strict';

	$(document).ready(function() {
		var nanowrimoing = $.Deferred();
		var wordGoal = 100;

		nanowrimoing.progress(function(wordCount) {
			var percentComplete = Math.floor(wordCount / wordGoal * 100);
			$('#indicator').text(percentComplete + '% complete...');
		});

		nanowrimoing.done(function() {
			$('#indicator').text('Good job!');
		});

		$('#document').on('keypress', function() {
			// var wordCount = $(this).val().split(/\s+/).length;
			var wordCount = $(this).val().length;
			if(wordCount >= wordGoal) {
				nanowrimoing.resolve();
			};

			nanowrimoing.notify(wordCount);
		})
	});
	
}(jQuery));