(function($) {
    "use strict";
    
    $(document).ready(function($) {
        
        /* =========================================================== */
        /* 00. Back To Top Button
        /* =========================================================== */
        function auoraBackToTop() {
            var btt = $('#back-to-top');
            $( window ).scroll( function () {
                if ( $( this ).scrollTop() > 130 ) {
                    btt.fadeIn();
                } else {
                    btt.fadeOut();
                }
            } );
            btt.on('click', function () {
                $( "html, body" ).animate( { scrollTop: 0 }, 100, 'easeInOutExpo' );
                return false;
            } );
        }
        auoraBackToTop();

        /* =========================================================== */
        /* 00. Fluidvids Video Embeds
        /* =========================================================== */
        function auoraFluidVideo() {
            fluidvids.init({
                selector: ['iframe'],
                players: ['www.youtube.com', 'player.vimeo.com']
            });
        }
        auoraFluidVideo();

        /* =========================================================== */
        /* 00. Post Audio Player
        /* =========================================================== */
        function auoraPostAudioPlayer() {
            var players = $('audio.post-audio');
        
            if (players.length) {
                players.mediaelementplayer({
                    audioWidth: '100%'
                });
            }
        }
        auoraPostAudioPlayer();

        /* =========================================================== */
        /* 00. Post Slider
        /* =========================================================== */
        function auoraPostSlider() {
            var sliders = $('.post-slider');
            if (sliders.length) {
                sliders.slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    dots: false,
                    draggable: true,
                    arrows: true,
                    prevArrow: '<i class="ri-arrow-right-s-line"></i>',
                    nextArrow: '<i class="ri-arrow-left-s-line"></i>'
                });
            }
        }
        auoraPostSlider();

        /* =========================================================== */
        /* 00. Header Navigation
        /* =========================================================== */
        function auoraInitHeaderNavigation() {
            var headerNavigation = $('#navigation ul.main-menu');
            headerNavigation.superfish({
                delay:          500,
                hoverClass:     'sfHover',
                animation:     {opacity: "show"},   
                speed:          200,
                speedOut:       0,
                cssArrows:      false
            });
        }
        auoraInitHeaderNavigation();

        /* =========================================================== */
        /* 00. Header Navigation Position
        /* =========================================================== */
        var wapoMainWindowWidth,
            subMenuExist,
            subMenuWidth,
            subMenuOffset,
            newSubMenuPosition;

        function auoraHeaderSubmenuPosition() {
            wapoMainWindowWidth = $(window).width();
            $('#navigation ul li ul').mouseover(function(){     
                subMenuExist = $(this).find('.sub-menu').length;            
                if( subMenuExist > 0){
                    subMenuWidth = $(this).find('.sub-menu').width();
                    subMenuOffset = $(this).find('.sub-menu').parent().offset().left + subMenuWidth;
                    // If Sub Menu Is Off Screen, Give New Position
                    if((subMenuOffset + subMenuWidth) > wapoMainWindowWidth){                  
                        newSubMenuPosition = subMenuWidth + 3;
                        $(this).find('.sub-menu').css({
                            left: -newSubMenuPosition,
                            top: '0',
                        });
                    } else {
                        $(this).find('.sub-menu').css({
                            left: newSubMenuPosition,
                            top: '0',
                        });
                    }
                }
             });
        }
        auoraHeaderSubmenuPosition();

        /* =========================================================== */
        /* 00. Offcanvas Sidemenu
        /* =========================================================== */
        function auoraOffcanvasSideMenu() {
            var offcanvasMenuButtonOpener = $('a.header-offcanvas-opener'),
                offcanvasMenuBodyClass = 'offcanvas-side-menu-opened';
            
            $('a.header-offcanvas-opener, a.header-offcanvas-close-icon').on('click', function (e) {
                e.preventDefault();
        
                if (!offcanvasMenuButtonOpener.hasClass('opened')) {
                    offcanvasMenuButtonOpener.addClass('opened');
                    $('body').addClass(offcanvasMenuBodyClass);
                } else {
                    offcanvasMenuButtonOpener.removeClass('opened');
                    $('body').removeClass(offcanvasMenuBodyClass);
                }
            });
        }
        auoraOffcanvasSideMenu();

        /* =========================================================== */
        /* 00. Header - Minimal & Slide
        /* =========================================================== */
        var headerMinimal = $( "#header-minimal" );
        function auoraHeaderToggleIconClass() {
            if ( headerMinimal.hasClass( "header-minimal-content" ) ) {
                $( ".toggle-icon-class" ).removeClass( "toggle-open" ).addClass( "toggle-close" );
                headerMinimal.find('.header-minimal-navigation-wrapper-inner').fadeIn( 400 );
            } else {
                $( ".toggle-icon-class" ).removeClass( "toggle-close" ).addClass( "toggle-open" );
                headerMinimal.find('.header-minimal-navigation-wrapper-inner').fadeOut( 400 );
            }
        }
        auoraHeaderToggleIconClass();

        $( document ).on('click', function (){
            if ( headerMinimal.hasClass( "header-minimal-content" ) ) {
                headerMinimal.removeClass( "header-minimal-content" );
                auoraHeaderToggleIconClass();
            }
        } );
        
        $(  ".toggle-icon"  ).on('click', function ( event ){
            event.preventDefault();
            if ( headerMinimal.hasClass( "header-minimal-content" ) ) {
                headerMinimal.removeClass( "header-minimal-content" );
            } else {
                event.stopPropagation();
            }
            headerMinimal.addClass( "header-minimal-content" );
            auoraHeaderToggleIconClass();
        } );
        
        $(  ".header-minimal-navigation-wrapper-inner"  ).on('click', function ( event ){
            event.stopPropagation();
        } );

        /* =========================================================== */
        /* 00. Sticky Header
        /* =========================================================== */
        function auoraStickyHeader() {
            var headerStickyBodyClass = 'header-is-sticky';
            
            if ($('body').hasClass(headerStickyBodyClass)) {
                $("#site-header.header-standard, #site-header.header-divided, #site-header.header-centered").hcSticky({
                  className: 'is_stuck',
                });
            } 
        }
        auoraStickyHeader();

        /* =========================================================== */
        /* 00. Mobile Navigation
        /* =========================================================== */
        function auoraInitMobileNavigation() {
            var navigationOpener = $('.mobile-header-navigation-btn'),
                mobileNavigation = $('.mobile-header-navigation');

            navigationOpener.on('click', function (){
                mobileNavigation.stop(true,true).slideToggle(300, 'easeOutCubic');
                return false;
            });

            $('.mobile-header-navigation .container ul li').each(function(){
                if($(this).find('> ul').length > 0) {
                     $(this).addClass('has-ul');
                     $(this).find('> a').append('<i class="arrow_carrot-down"></i>');
                }
            });

            $('.mobile-header-navigation .container ul li:has(">ul") > a i').on('click', function (e){
                $(this).parent().parent().toggleClass('open');
                $(this).parent().parent().find('> ul').stop(true,true).slideToggle(300, 'easeOutCubic');
                return false;
            });
        }
        auoraInitMobileNavigation();

        /* =========================================================== */
        /* 00. Header Search - Slide From Header Bottom
        /* =========================================================== */
        function auoraHeaderSearchSlideFromHB() {
            var searchOpener = $('.header-search-slide-header-bottom');
            $( document ).on('click', function() {
                searchOpener.hide();
            } );
            searchOpener.on('click', function(e) {
                e.stopPropagation();
            } );
            $( '.header-search-opener' ).on('click', function(e) {
                e.stopPropagation();
                if ( searchOpener.css( 'display' ) === 'block' ) {
                    searchOpener.hide();
                    $( '.header-search-slide-header-bottom .header-search-form input.header-search-input' ).blur();
                } else {
                    searchOpener.show();
                    $( '.header-search-slide-header-bottom .header-search-form input.header-search-input' ).focus();
                }
            } );
        }
        auoraHeaderSearchSlideFromHB();

        /* =========================================================== */
        /* 00. Header Search - Slide From Window Top
        /* =========================================================== */
        function auoraHeaderSearchSlideFromWT() {
            if ( $('body').hasClass( 'header-search-slides-from-window-top' ) ) {
                var searchOpener = $('a.header-search-opener');

                if ( searchOpener.length > 0 ) {
                    var searchForm = $('.header-search-slide-window-top'),
                        searchClose = $('.header-search-close');

                    searchOpener.on('click', function(e) {
                        e.preventDefault();

                        if ( searchForm.height() === 0) {
                            $('.header-search-slide-window-top input[type="text"]').focus();
                             $('body').addClass('header-search-open');
                        } else {
                             $('body').removeClass('header-search-open');
                        }

                        $(window).scroll(function() {
                            if ( searchForm.height() !== '0' && $(window).scrollTop() > 50 ) {
                                 $('body').removeClass('header-search-open');
                            }
                        });

                        searchClose.on('click', function(e){
                            e.preventDefault();
                            $('body').removeClass('header-search-open');
                        });
                    });
                }
            }
        }
        auoraHeaderSearchSlideFromWT();

        /* =========================================================== */
        /* 00. Header Search - FullScreen
        /* =========================================================== */
        function auoraHeaderSearchFullscreen() {
            if ( $('body').hasClass( 'header-search-fullscreen' ) ) {
                var searchOpener = $('a.header-search-opener');
                
                if (searchOpener.length > 0) {

                    var searchHolder = $('.header-search-fullscreen-holder'),
                        searchClose = $('.header-search-close');

                    searchOpener.on('click', function (e) {
                        e.preventDefault();

                        if (searchHolder.hasClass('header-search-animate')) {
                            $('body').removeClass('header-search-fullscreen-opened header-search-fade-out');
                            $('body').removeClass('header-search-fade-in');
                            searchHolder.removeClass('header-search-animate');

                            setTimeout(function () {
                                searchHolder.find('.header-search-field').val('');
                                searchHolder.find('.header-search-field').blur();
                            }, 300);

                        } else {
                            $('body').addClass('header-search-fullscreen-opened header-search-fade-in');
                            $('body').removeClass('header-search-fade-out');
                            searchHolder.addClass('header-search-animate');

                            setTimeout(function () {
                                searchHolder.find('.header-search-field').focus();
                            }, 900);
                        }

                        searchClose.on('click', function (e) {
                            e.preventDefault();
                            $('body').removeClass('header-search-fullscreen-opened header-search-fade-in');
                            $('body').addClass('header-search-fade-out');
                            searchHolder.removeClass('header-search-animate');

                            setTimeout(function () {
                                searchHolder.find('.header-search-field').val('');
                                searchHolder.find('.header-search-field').blur();
                            }, 300);
                        });

                        //Close on click away
                        $(document).mouseup(function (e) {
                            var container = $(".header-search-form-holder-inner");

                            if (!container.is(e.target) && container.has(e.target).length === 0) {
                                e.preventDefault();
                                $('body').removeClass('header-search-fullscreen-opened header-search-fade-in');
                                $('body').addClass('header-search-fade-out');
                                searchHolder.removeClass('header-search-animate');

                                setTimeout(function () {
                                    searchHolder.find('.header-search-field').val('');
                                    searchHolder.find('.header-search-field').blur();
                                }, 300);
                            }
                        });

                        //Close on escape
                        $(document).keyup(function (e) {
                            if (e.keyCode === 27) { //KeyCode for ESC button is 27
                                $('body').removeClass('header-search-fullscreen-opened header-search-fade-in');
                                $('body').addClass('header-search-fade-out');
                                searchHolder.removeClass('header-search-animate');

                                setTimeout(function () {
                                    searchHolder.find('.header-search-field').val('');
                                    searchHolder.find('.header-search-field').blur();
                                }, 300);

                            }
                        });
                    });

                    //Text input focus change
                    var inputSearchField = $('.header-search-fullscreen-holder .header-search-field'),
                        inputSearchLine = $('.header-search-fullscreen-holder .header-search-field-holder .header-search-line');

                    inputSearchField.focus(function () {
                        inputSearchLine.css('width', '100%');
                    });

                    inputSearchField.blur(function () {
                        inputSearchLine.css('width', '0');
                    });
                }
            }
        }
        auoraHeaderSearchFullscreen();

        /* =========================================================== */
        /* 00. Init Product Quantity Buttons
        /* =========================================================== */
        function auoraInitQuantityButtons() {
            $(document).on('click', '.woo-quantity-minus, .woo-quantity-plus', function (e) {
                e.stopPropagation();
                
                var button = $(this),
                    inputField = button.siblings('.woo-quantity-input'),
                    step = parseFloat(inputField.data('step')),
                    max = parseFloat(inputField.data('max')),
                    minus = false,
                    inputValue = parseFloat(inputField.val()),
                    newInputValue;
                
                if (button.hasClass('woo-quantity-minus')) {
                    minus = true;
                }
                
                if (minus) {
                    newInputValue = inputValue - step;
                    if (newInputValue >= 1) {
                        inputField.val(newInputValue);
                    } else {
                        inputField.val(0);
                    }
                } else {
                    newInputValue = inputValue + step;
                    if (max === undefined) {
                        inputField.val(newInputValue);
                    } else {
                        if (newInputValue >= max) {
                            inputField.val(max);
                        } else {
                            inputField.val(newInputValue);
                        }
                    }
                }
                
                inputField.trigger('change');
            });
        }
        auoraInitQuantityButtons();

    });
    
})(jQuery);

