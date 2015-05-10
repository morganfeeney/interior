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

// Feature detection using Modernizr.js to test for presence of media queries support in browser

function featureDetectMediaQuery(){
	if (!(Modernizr.mq('only all'))) {
		document.querySelector('html').classList.add('no-mediaqueries');
	} else if ((Modernizr.mq('only all'))) {
		document.querySelector('html').classList.add('mediaqueries');
	}
}

featureDetectMediaQuery();