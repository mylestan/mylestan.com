function setActiveNav(page){
	// change classes for nav bar items
	var navItems = document.getElementsByClassName('nav-item');
	for (var i = 0; i < navItems.length; i++) {
		if (navItems[i].getAttribute('id') == page){
			navItems[i].setAttribute('class', 'nav-item active nav-fade');
		} else {
			navItems[i].setAttribute('class', 'nav-item nav-fade');
		}
	};

	//show the appropriate page
	var pageItems = document.getElementsByClassName('page-item');
	for (var i = 0; i < pageItems.length; i++) {
		pageItems[i].setAttribute('class', 'page-item page-fade');
	};

	setTimeout( function() {
		for (var i = 0; i < pageItems.length; i++) {
			if (pageItems[i].getAttribute('id') == page){
				pageItems[i].setAttribute('class', 'page-item active page-fade');
			}
		};
	}, 250);
};
