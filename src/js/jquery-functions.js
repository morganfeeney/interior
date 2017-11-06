(function(jQuery) {
	function gridOverlay(){
		$('#gridOverlay').remove();
		$('body').append(
			'<div class="grid-overlay">'+
			'</div>'
		);
		for (var overlayGridCol = 0; overlayGridCol < 12; overlayGridCol++) {
			$('.grid-overlay').append(
				'<div></div>'
			);
		}
	}
	function overlayToggle(){
		$('body').on('click', function(e){
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

	var gridNums = function($){
		$('.i-nums [class*=i-col-]').not('.i-g').each(function() {
			var $string = $(this).attr('class');
			var $stringSplitSpace = $string.split(' ');
			if ($stringSplitSpace.length >= 2) {
				var $mqClass = $stringSplitSpace[1].split('-');
				$(this,'.i-inner').html(
					'<div class="i-inner">'+
						'<p>'+$mqClass[3]+'</p>'+
					'</div>'
				);
			}
			if ($stringSplitSpace.length <= 1) {
				var $noMqClass = $stringSplitSpace[0].split('-');
				$(this,'.i-inner').html(
					'<div class="i-inner">'+
						'<p>'+$noMqClass[2]+'</p>'+
					'</div>'
				);
			}
		});
	}
})(jQuery);
