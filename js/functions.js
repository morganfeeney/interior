$(function(){
	function gridOverlay(){
		$('#gridOverlay').remove();
		$('body').append(
			'<div id="gridOverlay" class="grid grid-gutter-outer overlay">'+
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
		$('.demo .col-single.with-names .inner').append('<p>single child</p>');
		$('.demo .col-group.with-names .inner').append('<p>group child</p>');

		// Flipped
		$('.demo .grid-col-flip-left-4.with-names .inner').append('<p>grid-col-flip-left-4</p>');
		$('.demo .grid-col-flip-right-8.with-names .inner').append('<p>grid-col-flip-right-8</p>');

		//Offset
		$('.demo .grid-col-push-3.with-names .inner').append('<p>grid-col-push-3</p>');
		$('.demo .grid-col-push-6.with-names .inner').append('<p>grid-col-push-6</p>');
	}
	demoText();
});