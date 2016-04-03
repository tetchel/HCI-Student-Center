$(document).ready(function() {
	var pathname 	= location.pathname;
	var last_slash 	= pathname.lastIndexOf("/");
	var curr_page 	= pathname.substring(last_slash+1);

    var backg_color="#3D1573";
    var text_color="#FFFFFF";

    if(curr_page.localeCompare("index.html") === 0) {        
        var myprofile = $('#my_profile')
        myprofile.css({'background-color': backg_color});
        myprofile.children().css({'color': text_color});   
    }
	else if(curr_page.localeCompare("account.html") === 0) {
        var myaccount = $('#my_account');
        myaccount.css({'background-color': backg_color});
        myaccount.children().css({'color': text_color});
    }
    else {
        alert("Something went wrong configuring the left navbar");
    }
});
