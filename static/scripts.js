$(document).ready(function() {

    function checkScrollPosition() {
        var scrollPosition = $(window).scrollTop();
        var viewportHeight = $(window).height();
        var midViewport = viewportHeight / 2;

        if (scrollPosition > midViewport)
            $('.navbar').addClass('backdrop-blur');
        else
            $('.navbar').removeClass('backdrop-blur');
    }

    $(window).scroll(function() {
      checkScrollPosition();
    });

    checkScrollPosition();
});