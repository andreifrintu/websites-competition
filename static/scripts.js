var fullURL = new URL(document.currentScript.src);
var paramsURL = fullURL.searchParams;
var page = paramsURL.get('page');


if (page != 'quiz') {
    $(document).ready(function() {

        function checkScrollPosition() {
            var scrollPosition = $(window).scrollTop();
            var viewportHeight = $(window).height();
            var midViewport = viewportHeight / 1.50;

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
    console.log("test")
}