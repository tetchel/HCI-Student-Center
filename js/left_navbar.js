$(document).ready(function() {
    //highlight the current page in the left navbar
    var to_highlight;

    var backg_color="#3D1573";
    var text_color="#FFFFFF";

    var page = getPage();
    $('#my_profile_left').html(first_name + "'s Profile");

    //each to_highlight has the same background but different children
    if(page === pagesEnum.INDEX) {        
        to_highlight = $('#my_profile');        
        to_highlight.css({'color': text_color});   
        to_highlight.children().css({'color': text_color});   
    }
    else if(page === pagesEnum.ACCOUNT) {
        to_highlight = $('#my_account');
        to_highlight.css({'color': text_color});
        to_highlight.children().css({'color': text_color});
    }
    else if(page === pagesEnum.EXTERNAL) {
        to_highlight = $('#external_links');
        to_highlight.children().css({'color': text_color});
        to_highlight.children().children().css({'color': text_color});
        $('#external_links img:first').attr("src","icons/globe24wht.png");//bit of a hack :s
    }
    else {
        alert("Something went wrong configuring the left navbar");
    }
    //same change for any to_highlight
    to_highlight.css({ 'background-color': backg_color});
});
