// Lightbox functionality for image gallery

(function($) {

	// Open lightbox when clicking on an image
	$(document).on('click', '.image img', function(e) {
		e.preventDefault();
		var imageSrc = $(this).attr('src');
		var altText = $(this).attr('alt') || '';
		
		$('#lightbox-img').attr('src', imageSrc);
		$('#lightbox-caption').text(altText);
		$('#lightbox').addClass('active');
	});

	// Close lightbox when clicking the close button
	$('.lightbox-close').on('click', function() {
		$('#lightbox').removeClass('active');
	});

	// Close lightbox when clicking outside the image
	$('#lightbox').on('click', function(e) {
		if ($(e.target).attr('id') === 'lightbox') {
			$('#lightbox').removeClass('active');
		}
	});

	// Close lightbox with Escape key
	$(document).on('keydown', function(e) {
		if (e.key === 'Escape') {
			$('#lightbox').removeClass('active');
		}
	});

})(jQuery);
