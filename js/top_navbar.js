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
		$('#page_title').html("My Finances");
	}
	else if(page === pagesEnum.EXTERNAL) {
        $('#page_title').html("External Links");
    }
	else if(page === pagesEnum.RECORDS) {        
        $('#page_title').html("My Records");
    }
    else if(page === pagesEnum.COURSES) {        
        $('#page_title').html("Courses &amp; Enrollment");
    }
    else if(page === pagesEnum.ITR) {        
        $('#page_title').html("Intent to Register");
    }
    else if(page === pagesEnum.LETTERS) {        
        $('#page_title').html("Letters &amp; Transcripts ");
    }
    else if(page === pagesEnum.GS) {        
        $('#page_title').html("Graduate Studies");
    }
    else if(page === pagesEnum.TAXES) {        
        $('#page_title').html("Tax Returns");
    }
	else {
		alert("Something went wrong setting the navbar title ");
	}
});
