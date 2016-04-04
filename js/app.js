$(document).ready(function() {
	//load navbar code, then callback when it's done
	//load navbar code
	$('#top_navbar').load("top_navbar.html");
	$('#leftnav_wrapper').load("left_navbar.html", function() {
		set_leftnav_pinned();
		var page = SCCommon.getPage();
		if(page === 2) {
			set_pin_listeners();
		}
		set_center_height();		
    	set_card_width();

    	$('#sao').click(function() {
			//same behaviour as the real thing :)
			alert("No SAO Form");
		});

    	set_incoming_students(page);

		$('body').fadeIn("fast");
	});
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

var LINK_NAMES = ["huron", "brescia", "kings"];	

function set_leftnav_pinned() {
	LINK_NAMES.forEach(function(link_name) {		
		var is_pinned = localStorage.getItem(link_name + "_is_pinned");
		if(is_pinned !== "true") {		
			$("#" + link_name + "_pinned").hide();
		}
	});
}

function set_pin_listeners() {
	LINK_NAMES.forEach(function(link_name) {
		var black = $("#" + link_name + "_black_pin");
		var red   = $("#" + link_name + "_red_pin");

		var is_pinned = localStorage.getItem(link_name + "_is_pinned");

		if(is_pinned === "true") {
			black.css('display', 'none');
			red.css('display', 'inline');
			red.click(function() {
				localStorage.setItem(link_name + "_is_pinned", "false");			
				location.reload();
			});
		}
		else {
			red.css('display', 'none');
			black.css('display', 'inline');
			black.click(function() {
				localStorage.setItem(link_name + "_is_pinned", "true");
				location.reload();
			});
		}
	});
}

function set_incoming_students(pagenum) {
    if(localStorage.getItem("show_incoming") !== "false") {
		$('#hide_incoming').click(function() {
			var confirmed = confirm("Are you sure you want to hide Incoming Students? " +
				"This action can be reversed on the External Links page for now.");
			if(confirmed) {
				$('#incoming').css('display', 'none');
				localStorage.setItem("show_incoming", "false");
				//only reload if on External page (to show enable button)
				if(pagenum === 2)
					location.reload();
			}
		});
	}
	else {
		$('#incoming').css('display', 'none');
		$('#enable_incoming_card').css('display', 'inline');
		$('#enable_incoming').click(function() {				
			$('#incoming').css('display', 'inline');
			localStorage.setItem("show_incoming", "true");
			location.reload();
		});
	}
}

//when the window is resized, call this function
$(window).resize(set_center_height);

function set_center_height() {
    //-1 for the navbar border
	var height = window.innerHeight - $('#top_navbar').height() - 1;
	
	$('#center').css({'height': height+"px" });
}