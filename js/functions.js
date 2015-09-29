(function(jQuery) {
	function gridOverlay(){
		$('#gridOverlay').remove();
		$('body').append(
			'<div id="gridOverlay" class="grid grid-outer overlay">'+
			'</div>'
		);
		for (var overlayGridCol = 0; overlayGridCol < 12; overlayGridCol++) {
			$('#gridOverlay').append(
				'<div class="grid-col-1">'+
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
		$('.demo .col-single.with-names .inner').html('<p>single child</p>');
		$('.demo .col-group.with-names .inner').html('<p>group child</p>');

		//Offset
		$('.demo .grid-col-push-3.with-names .inner').html('<p>grid-col-push-3</p>');
		$('.demo .grid-col-push-6.with-names .inner').html('<p>grid-col-push-6</p>');
		$('.demo .grid-col-6.no-offset.with-names .inner').html('<p>no offset used</p>');

		// Flipped
		$('.demo .grid-col-flip-left-4.with-names .inner').html('<p>grid-col-flip-left-4</p>');
		$('.demo .grid-col-flip-right-8.with-names .inner').html('<p>grid-col-flip-right-8</p>');
		$('.demo .grid-col-flip-left-8.with-names .inner').html('<p>grid-col-flip-left-8</p>');
		$('.demo .grid-col-flip-right-4.with-names .inner').html('<p>grid-col-flip-right-4</p>');
	}
	demoText();

	var gridNums = function($){
		$('.grid-nums [class*=grid-col-]').not('.col-group').each(function() {
			var $string = $(this).attr('class');
			var $stringSplit = $string.split('-');
			$(this,'.inner').html(
				'<div class="inner">'+
					'<p>'+$stringSplit[2]+'</p>'+
				'</div>'
			);
		});
	}
	$(function() {
		window.gridNums = new gridNums(jQuery);
	})
})(jQuery);