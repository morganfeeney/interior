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
});