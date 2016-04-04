$('#logout').click(function() {
	alert("Logged out successfully");
	window.location.replace("https://student.uwo.ca/");
});

$(document).ready(function() {
	var page = SCCommon.getPage();

	if(page === 0) {
		$('#page_title').html("John Doe's Profile");
	}
	else if(page === 1) {
		$('#page_title').html("Finances");
	}
	else if(page === 2) {
        $('#page_title').html("External Links");
    }
	else {
		alert("Something went wrong setting the navbar title ");
	}
});
