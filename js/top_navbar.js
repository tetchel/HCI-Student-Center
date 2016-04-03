$('#logout').click(function() {
	alert("Logged out successfully");
	window.location.replace("https://student.uwo.ca/");
});

$(document).ready(function() {
	var pathname 	= location.pathname;
	var last_slash 	= pathname.lastIndexOf("/");
	var curr_page 	= pathname.substring(last_slash+1);

	if(curr_page.localeCompare("index.html") === 0) {
		$('#page_title').html("John Doe's Profile");
	}
	else if(curr_page.localeCompare("account.html") === 0) {
		$('#page_title').html("Finances > My Account");
	}
	else {
		alert("Something went wrong setting the navbar title ");
	}
});
