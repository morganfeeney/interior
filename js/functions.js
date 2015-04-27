$(function(){
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
	function overlayOn(){
		$('.toggle-overlay').on('click', function(e){
			$('body').addClass('overlay-active');
			e.preventDefault();
			if ($('body').hasClass('overlay-active')) {
				gridOverlay();
			} else if (!$('body').hasClass('overlay-active')) {
				$('#gridOverlay').remove();
			}
		});
	}
	overlayOn();
});
