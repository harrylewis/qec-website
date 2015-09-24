$(function() {

	// mobile nav
	var $navItem = $('.navigation__link__container');

	// add click handler
	$navItem.click(function(e) {
		// clicked is current
		if ($(e.currentTarget).hasClass('navigation__link__container--current'))
			$(e.currentTarget).siblings()
				.toggleClass('navigation__link__container--is-visible');
	});

	function mobileNav(target) {
		alert('')
	}

});