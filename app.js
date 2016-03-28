$(document).ready(function() {
	//load navbar code, then callback when it's done
	$('#top_navbar').load("top_navbar.html", set_navbar_title);
	$('#leftnav_wrapper').load("left_navbar.html");
});

function set_navbar_title() {
	var pathname 	= location.pathname;
	var last_slash 	= pathname.lastIndexOf("/");
	var curr_page 	= pathname.substring(last_slash+1);

	if(curr_page.localeCompare("index.html") === 0) {
		$('#page_title').html("Fake Home Page");
	}
	else if(curr_page.localeCompare("profile.html") === 0) {
		$('#page_title').html("John Doe's Profile");
	}
	else {
		alert("Something went wrong setting the navbar title ");
	}
}