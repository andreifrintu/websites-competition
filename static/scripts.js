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
    var counter = 0;
    function Answer(id) {
        if (id == 1) {
            $('#varianta-corecta').removeClass('btn-secondary');
            $('#varianta-corecta').addClass('btn-success');
            $('#varianta-corecta').attr("disabled", "");
            $('#continuare').removeClass('d-none');
            $('#continuare').addClass('d-block');
            counter = counter + 1;
        }
        else if (id == 2) {
            $('#varianta-gresita-2').removeClass('btn-secondary');
            $('#varianta-gresita-2').addClass('btn-danger');
            $('#varianta-gresita-2').attr("disabled", "");
        }
        else {
            $('#varianta-gresita-3').removeClass('btn-secondary');
            $('#varianta-gresita-3').addClass('btn-danger');
            $('#varianta-gresita-3').attr("disabled", "");
        }
    }
    function NextQuestion() {
        if (counter == 1) {
            $('#container-intrebare').html('<p id="intrebare" class="mt-4 fs-4 text-white">2. Care sunt calitățile si competențele unui antreprenor de succes?</p><p id="varianta_2"><button onclick="Answer(2)" id="varianta-gresita-2" class="btn btn-secondary w-100 btn-lg">IQ ridicat</button></p><p id="varianta_3"><button onclick="Answer(3)" id="varianta-gresita-3" class="btn btn-secondary w-100 btn-lg">aspect fizic plăcut</button></p><p id="varianta_1"><button onclick="Answer(1)" id="varianta-corecta" class="btn btn-secondary w-100 btn-lg">gândire inovatoare</button></p>');
            $('#continuare').removeClass('d-block');
            $('#continuare').addClass('d-none');
        } else if (counter == 2) {
            $('#container-intrebare').html('<p id="intrebare" class="mt-4 fs-4 text-white">3. Activitatea economică generează:</p><p id="varianta_2"><button onclick="Answer(2)" id="varianta-gresita-2" class="btn btn-secondary w-100 btn-lg">risipă</button></p><p id="varianta_1"><button onclick="Answer(1)" id="varianta-corecta" class="btn btn-secondary w-100 btn-lg">profit</button></p><p id="varianta_3"><button onclick="Answer(3)" id="varianta-gresita-3" class="btn btn-secondary w-100 btn-lg">ineficiență</button></p>');
            $('#continuare').removeClass('d-block');
            $('#continuare').addClass('d-none');
        } else if (counter == 3) {
            $('#container-intrebare').html('<p id="intrebare" class="mt-4 fs-4 text-white">4. Resursele umane ale unei firme sunt reprezentate de:</p><p id="varianta_1"><button onclick="Answer(1)" id="varianta-corecta" class="btn btn-secondary w-100 btn-lg">angajații firmei</button></p><p id="varianta_2"><button onclick="Answer(2)" id="varianta-gresita-2" class="btn btn-secondary w-100 btn-lg">dotările firmei</button></p><p id="varianta_3"><button onclick="Answer(3)" id="varianta-gresita-3" class="btn btn-secondary w-100 btn-lg">banii disponibili</button></p>');
            $('#continuare').removeClass('d-block');
            $('#continuare').addClass('d-none');
        } else if (counter == 4) {
            $('#container-intrebare').html('<p id="intrebare" class="mt-4 fs-4 text-white">5. Creditul reprezintă:?</p><p id="varianta_2"><button onclick="Answer(2)" id="varianta-gresita-2" class="btn btn-secondary w-100 btn-lg">o sumă de bani primită de o persoană oarecare</button></p><p id="varianta_1"><button onclick="Answer(1)" id="varianta-corecta" class="btn btn-secondary w-100 btn-lg">împrumutul acordat de către o bancă unui solicitant</button></p><p id="varianta_3"><button onclick="Answer(3)" id="varianta-gresita-3" class="btn btn-secondary w-100 btn-lg">valoarea unei părți dintr-o firmă care produce bunuri</button></p>');
            $('#continuare').html("Finalizare Quiz!")
            $('#continuare').removeClass('d-block');
            $('#continuare').addClass('d-none');
        } else if (counter == 5) {
            // set congratulations message image on screen
        }
    }
}