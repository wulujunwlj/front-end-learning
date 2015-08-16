'use strict';

$(document).ready(function($) {

	var selectedArr = [null, null, null, null];

	/**
	 * [addSelectedItem description]: 已选项里面增加当前点击项
	 * @param {[type]} selected [已选项]
	 * @param {[type]} html     [需要显示的html片段]
	 * @param {[type]} index    [在所有待显示项的第几个]
	 * @param {[type]} allCount [所有待显示项的个数]
	 */
	var addSelectedItem = function(html, selectedArr, index, allCount) {
		var iLen = selectedArr.length;
		selectedArr[index] = html;
	};

	// add selected class on click item
	$('.options > a').on('click', function() {
		// var $this = $(this);
		// var $father = $this.parent('.options');

		// $.each($father.children(), function(index, el) {
		// 	$(el).removeClass('selected');
		// });

		// $this.addClass('selected');
		// 
		var $this = $(this);
		$.each($this.siblings('a'), function(index, el) {
			if($(el).hasClass('selected')) {
				$(el).removeClass('selected');
			}
		});

		$this.addClass('selected');

		addSelectedItem($this.text(), selectedArr, 0);

		var $selectedFilters = $('.selected-filters');
	});

});