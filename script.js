const btn = $(".voltar-topo");

btn.click(() => {
    $('html, body').animate({scrollTop:0}, 2000);
});

$(document).ready(() => {
    $('.redes-sociais a .instagram').mouseenter(() => {
        $('.instagram').attr('src','./assets/instagram_red.svg');
    });
    $('.redes-sociais a .youtube').mouseenter(() => {
        $('.youtube').attr('src','./assets/youtube_red.svg');
    });
    $('.redes-sociais a .twitter').mouseenter(() => {
        $('.twitter').attr('src','./assets/twitter_red.svg');
    });
    $('.redes-sociais a .email').mouseenter(() => {
        $('.email').attr('src','./assets/email_red.svg');
    });
    $('.redes-sociais a img').mouseleave (() => {
        $('.instagram').attr('src','./assets/instagram.svg');
        $('.youtube').attr('src','./assets/youtube.svg');
        $('.twitter').attr('src','./assets/twitter.svg');
        $('.email').attr('src','./assets/email.svg');
    });
});