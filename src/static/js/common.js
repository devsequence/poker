$('.hero-info').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('active');
});
$(".main-slider").slick({
    infinite: false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: true,
    customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).find('.slide-desc__media img').attr('src');
        return '<a><img src="'+thumb+'"></a>';
    },
    responsive: [{
        breakpoint: 500,
        settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }]
});
$(window).on('scroll', function() {
    var $this = $(this);
    // if ($this.scrollTop() > $('.recommended-item.active').offset().top) {
    //     console.log('ska');
    //     $('.recommended-item.active').next().addClass('active');
    // }
    // else{
    //     $header.removeClass('scroll-nav');
    // }
});

// $('.core-header__top .menu-item .core-icon').on('click', function (e) {
//     var $this = $(this);
//     if($this.parent().hasClass('active')){
//         $this.parent().removeClass('active');
//     }else{
//         $('.menu-item').removeClass('active');
//         $this.parent().addClass('active');
//     }
// });
// $('.core-header__bottom .menu-item .core-icon').on('click', function (e) {
//     var $this = $(this);
//     if($this.parent().hasClass('active')){
//         $this.parent().removeClass('active');
//         $('.core-header').removeClass('nav-active');
//         $('body').removeClass('scroll');
//     }else{
//         $('.menu-item').removeClass('active');
//         $this.parent().addClass('active');
//         $('.core-header').addClass('nav-active');
//         $('body').addClass('scroll');
//     }
// });
//
// $(document).mouseup(function (e){
//     var div = $('.menu-item, .menu-item ul');
//     if (!div.is(e.target)
//         && div.has(e.target).length === 0) {
//         div.removeClass('active');
//
//     }
// });
// $(window).on('scroll', function() {
//     var $this = $(this),
//         $header = $('.core-header');
//     if ($this.scrollTop() > 1) {
//         $header.addClass('scroll-nav');
//     }
//     else{
//         $header.removeClass('scroll-nav');
//     }
// });
// function footerNav() {
//    $('.core-footer__title').on('click', function (e) {
//        e.preventDefault();
//        var $this = $(this);
//        $this.next().slideToggle();
//    })
// }
// $(window).resize(function() {
//     if ($(window).width() < 576) {
//         footerNav();
//     }
// });
// if ($(window).width() < 576) {
//     footerNav();
// }
// //