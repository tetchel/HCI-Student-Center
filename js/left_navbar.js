$(document).ready(function() {
	var pathname 	= location.pathname;
	var last_slash 	= pathname.lastIndexOf("/");
	var curr_page 	= pathname.substring(last_slash+1);

    if(curr_page.localeCompare("index.html") === 0) {
        $('#my_profile').css({'background-color': "#00FF00"});
    }
	else if(curr_page.localeCompare("account.html") === 0) {
        $('#my_account').css({'background-color': "#00FF00"});
    }
    else{
        alert("Something went wrong configuring the left navbar");
    }
});
