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
		// Group or not
		$('.demo .i-single.i-names .i-inner').html('<p>single child</p>');
		$('.demo .i-g.i-names .i-inner').html('<p>group child</p>');

		// Offset
		$('.demo .i-o-3.i-names .i-inner').html('<p>i-o-3</p>');
		$('.demo .i-o-6.i-names .i-inner').html('<p>i-o-6</p>');
		$('.demo .i-col-6.no-offset.i-names .i-inner').html('<p>no offset used</p>');

		// Flip
		$('.demo .i-md-fl-4.i-names .i-inner').html('<p>i-md-fl-4</p>');
		$('.demo .i-md-fr-8.i-names .i-inner').html('<p>i-md-fr-8</p>');
		$('.demo .i-md-fl-8.i-names .i-inner').html('<p>i-md-fl-8</p>');
		$('.demo .i-md-fr-4.i-names .i-inner').html('<p>i-md-fr-4</p>');
	}
	demoText();

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
	$(function() {
		window.gridNums = new gridNums(jQuery);
	})
})(jQuery);