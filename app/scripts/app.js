
$(function() {
    var padding = 83;
    $('.page-scroll a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - padding
        }, 1000);
        event.preventDefault();
    });
});
$('select').select2({
    minimumResultsForSearch: Infinity
});
$('.sidebar-toggler').click(function() {
    $('.page-sidebar-menu').toggleClass('page-sidebar-menu-closed');
    $('.page-sidebar-menu').toggleClass('page-sidebar-menu-open');
    $('.page-content-wrapper .page-content').toggleClass('page-content-open');

});
//toggle
$('.cat__lines__header').click(function(){
    $(this).parent().find('.cat__lines__body').toggleClass('active');
    return false;
});

$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        itemWidth: 258,
        move: 1
    });
});