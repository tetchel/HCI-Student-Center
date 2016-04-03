$(document).ready(function() {
	//load navbar code, then callback when it's done
	$('#top_navbar').load("top_navbar.html");
	$('#leftnav_wrapper').load("left_navbar.html");

	set_center_height();
    set_card_width();
});

//make spaces around card smaller to fit in bulletin board on index.html
function set_card_width() {
	var pathname 	= location.pathname;
	var last_slash 	= pathname.lastIndexOf("/");
	var curr_page 	= pathname.substring(last_slash+1);
	var wss = "Western Student Centre";

    var flex_value = "0 0 5%"

    if(curr_page.localeCompare("index.html") === 0) {
        $('#left_space').css({'flex': flex_value});
        $('#right_space').css({'flex': flex_value});
    }
}

//when the window is resized, call this function
$(window).resize(set_center_height);

function set_center_height() {
    //-1 for the navbar border
	var height = window.innerHeight - $('#top_navbar').height() - 1;
	
	$('#center').css({'height': height+"px" });
}
