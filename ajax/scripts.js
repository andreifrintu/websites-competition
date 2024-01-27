
  /*

        Website developed by Andrei Frîntu
        Critical maintenance @ codulluiandrei.ro

        Version:    1.3@2023-inflation:websites-competition
        Stage:      dev@localhost
        Contact:    admin@codulluiandrei.ro

    */

$(document).ready(function() {
    // Observe elements and play animations
    $('.Secondfib').css("visibility", "hidden");
    $('.Thridfib').css("visibility", "hidden");
    $('.Fourthfib').css("visibility", "hidden");
    $('.Fifthfib').css("visibility", "hidden");
    $('.Sixthfib').css("visibility", "hidden");
    var InterObs = new IntersectionObserver(function(array) {
        array.forEach(function(e) {
            if (e.isIntersecting) {
                if (e.target.id == 'Second') AnimSecond();
                if (e.target.id == 'Thrid') AnimThrid();
                if (e.target.id == 'Fourth') AnimFourth();
                if (e.target.id == 'Fifth') AnimFifth();
                if (e.target.id == 'Sixth') AnimSixth();
            }
            else {
                if (e.target.id == 'Second') MinSecond();
                if (e.target.id == 'Thrid') MinThrid();
                if (e.target.id == 'Fourth') MinFourth();
            }
        });
    }, {threshold: 0});
    InterObs.observe($('#Second')[0]);
    InterObs.observe($('#Thrid')[0]);
    InterObs.observe($('#Fourth')[0]);
    InterObs.observe($('#Fifth')[0]);
    InterObs.observe($('#Sixth')[0]);

    // Animations for first section
    $('.fil').css("visibility", "hidden");
    $('.fir').css("visibility", "hidden");
    $('.fit').css("visibility", "hidden");
    var Delay = setTimeout(() => {
        $('.fil').first().css("visibility", "visible");
        $('.fir').first().css("visibility", "visible");
        $('.fil').first().addClass("fade-in-left");
        $('.fir').first().addClass("fade-in-right");
        clearTimeout(Delay);
    }, 400);

    // Animations for navigation bar
    var NavbarDelay = setTimeout(() => {
        $('.fit').first().css("visibility", "visible");
        $('.fit').first().addClass("fade-in-top");
        NavbarDelay = setTimeout(() => {
            $('.fit:nth-child(2)').css("visibility", "visible");
            $('.fit:nth-child(2)').addClass("fade-in-top");
            NavbarDelay = setTimeout(() => {
                $('.fit:nth-child(3)').css("visibility", "visible");
                $('.fit:nth-child(3)').addClass("fade-in-top");
                NavbarDelay = setTimeout(() => {
                    $('.fit:nth-child(4)').css("visibility", "visible");
                    $('.fit:nth-child(4)').addClass("fade-in-top");
                    NavbarDelay = setTimeout(() => {
                        $('.fit:nth-child(5)').css("visibility", "visible");
                        $('.fit:nth-child(5)').addClass("fade-in-top");
                        NavbarDelay = setTimeout(() => {
                            $('.fit:nth-child(6)').css("visibility", "visible");
                            $('.fit:nth-child(6)').addClass("fade-in-top");
                            clearTimeout(NavbarDelay);
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);
        }, 100);
    }, 200);
});
// Controls for second section
function ExpandSecond() {
    $('#Second').css("height", "100%");
    $('#SecondMin').removeClass("d-none");
    $("#Second ul").first().addClass("mb-0");
    $('#SecondMin').addClass("fade-in-right");
    $('#ExpandSecond').addClass("d-none");
    $('#MinSecond').removeClass("d-none");
    $('#SecondImg').addClass("fade-in-left");
}
function MinSecond() {
    $('#Second').css("height", "600px");
    $("#Second ul").first().removeClass("mb-0");
    $('#SecondMin').removeClass("fade-in-right");
    $('#SecondMin').addClass("d-none");
    $('#MinSecond').addClass("d-none");
    $('#ExpandSecond').removeClass("d-none");
    $('#SecondImg').removeClass("fade-in-left")
}

// Controls for thrid section
function ExpandThrid() {
    $('#Thrid').css("height", "100%");
    $('#ThridMin').removeClass("d-none");
    $("#Thrid ul").first().addClass("mb-0");
    $('#ThridMin').addClass("fade-in-left");
    $('#ExpandThrid').addClass("d-none");
    $('#MinThrid').removeClass("d-none");
    $('#ThridImg').addClass("fade-in-right");
}
function MinThrid() {
    $('#Thrid').css("height", "600px");
    $("#Thrid ul").first().removeClass("mb-0");
    $('#ThridMin').removeClass("fade-in-left");
    $('#ThridMin').addClass("d-none");
    $('#MinThrid').addClass("d-none");
    $('#ExpandThrid').removeClass("d-none");
    $('#ThridImg').removeClass("fade-in-right");
}

// Controls for fourth section
function ExpandFourth() {
    $('#Fourth').css("height", "100%");
    $('#FourthMin').removeClass("d-none");
    $("#Fourth ul").first().addClass("mb-0");
    $('#FourthMin').addClass("fade-in-right");
    $('#ExpandFourth').addClass("d-none");
    $('#MinFourth').removeClass("d-none");
    $('#FourthImg').addClass("fade-in-left");
}
function MinFourth() {
    $('#Fourth').css("height", "600px");
    $("#Fourth ul").first().removeClass("mb-0");
    $('#FourthMin').removeClass("fade-in-right");
    $('#FourthMin').addClass("d-none");
    $('#MinFourth').addClass("d-none");
    $('#ExpandFourth').removeClass("d-none");
    $('#FourthImg').removeClass("fade-in-left");
}

// Animations for second section
function AnimSecond() {
    var Delay = setTimeout(() => {
        $('.Secondfib').css("visibility", "visible");
        $('.Secondfib').addClass("fade-in-bottom");
        Delay = setTimeout(() => {
            $('#Second .fil').css("visibility", "visible");
            $('#Second .fir').css("visibility", "visible");
            $('#Second .fil').addClass("fade-in-left");
            $('#Second .fir').addClass("fade-in-right");
            clearTimeout(Delay);
        }, 400);
    }, 100);
}

// Animations for thrid section
function AnimThrid() {
    var Delay = setTimeout(() => {
        $('.Thridfib').css("visibility", "visible");
        $('.Thridfib').addClass("fade-in-bottom");
        Delay = setTimeout(() => {
            $('#Thrid .fil').css("visibility", "visible");
            $('#Thrid .fir').css("visibility", "visible");
            $('#Thrid .fil').addClass("fade-in-left");
            $('#Thrid .fir').addClass("fade-in-right");
            clearTimeout(Delay);
        }, 400);
    }, 100);
}

// Animations for fourth section
function AnimFourth() {
    var Delay = setTimeout(() => {
        $('.Fourthfib').css("visibility", "visible");
        $('.Fourthfib').addClass("fade-in-bottom");
        Delay = setTimeout(() => {
            $('#Fourth .fil').css("visibility", "visible");
            $('#Fourth .fir').css("visibility", "visible");
            $('#Fourth .fil').addClass("fade-in-left");
            $('#Fourth .fir').addClass("fade-in-right");
            clearTimeout(Delay);
        }, 400);
    }, 100);
}

// Animations for fifth section
function AnimFifth() {
    var Delay = setTimeout(() => {
        $('.Fifthfib').css("visibility", "visible");
        $('.Fifthfib').addClass("fade-in-bottom");
        Delay = setTimeout(() => {
            $('#Fifth .fil').css("visibility", "visible");
            $('#Fifth .fir').css("visibility", "visible");
            $('#Fifth .fil').addClass("fade-in-left");
            $('#Fifth .fir').addClass("fade-in-right");
            clearTimeout(Delay);
        }, 400);
    }, 100);
}

// Animations for sixth section
function AnimSixth() {
    var Delay = setTimeout(() => {
        $('.Sixthfib').css("visibility", "visible");
        $('.Sixthfib').addClass("fade-in-bottom");
        Delay = setTimeout(() => {
            $('#Sixth .fil').css("visibility", "visible");
            $('#Sixth .fir').css("visibility", "visible");
            $('#Fifth .fil').addClass("fade-in-left");
            $('#Sixth .fir').addClass("fade-in-right");
            clearTimeout(Delay);
        }, 400);
    }, 100);
}
