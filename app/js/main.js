$(function(){

  $('.menu__btn, .menu__link').on('click', function () {
    $('.menu__box').toggleClass('menu__box--active');
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.wrapper').toggleClass('wrapper__fixed');
  });

  $('.menu a, .btn, .logo').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body, html').animate({ scrollTop: top }, 1500);
  });

  $('.reviews__slider').slick({
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M21.1968 29.0492L13.4508 21.3033C12.8497 20.699 12.8497 19.7231 13.4508 19.1189L21.1968 11.3729C21.7761 10.8757 22.6328 10.8757 23.2122 11.3729C23.8614 11.9291 23.9372 12.9082 23.3811 13.5573L16.7351 20.2033L23.3811 26.8648C23.9822 27.469 23.9822 28.445 23.3811 29.0492C22.7769 29.6503 21.8009 29.6503 21.1968 29.0492Z" fill="#C2C2C2"/></svg ></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M18.6352 11.4508L26.3811 19.1967C26.9822 19.801 26.9822 20.7769 26.3811 21.3811L18.6352 29.1271C18.0558 29.6243 17.1991 29.6243 16.6197 29.1271C15.9706 28.5709 15.8947 27.5918 16.4509 26.9427L23.0968 20.2967L16.4508 13.6352C15.8497 13.031 15.8497 12.055 16.4508 11.4508C17.055 10.8497 18.031 10.8497 18.6352 11.4508Z" fill="#C2C2C2"/></svg ></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
          autoplay: true
        }
      }
    ]
  });

  $('.tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');

    $('.tabs__content').removeClass('tabs__content--active');
    $($(this).attr('href')).addClass('tabs__content--active');
  });

  $('.slide__thumb').slick({
    asNavFor: '.slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slideToScroll: 1,
    vertical: true,
    draggable: false
  });

  $('.slide__big').slick({
    asNavFor: '.slide__thumb',
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          draggable: true,
        }
      },
    ]
  });


  $('.select-style').styler();


});

document.getElementById('team').onclick = function () {
  window.location.href = 'team.html';
};
document.getElementById('home').onclick = function () {
  window.location.href = 'index.html';
};
document.getElementById('services').onclick = function () {
  window.location.href = 'services.html';
};



