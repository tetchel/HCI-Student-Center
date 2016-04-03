$(document).ready(function() {
	//load navbar code, then callback when it's done
	$('#top_navbar').load("top_navbar.html", load_page());
	$('#leftnav_wrapper').load("left_navbar.html");

	set_center_height();
});

function load_page() {
	var pathname 	= location.pathname;
	var last_slash 	= pathname.lastIndexOf("/");
	var curr_page 	= pathname.substring(last_slash+1);

	var wss = "Western Student Centre";
/*
	if(curr_page.localeCompare("index.html") === 0) {
		console.log(document.getElementById("page_title").innerHTML;
		alert('poo in my pants');
		$('#page_title').html("John Doe's Profile");
		console.log(document.getElementById("page_title").innerHTML;
		alert('suck my chode');
	}
	//add other pages here
	else if(curr_page.localeCompare("account.html") === 0) {
		$('#page_title').html("Finances > My Account");
	}
	else {
		alert("Something went wrong setting the navbar title ");
	}
*/
}

//when the window is resized, call this function
$(window).resize(set_center_height);

function set_center_height() {
    //-1 for the navbar border
	var height = window.innerHeight - $('#top_navbar').height() - 1;
	
	$('#center').css({'height': height+"px" });
}
