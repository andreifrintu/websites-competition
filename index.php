<?php
    
    /*

        Website developed by Andrei Frîntu
        Critical maintenance @ codulluiandrei.ro

        Version:    1.1@2023-inflation:websites-competition
        Stage:      dev@localhost
        Contact:    admin@codulluiandrei.ro

    */

?>
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <title>Inflația - Istorie și Societate în Dimensiunea Digitală - Andrei Frîntu</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="ajax/styles.css" rel="stylesheet">
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="ajax/scripts.js"></script>
</head>
<body>

    <div id="top" class="bg-light scroll-snap doubleHeader text-center w-100 py-1 d-lg-flex justify-content-center align-items-center gap-lg-3 border-bottom">
        <p class="ms-lg-1 w-75 m-auto fs-5 mb-0 fit"><a rel="nofollow" class="nav-link py-2 px-4 rounded" href="#despre">Despre</a></p>
        <p class="w-75 m-auto fs-5 mb-0 fit"><a rel="nofollow" class="nav-link py-2 px-4 rounded" href="#indici-indicatori">Indici & Indicatori</a></p>
        <p class="w-75 m-auto fs-5 mb-0 fit"><a rel="nofollow" class="nav-link py-2 px-4 rounded" href="#cauze">Cauze</a></p>
        <p class="w-75 m-auto fs-5 mb-0 fit"><a rel="nofollow" class="nav-link py-2 px-4 rounded" href="#consecinte">Consecințe</a></p>
        <p class="w-75 m-auto fs-5 mb-0 fit"><a rel="nofollow" class="nav-link py-2 px-4 rounded" href="#combatere">Combatere</a></p>
        <p class="me-lg-1 w-75 m-auto fs-5 mb-0 fit"><a rel="nofollow" class="nav-link py-2 px-4 rounded" href="#contact">Contact</a></p>
    </div>
    <header class="bg-faded w-100 py-2 mb-4 border-bottom text-center shadow-lg d-lg-block d-flex">
        <span class="text-white fs-4 fw-bold m-auto">INFLAȚIA</span>
    </header>

    <div class="container-fluid my-lg-5 invisible">.</div>
    <div class="container-fluid my-lg-5 invisible">
        .
        <div id="despre"></div>
    </div>
    <div class="container-fluid p-3 my-5 bg-faded scroll-snap" style="transform: skewY(3deg);">
        <div class="container fade-in-bottom px-4 py-5" style="transform: skewY(-3deg);">
            <div id="First" class="bg-light d-flex p-4 pe-lg-0 py-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="w-100 p-3 p-lg-5 pt-lg-3 fil">
                    <h1 class="display-4 fw-bold lh-1 text-amazon">Ce este inflația?</h1>
                    <p class="lead text-justify">Este procesul de creștere a nivelului general al prețurilor de consum, mecanism care provoacă variații multiple de lungă durată, generalizează el însuși cauzele permanentei sale. Fiind un fenomen deosebit de complex, inflația se poate măsura și ilustra prin utilizarea simultană a mai multor indici și indicatori, fiecare din aceștia evidențiind o anumită fațetă a inflației.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <a rel="nofollow" class="w-100" href="#indici-indicatori"><button type="button" class="btn btn-lg coduButton px-4 me-md-2 fw-bold text-white w-100">MĂSURAREA INFLAȚIEI</button></a>
                    </div>
                </div>

                <div class="rounded p-0 overflow-hidden shadow-lg fir" style="width: 40%;">
                    <img loading="lazy" id="FirstImg" src="images/webp/first.webp" alt="" width="750"  height="500">
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid my-lg-5 invisible">.</div>

    <div class="container-fluid my-lg-5 invisible">
        .
        <div id="indici-indicatori"></div>
    </div>
    <div class="container-fluid p-3 my-5 bg-blended scroll-snap" style="transform: skewY(-3deg);">
        <div class="container Secondfib px-4 py-5" style="transform: skewY(3deg);">
            <div id="Second" class="bg-light d-flex p-4 ps-lg-0 py-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="rounded p-0 overflow-hidden shadow-lg fil" style="width: 40%;">
                    <img loading="lazy" id="SecondImg" src="images/webp/second.webp" alt="" width="750"  height="500">
                </div>
                <div class="w-100 p-3 p-lg-5 pt-lg-3 fir">
                    <h1 class="display-4 fw-bold lh-1 text-amazon">Măsurarea inflației</h1>
                    <p class="lead text-justify">
                        Fiind un fenomen deosebit de complex, inflația se poate măsura și ilustra prin utilizarea simultană a mai multor indici și indicatori, fiecare dintre aceștia evidențiind o anumită fațetă a inflației. Cei mai importanți sunt:
                        <ul class="lead text-justify">
                            <li>diferența dintre cererea solvabilă și oferta reală de mărfuri, bunuri și servicii;</li>
                            <li>indicele general al prețurilor;</li>
                            <li>indicele prețurilor de consum; <span rel="nofollow" id="ExpandSecond" onclick="ExpandSecond()" class="text-underline lead text-amazon w-50">continuare...</span></li>
                        </ul>
                        <div id="SecondMin" class="d-none">
                            <ul class="lead text-justify mt-0">
                                <li>indicele costului vieții;</li>
                                <li>scăderea puterii de cumpărare a banilor pe piața internă și cea externă;</li>
                                <li>depășirea de către masa monetară în circulație a produsului național.</li>
                            </ul>
                            <p class="lead text-justify">Exprimarea absolută a inflației se determină ca diferența dintre cererea absolută nominală și cantitatea reală de bunuri și servicii pe care le pot oferi spre vânzare agenții economici. <span rel="nofollow" id="MinSecond" onclick="MinSecond()" class="text-underline lead text-amazon w-50 d-none">închide...</span></p>
                        </div>
                    </p>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <a rel="nofollow" class="w-100" href="#cauze"><button type="button" class="btn btn-lg coduButton px-4 me-md-2 fw-bold text-white w-100">CAUZELE DECLANSĂRII INFLAȚIEI</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid my-lg-5 invisible">.</div>

    <div class="container-fluid my-lg-5 invisible">
        .
        <div id="cauze"></div>
    </div>
    <div class="container-fluid p-3 my-5 bg-faded scroll-snap" style="transform: skewY(3deg);">
        <div class="container Thridfib px-4 py-5" style="transform: skewY(-3deg);">
            <div id="Thrid" class="bg-light d-flex p-4 pe-lg-0 py-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="w-100 p-3 p-lg-5 pt-lg-3 fil">
                    <h1 class="display-4 fw-bold lh-1 text-amazon">Cauzele declansării inflației</h1>
                    <p class="lead text-justify">
                        Indeferent de cauza declanșării inflației, desfășurarea, perpetuarea și agravarea ei are determinări multifactoriale. În condițiile economiei actuale, inflația are la bază factori de ordin economic, monetar socio-politic, de natură internă și externă care acționează simultan și se influențează reciproc.
                        <ul class="lead text-justify">
                            <li>Inflația monetară - se datorează introducerii și menținerii în circulație a unei mase monetare excedentare raportată la cantitatea de bunuri și servicii de pe piață. <span rel="nofollow" id="ExpandThrid" onclick="ExpandThrid()" class="text-underline lead text-amazon w-50">continuare...</span></li>
                        </ul>
                        <div id="ThridMin" class="d-none">
                            <ul class="lead text-justify">
                                <li>Inflația prin cerere - este un fenomen de creștere a prețului provocată de o situație de dezechilibru într-o cerere agregată solvabilă prea mare în raport cu oferta agregată la un anumit preț. În condiții normale, excesul de cerere stimulează mărirea producției. Dacă însă creșterea volumului cererii nu este determinată de o creștere corespunzătoare a producției, a ofertei, prețurile cresc și se manifestă fenomenul inflaționist.</li>
                                <li>Excesul cererii de consum - cererea de consum a populației poate constitui uneori factorul principal al inflației. Creșterea cererii de consum a populației poate să provină dintr-o utilizare excesivă a economiilor bănești. Ea poate avea ca sursă și creșterea excesivă a salariilor fără o creștere corespunzătoare a producției sau a productivității muncii. O altă cauză a inflației prin cerere este excesul cererii guvernamentale peste posibilitățile bugetare curente.</li>
                                <ul>
                                    <li>Inflația prin ofertă - dezechilibrul inflaționist dintre cerere și ofertă este explicat adeseori prin insuficiența ofertei, prin deficitul de bunuri materiale și servicii pe piață.</li>
                                    <li>Inflația prin costuri - exprimă acea creștere inflaționistă a prețurilor datorată creșterii elementelor ce intră în prețuri (materii prime, salarii, beneficii). <span rel="nofollow" id="MinThrid" onclick="MinThrid()" class="text-underline lead text-amazon w-50 d-none">închide...</span></li>
                                </ul>
                            </ul>
                        </div>
                    </p>
                    
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <a rel="nofollow" class="w-100" href="#consecinte"><button type="button" class="btn btn-lg coduButton px-4 me-md-2 fw-bold text-white w-100">CONSECINȚELE INFLAȚIEI</button></a>
                    </div>
                </div>
                <div class="rounded p-0 overflow-hidden shadow-lg fir" style="width: 40%;">
                    <img loading="lazy" id="ThridImg" src="images/webp/thrid.webp" alt="" width="750"  height="500">
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid my-lg-5 invisible">.</div>

    <div class="container-fluid my-lg-5 invisible">
        .
        <div id="consecinte"></div>
    </div>
    <div class="container-fluid p-3 my-5 bg-blended scroll-snap" style="transform: skewY(-3deg);">
        <div class="container Fourthfib px-4 py-5" style="transform: skewY(3deg);">
            <div id="Fourth" class="bg-light d-flex p-4 ps-lg-0 py-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="rounded p-0 overflow-hidden shadow-lg fil" style="width: 40%;">
                    <img loading="lazy" style="margin-left: -75%;" id="FourthImg" src="images/webp/fourth.webp" alt="" width="750"  height="500">
                </div>
                <div class="w-100 p-3 p-lg-5 pt-lg-3 fir">
                    <h1 class="display-4 fw-bold lh-1 text-amazon">Consecințele inflației</h1>
                    <p class="lead text-justify">
                        Sunt exprimate prin prisma deprecierii monetare:
                        <ul class="lead text-justify">
                            <li>consecințele inflației sunt recepționate în primul rând de agenții economici cumpărători;</li>
                            <li>sub incidența inflației scad economiile agenților economici diminuându-se resursele datorită scăderii puterii de cumpărare a banilor;</li>
                            <li>inflația îi dezavantajează pe creditori;</li>
                            <li>în timpul inflației producția scade; <span rel="nofollow" id="ExpandFourth" onclick="ExpandFourth()" class="text-underline lead text-amazon w-50">continuare...</span></li>
                        </ul>
                        <div id="FourthMin" class="d-none">
                            <ul class="lead text-justify">
                                <li>inflația elimină o parte din resursele acumulate;</li>
                                <li>inflația consituie un factor dezorganizator al oricărei economii naționale;</li>
                                <li>descurajează investițiile productive, de lungă durată;</li>
                                <li>generează și extinde șomajul;</li>
                                <li>accentuează deprecierea monedei naționale. <span rel="nofollow" id="MinFourth" onclick="MinFourth()" class="text-underline lead text-amazon w-50 d-none">închide...</span></li>
                            </ul>
                        </div>
                    </p>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <a rel="nofollow" class="w-100" href="#combatere"><button type="button" class="btn btn-lg coduButton px-4 me-md-2 fw-bold text-white w-100">COMBATEREA INFLAȚIEI</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</body>
</html>
