$('.navbar').affix({
    offset:{
        top: $('#header').outerHeight(),
        bottom: $('#header').outerHeight() - 200
    }
});

$('#sidemenu').affix({
    offset:{
        top: $('#header').outerHeight(),
        bottom: ($('footer').height()-$('#header').height()) + $('#sidemenu').height()
    }
});

