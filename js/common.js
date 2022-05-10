$(document).ready(function(){
    $('.page').delay(500).queue(function(){
        $(this).addClass('page--loaded').clearQueue();
    });
    // responsive menu
    $('.btn-nav').on('click', function(){
        $(this).toggleClass('btn-nav--active');
        $(this).find('.btn-nav__line').toggleClass('btn-nav__line--active');
        var target = $(this).data("target");
        $(target).toggleClass('visible');
    });
    $('.btn-nav').on('click', function(){
        if (!$("body, .page__row--nav").hasClass("on")) {
            $('body, .page__row--nav').addClass('on');
         }
         else {
            $('body, .page__row--nav').removeClass('on');
         }
    });
    $('.btn-nav--active').on('click', function(){
        if (!($("body, .page__row--nav".hasClass("on"))) && ($('.modal').is(':hidden'))) {
              $('body, .page__row--nav').removeClass('on');
          }
         else {
            $('body, .page__row--nav').addClass('on');
         }
    });
    
    // fixed nav scroll
    function FixNav() {
        if ( $( window ).scrollTop() > 0 ) {
            $(".page__row--nav").addClass("page__row--nav-fixed");
            $(".modal").addClass("modal--nav-fixed");
        }
        else {
            $(".page__row--nav").removeClass("page__row--nav-fixed");
            $(".modal").removeClass("modal--nav-fixed");
        }

        setTimeout( FixNav, 100 );
    }

    $( FixNav );
    
    // mask
    $('input[type="tel"]').mask('8-999-999-99-99');
    
    // fullpage
    
    if (document.documentElement.clientWidth > 1023) {
        var setAllowScrolling = true;
    }
    if (document.documentElement.clientWidth < 1024) {
        var setAllowScrolling = false;
    }
    var myFullpage = new fullpage('#page__full', {
        anchors: ['acquaintance', 'advantages', 'work', 'customers', 'team', 'contacts'],
        sectionsColor: ['transparent', '#1A1A1A', 'transparent', '#1A1A1A', 'transparent', 'transparent'],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: false,
        showActiveTooltip: false,
        slidesNavigation: true,
        sectionSelector: '.page__row--section',
        slideSelector: '.slide',
        lazyLoading: false,
        menu: '.sidebar__menu, .nav__menu',
        responsiveWidth: 1199,
        scrollBar: true,
        scrollOverflow: false,
        scrollOverflowReset: false,
        fixedElements: '.page__row--nav, .page__row--sidebar',
	    scrollOverflowOptions: {
            preventDefault: false,
            disablePointer: false,
        },
        normalScrollElements: '.nav__block--nav-menu, .modal',
        fitToSection: true,
        keyboardScrolling: false,
        bigSectionsDestination: true,
        verticalCentered: false,
        setAllowScrolling: setAllowScrolling,
        hybrid: false,
        css3: false,
        resize: false,
        paddingTop: 100,
        afterLoad: function(anchor, index){
            var menu = $('.sidebar__menu');
            var menuItem = $('.sidebar__menu').find('li');
            
            if ($(menuItem).last().hasClass("active")) {
                menu.children(":first").addClass("activeFirst");
            }
            else {
                menu.children(":first").removeClass("activeFirst");
            }
        }

    });
    $(document).on('click', '.page__arrowDown', function(){
        fullpage_api.moveSectionDown();
    });
    $(document).on('click', '.page__arrowUp', function(){
        fullpage_api.moveTo(1);
    });
    
    // carousel
    $('.intro__items').owlCarousel({
        items: 1,
        nav: false,
        loop: true,
        margin: 0,
        center: false,
        autoWidth: false,
        dots: true,
        dotData: true,
        dotsData: true,
        dotsContainer: '#intro-dots',
        mouseDrag: false,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
		autoplay: true,
		autoplayTimeout: 5500,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        lazyLoad: true,
    });
    $('.cooperation__items').owlCarousel({
        nav: true,
        loop: false,
        margin: 0,
        center: false,
        autoWidth: false,
        dots: false,
        mouseDrag: false,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
		autoplayTimeout: 5000,
        responsive : {
            1200: {
                items: 3,
            },
            767: {
                items: 3,
                nav: false,
                dots: true,
            },
            565: {
                items: 2,
                nav: false,
                dots: true,
            },
            0: {
                items: 1,
                nav: false,
                dots: true,
            }
        }
    });
    $('.work__items').owlCarousel({
        items: 1,
        nav: false,
        loop: false,
        margin: 0,
        smartSpeed: 500,
        center: false,
        dots: true,
        dotData: true,
        dotsData: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
		autoplay: false,
		autoplayTimeout: 5000,
        responsive : {
            1199: {
                autoWidth: true,
            },
            0: {
                autoWidth: false,
            }
        }
    });
    $('.trust__items').owlCarousel({
        loop: false,
        stagePadding: 115,
        margin: 0,
        smartSpeed: 500,
        center: false,
        autoWidth: false,
        dots: true,
        mouseDrag: false,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
		autoplay: false,
		autoplayTimeout: 5000,
        responsive : {
            1200: {
                items: 3,
                stagePadding: 115,
                nav: true,
                navContainer: '#trust-nav',
                dotsContainer: '#trust-dots',
            },
            767: {
                items: 4,
                stagePadding: 15,
                nav: false,
            },
            565: {
                items: 3,
                stagePadding: 15,
                nav: false,
            },
            0: {
                items: 2,
                stagePadding: 15,
                nav: false,
            }
        }
    });
    $('.team__items').owlCarousel({
        loop: false,
        margin: 0,
        smartSpeed: 500,
        center: false,
        dots: true,
        autoWidth: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
		autoplay: false,
		autoplayTimeout: 5000,
        responsive : {
            1199: {
                items: 4,
                stagePadding: 115,
                nav: true,
                navContainer: '#team-nav',
                dotsContainer: '#team-dots',
                autoWidth: true,
            },
            991: {
                items: 4,
                stagePadding: 85,
                nav: false,
            },
            767: {
                items: 4,
                stagePadding: 22,
                nav: false,
            },
            480: {
                items: 3,
                stagePadding: 22,
                nav: false,
            },
            0: {
                items: 2,
                stagePadding: 12,
                nav: false,
            }
        }
    });
    $('.logos__items').owlCarousel({
        items: 1,
        stagePadding: 0,
        nav: true,
        navText: ["<span>Предыдущий</span>","<span>Следующий</span>"],
        loop: false,
        margin: 0,
        center: false,
        autoWidth: false,
        dots: false,
        mouseDrag: false,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
		autoplay: false,
		autoplayTimeout: 5000,
        URLhashListener: true,
        startPosition: 'URLHash',
    });
    
    // Modal Window
    var open_modal = $('.btn--modal');
    var close = $('.modal__close, .close');
    var modal = $('.modal');

     open_modal.click( function(event){
         event.preventDefault();
         var div = $(this).data('id-modal');
         var target = $(this).attr('href');
         window.location.href = target;
         if(div != '#logos') {
             if ($("body, .page__row--nav").hasClass("on")) {
                $('body, .page__row--nav').addClass('on');
             }
             else if (!$("body, .page__row--nav").hasClass("on")) {
                  $('body, .page__row--nav').addClass('on');
              }
             else {
                $('body, .page__row--nav').removeClass('on');
             }
         }
         $(div)
             .css('display', 'block') 
             .animate({opacity: 1, top: '0'}, 200);
     });

     close.click( function(){
        if (($("body, .page__row--nav").hasClass("on")) && ($(".nav__block--nav-menu").hasClass("visible"))) {
            $('body, .page__row--nav').addClass('on');
        }
        else if($("body, .page__row--nav").hasClass("on")) {
            $("body, .page__row--nav").removeClass('on');
        }
        var modal = $(this).parents('.modal');
        modal
         .animate({opacity: 0, top: '0'}, 200,
             function(){
                 $(this).css('display', 'none');
                 $(modal).find('.modal__overlay').fadeOut(400);
             }
         );
     });
    
    // toTop
    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() != 0) {
                $('.menu__link--up').fadeIn();
            } else {
                $('.menu__link--up').fadeOut();
            }

        });
        $('.menu__item--up .menu__link--up').click(function() {
            event.preventDefault();
            $('body,html').animate({scrollTop:0},800);
        });
    });
    
    // read more button
    $('.content__read-more').on('click', function(){
      $(this).hide().siblings('.content__text').addClass('content__text--default');
    });
    
    // hover team marker
    $(".team__link").hover(function(){
        $(".box__block--team .marker--rotate").removeClass('marker--hidden').addClass('marker--visible');
        $(".box__block--team .marker--default").removeClass('marker--visible').addClass('marker--hidden');
    }, function(){
        $(".box__block--team .marker--rotate").removeClass('marker--visible').addClass('marker--hidden');
        $(".box__block--team .marker--default").removeClass('marker--hidden').addClass('marker--visible');
    });
    
    // добавление класса при прокрутке к секции
    $(window).scroll(function(){
      var scrolltop = $(this).scrollTop();
      $('.page__row--section').each(function(){
        if(scrolltop >= $(this).offset().top - 180) {
          $(this).addClass('animated');
        }
      });
    });
    
    //fullscreen
});