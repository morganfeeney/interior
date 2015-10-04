(function(jQuery) {
	function gridOverlay(){
		$('#gridOverlay').remove();
		$('body').append(
			'<div id="gridOverlay" class="grid i-outer overlay">'+
			'</div>'
		);
		for (var overlayGridCol = 0; overlayGridCol < 12; overlayGridCol++) {
			$('#gridOverlay').append(
				'<div class="i-col-1">'+
					'<div class="inner">'+
					'</div>'+
				'</div>'
			);
		}
	}
	function overlayToggle(){
		$('.toggle-overlay').on('click', function(e){
			if (!$('body').hasClass('overlay-active')) {
				$('body').addClass('overlay-active');
				gridOverlay();
			} else if ($('body').hasClass('overlay-active')) {
				$('body').removeClass('overlay-active');
				$('#gridOverlay').remove();
			}
			e.preventDefault();
		});
	}
	overlayToggle();
	
	function demoText(){
		// Grouped or not?
		$('.demo .col-single.i-names .inner').html('<p>single child</p>');
		$('.demo .col-group.i-names .inner').html('<p>group child</p>');

		//Offset
		$('.demo .i-col-p-3.i-names .inner').html('<p>i-col-p-3</p>');
		$('.demo .i-col-p-6.i-names .inner').html('<p>i-col-p-6</p>');
		$('.demo .i-col-6.no-offset.i-names .inner').html('<p>no offset used</p>');

		// fped
		$('.demo .i-col-f-l-4.i-names .inner').html('<p>i-col-f-l-4</p>');
		$('.demo .i-col-f-r-8.i-names .inner').html('<p>i-col-f-r-8</p>');
		$('.demo .i-col-f-l-8.i-names .inner').html('<p>i-col-f-l-8</p>');
		$('.demo .i-col-f-r-4.i-names .inner').html('<p>i-col-f-r-4</p>');
	}
	demoText();

	var gridNums = function($){
		$('.i-nums [class*=i-col-]').not('.col-group').each(function() {
			var $string = $(this).attr('class');
			var $stringSplitSpace = $string.split(' ');
			if ($stringSplitSpace.length >= 2) {
				var $mqClass = $stringSplitSpace[1].split('-');
				$(this,'.inner').html(
					'<div class="inner">'+
						'<p>'+$mqClass[3]+'</p>'+
					'</div>'	
				);
			}
			if ($stringSplitSpace.length <= 1) {
				var $noMqClass = $stringSplitSpace[0].split('-');
				$(this,'.inner').html(
					'<div class="inner">'+
						'<p>'+$noMqClass[2]+'</p>'+
					'</div>'	
				);
			}
		});
	}
	$(function() {
		window.gridNums = new gridNums(jQuery);
	})
})(jQuery);