/* =========================================================== */
/* 00. Preloader
/* =========================================================== */
(function ($) {
    "use strict";
    
    $(document).ready(function () {
        themePreloader.init();
    });

    $(window).on('elementor/frontend/init', function() {
        var isEditMode = Boolean(elementorFrontend.isEditMode());
        if (isEditMode) {
            themePreloader.init(isEditMode);
        }
    });
    
    var themePreloader = {
        init: function (isEditMode) {
            this.holder = $('#site-preloader');
            
            if (this.holder.length) {
                themePreloader.animatePreloader(this.holder, isEditMode);
            }
        },
        animatePreloader: function ($holder, isEditMode) {
            $(window).on('load', function () {
                themePreloader.fadeOutPreloader($holder);
            });

            if (isEditMode) {
                themePreloader.fadeOutPreloader($holder);
            }
        },
        fadeOutPreloader: function ($holder, speed, delay, easing) {
            speed = speed ? speed : 600;
            delay = delay ? delay : 0;
            easing = easing ? easing : 'swing';

            $holder.delay(delay).fadeOut(speed, easing);

            $(window).on('bind', 'pageshow', function (event) {
                if (event.originalEvent.persisted) {
                    $holder.fadeOut(speed, easing);
                }
            });
        }
    }
    
})(jQuery);