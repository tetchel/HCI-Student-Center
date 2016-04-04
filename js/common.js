function getPage() {
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
    else if(curr_page.localeCompare("records.html") === 0) {
        return pagesEnum.RECORDS;
    }
    else if(curr_page.localeCompare("courses.html") === 0) {
        return pagesEnum.COURSES;
    }
    else if(curr_page.localeCompare("itr.html") === 0) {
        return pagesEnum.ITR;
    }
    else if(curr_page.localeCompare("letters.html") === 0) {
        return pagesEnum.LETTERS;
    }
    else if(curr_page.localeCompare("gs.html") === 0) {
        return pagesEnum.GS;
    }
    else if(curr_page.localeCompare("taxes.html") === 0) {
        return pagesEnum.TAXES;
    }
    else {
        alert("Something went wrong getting the page");
    }
}

var first_name = "Stu";
var last_name  = "Dent";

var pagesEnum = {
	INDEX : 0,
	ACCOUNT : 1,
	EXTERNAL : 2,
	RECORDS : 3,
	COURSES : 4,
	ITR : 5,
	LETTERS : 6,
	GS : 7,
	TAXES : 8
};