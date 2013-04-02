// window.addEventListener ('popstate', setActiveNav(link.href));

function setActiveNav(next){
	//vars
	var nav = next + '-nav';
	var page = next + '-page';

	// change classes for nav bar items
	var navItems = document.getElementsByClassName('nav-item');
	for (var i = 0; i < navItems.length; i++) {
		if (navItems[i].getAttribute('id') == nav){
			navItems[i].setAttribute('class', 'nav-item active nav-fade');
		} else {
			navItems[i].setAttribute('class', 'nav-item nav-fade');
		}
	};

	//set active one to transition
	var activePage = document.getElementsByClassName('page-item active page-fade')[0]; //will be the only one
	activePage.setAttribute('class', 'page-item transition page-fade');

	//after 250ms, make transition into normal, and make the next page the transition one
	setTimeout( function() {
		document.getElementsByClassName('page-item transition page-fade')[0].setAttribute('class', 'page-item page-fade');
		document.getElementById(page).setAttribute('class', 'page-item transition page-fade');
	}, 250);

	setTimeout( function() {
		document.getElementById(page).setAttribute('class', 'page-item active page-fade');
	}, 300);

	//push new window state
	// history.pushState(null, null, nav);
};

