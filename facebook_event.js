//$.ready(function ($)

var FACEBOOK_DIV_TO_HIDE = '.userContentWrapper .userContent';

function checkPosts() {
	var crap = jQuery(FACEBOOK_DIV_TO_HIDE).next();


	crap.addClass('memefree_hidden');
}


// Since facebook uses the history API, I have to check for facebook event URLs
setInterval(checkPosts, 1000);