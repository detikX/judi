
$(document).ready(function () {
    setTimeout(() => {
        $(".preloader").slideUp(1000);
        $(".preloader").remove();
        $("html, body").animate({ scrollTop: 0 }, 10);
        window.scrollTo(0, 0);

    }, 2000);

    new WOW().init();
    AOS.init()
})

$(".pembukaan .wrap-detikx p, .wrap-detikx .blokir, .wrap-detikx .tahun").attr({ "data-aos": "fade-up", "data-aos-delay": "200", "data-aos-duration": "300" });

window.onscroll = function () { ScrollIndicator() };

// var mobil = "<div class='imgs'><img src='img/mobil-kanan.png' /></div>"
function ScrollIndicator() {
    // console.log(document.documentElement.scrollHeight);
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // var height = $(".ref").height();
    var scrolled = (winScroll / height) * 100;
    document.getElementById('footer__progress_bar').style.width = scrolled + "%";
    // document.getElementById('footer__progress_bar').innerHTML = Math.round(scrolled) + "%"
    console.log(scrolled);
    // document.getElementById('footer__progress_bar').innerHTML = mobil;

}

// function myFunction() {
//     const winScroll = document.getElementById("info").scrollTop;
//     const height = document.getElementById("info").scrollHeight - document.documentElement.clientHeight;
//     const scrolled = (winScroll / height) * 100;
//     document.getElementById("footer__progress_bar").style.width = scrolled + "%";
// }

// document.getElementById("info").onscroll = function () { myFunction() };