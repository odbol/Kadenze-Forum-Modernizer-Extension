jQuery(function ($) {

var links = 'a.forums-index__thread_info_title',
	
	currentOpenHref = null,
	currentOpenFrame = null,

	closeCurrent = function () {
		if (currentOpenFrame == null) return;

		var oldFrame = currentOpenFrame
			.removeClass('inliner_opened');

		setTimeout(oldFrame.remove, 1000);

		currentOpenFrame = null;
	},

	openPostIn = function (href, el) {

		closeCurrent();

		// only open if they're not clicking the link again to close it...
		if (currentOpenHref !== href) {

			var $el = $(el),
				holder = $el.parents('.forums-index__thread'),
				wrapper = $('<div class="inliner_forum_wrapper"><iframe src="' + 
					href + '" /></div>');

			wrapper
				.insertAfter(holder)
				.addClass('inliner_opened');

			currentOpenFrame = wrapper;
			currentOpenHref = href;

			// scroll to top if needed,
			// AFTER height has animated!
			setTimeout(function () {
					window.scrollTo(0, $el.offset().top);
				},
				500);
		}
		else {
			currentOpenHref = null;
		}
	};


	$('.forums-index__thread-list')
		.on('click', links, function () {

			openPostIn(this.href, this);

			return false;
		});

});