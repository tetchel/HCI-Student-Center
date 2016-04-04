$('#logout').click(function() {
	alert("Logged out successfully");
	window.location.replace("https://student.uwo.ca/");
});

$(document).ready(function() {
	var page = getPage();

	$('#my_profile_top').html(first_name + "'s Profile");

	if(page === pagesEnum.INDEX) {
		$('#page_title').html("Stu Dent's Profile");
	}
	else if(page === pagesEnum.ACCOUNT) {
		$('#page_title').html("Finances");
	}
	else if(page === pagesEnum.EXTERNAL) {
        $('#page_title').html("External Links");
    }
	else {
		alert("Something went wrong setting the navbar title ");
	}
});
