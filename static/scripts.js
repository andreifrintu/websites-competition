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
}
else {
    function Answer(id) {
        if (id == 1) {
            $('#varianta-corecta').removeClass('btn-secondary');
            $('#varianta-corecta').addClass('btn-success');
            $('#continuare').removeClass('d-none');
            $('#continuare').addClass('d-block');
        }
        else if (id == 2) {
            $('#varianta-gresita-2').removeClass('btn-secondary');
            $('#varianta-gresita-2').addClass('btn-danger');
        }
        else {
            $('#varianta-gresita-3').removeClass('btn-secondary');
            $('#varianta-gresita-3').addClass('btn-danger');
        }
    }
}