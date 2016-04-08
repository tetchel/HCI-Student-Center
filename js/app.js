//YOU MUST INCLUDE common.js IN ALL HTML FILES BEFORE THIS

$(document).ready(function() {
	//load navbar code, then callback when it's done
	$('#top_navbar').load("top_navbar.html");

	$('#leftnav_wrapper').load("left_navbar.html", function() {
		set_leftnav_pinned();
		var page = getPage();
		if(page === pagesEnum.EXTERNAL) {
			set_pin_listeners();
		}
		set_center_height();		
    	set_card_width(page);
    	set_incoming_students(page);

    	$('#sao').click(function() {
			//same behaviour as the real thing :)
			alert("No SAO Form found");
		});

    	$(document).on('click', '#drop_courses', function() {
            var msg = "Are you sure you wish to drop the following course(s)?";
            $('.droppable').each(function(i, obj) {
                if ($(this).is(":checked")) {
                    var parent = $(this).parent().parent();
                    var course_code = parent.find(':nth-child(2)').html();
                    var course_name = parent.find(':nth-child(3)').html();
                    msg += "\n\t" +  "- " + course_code + ": " + course_name;
                }
            });
			var confirm_drop = confirm(msg);

            if(confirm_drop) {
                alert("I'm sorry to hear that.");
            }
		});

		$('body').fadeIn("fast");
	});
});

//make spaces around card smaller to fit in bulletin board on index.html
function set_card_width(pagenum) {
    var flex_value = "0 0 5%"

    if(pagenum === pagesEnum.INDEX) {
        $('#left_space').css({'flex': flex_value});
        $('#right_space').css({'flex': flex_value});
        $('#content_wrapper').css({'min-width': "400px"});
    }
}

var LINK_NAMES = ["huron", "brescia", "kings"];	

function set_leftnav_pinned() {
	LINK_NAMES.forEach(function(link_name) {		
		var is_pinned = localStorage.getItem(link_name + "_is_pinned");
		if(is_pinned !== "true") {		
			$("#" + link_name + "_pinned").hide();
		}
		else {
			if(localStorage.getItem("item_to_highlight") === link_name) {
				localStorage.setItem("item_to_highlight", "none");
				$("#" + link_name + "_pinned").css({ "background": "#FFFF66" });
			}
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
				localStorage.setItem	("item_to_highlight", link_name);		
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
