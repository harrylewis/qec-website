$(function() {

	// mobile nav
	var $navItem = $('.main-nav__link__container');

	// add click handler
	$navItem.click(function(e) {
		// clicked is current
		if ($(e.currentTarget).hasClass('navigation__link__container--current'))
			$(e.currentTarget).siblings()
				.toggleClass('navigation__link__container--is-visible');
	});

});