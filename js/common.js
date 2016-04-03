var SCCommon = {
	SCCommon : pagesEnum = {
		INDEX : 0,
		ACCOUNT : 1,
		EXTERNAL : 2
	},

	getPage : function() {
		var pathname 	= location.pathname;
		var last_slash 	= pathname.lastIndexOf("/");
		var curr_page   = pathname.substring(last_slash+1);

	 	if(curr_page.localeCompare("index.html") === 0 || (!curr_page && 0 === curr_page.length)) {        
	        return pagesEnum.INDEX;
	    }
		else if(curr_page.localeCompare("account.html") === 0) {
	        return pagesEnum.ACCOUNT;
	    }
	    else if(curr_page.localeCompare("external.html") === 0) {
	        return pagesEnum.EXTERNAL;
	    }
	    else {
	        alert("Something went wrong getting the page");
	    }
	}
};