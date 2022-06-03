$(document).ready(function(){
    $('.carousel__inner').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
            arrows: false,
            }
        }]
    });

    //Goods tabs
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      $('.catalog-item__link').each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          });
      });

      //Modal windows
    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.button_cat-item').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        });
    });

    function validateForm(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Имя не может быть короче {0} символов")
                },
                
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, ввдедите свой e-mail",
                    email: "Некорректный email"
                },
            },
        });
    };
    validateForm('#consultation-form');
    validateForm('#consultation form');
    validateForm('#order form');

});