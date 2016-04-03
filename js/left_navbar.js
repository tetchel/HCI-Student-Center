$(document).ready(function() {
	var pathname 	= location.pathname;
	var last_slash 	= pathname.lastIndexOf("/");
	var curr_page 	= pathname.substring(last_slash+1);

    //highlight the current page in the left navbar
    var to_highlight;

    var backg_color="#3D1573";
    var text_color="#FFFFFF";

    //each to_highlight has the same background but different children
    if(curr_page.localeCompare("index.html") === 0 || (!curr_page && 0 === curr_page.length)) {        
        to_highlight = $('#my_profile');
        to_highlight.children().css({'color': text_color});   
    }
	else if(curr_page.localeCompare("account.html") === 0) {
        to_highlight = $('#my_account');
        to_highlight.children().css({'color': text_color});
    }
    else if(curr_page.localeCompare("external.html") === 0) {
        to_highlight = $('#external_links');
        to_highlight.children().children().css({'color': text_color});
        $('#external_links img:first').attr("src","icons/globe24wht.png");//bit of a hack :s
    }
    else {
        alert("Something went wrong configuring the left navbar");
    }
    //same change for any to_highlight
    to_highlight.css({ 'background-color': backg_color});
});
