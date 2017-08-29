/*var width = $(window).width(), height = $(window).height();
alert('width : ' +width + 'height : ' + height);*/
"use strict";
$(document).ready(function() {
    var $window = $(window);
    //add id to main menu for mobile menu start  
    var getBody = $("body");
    var bodyClass = getBody[0].className;
    $(".main-menu").attr('id', bodyClass);
    //add id to main menu for mobile menu end

    //loader start
    $('.theme-loader').fadeOut(1000);
    //loader end

    setMenu();
    MenuLayout();
    setMenuLayout();

    // $(window).on('resize', function() {
    //     setMenu();
    //     setMenuLayout();

    // });

    //mobile menu start
    function setMenu() {
        var a = $(window).height() - 140;
        $('.main-menu-content').css('min-height', a);
        if (Modernizr.cssscrollbar) {
            $(".main-menu-content").slimScroll({
                height: a,
                allowPageScroll: false,
                wheelStep: 5,
                color: '#fff',
                animate: true
            });
        }
        var mainMenuID = $(".main-menu").attr('id');
        if ($window.width() < 768) {
            $("body").removeClass().addClass("header-fixed");
        } else if ($window.width() > 768 && $window.width() < 992) {
            $("body").removeClass().addClass("menu-compact").addClass("menu-expanded");
            var c = $window.height();
            $(".main-menu-content").slimScroll({ destroy: true });
            $(".main-menu-content").css('height', '100%');
            $(".main-menu").css('min-height', c);
            $("body").addClass("menu-static");
        } else if ($window.width() > 992) {
            $("body").removeClass().addClass(mainMenuID);
            if ($("body").hasClass("header-fixed")) {
                $("body").addClass("menu-hide");
            } else if ($("body").hasClass("box-layout")) {
                $("body").addClass("container");
            } else if ($("body").hasClass("menu-compact")) {
                var c = $window.height();
                $(".main-menu-content").slimScroll({ destroy: true });
                $(".main-menu-content").css('height', '100%');
                $(".main-menu").css('min-height', c);
                $("body").addClass("menu-static");
            } else {

                $("body").addClass("menu-expanded");
            }
        }
    };
    //mobile menu end


    //menu scrolling end
    //box layout & overlay & menu-sidebar menu start

    function MenuLayout() {
        if ($("body").hasClass("box-layout")) {
            $("body").addClass("container");
        } else if ($("body").hasClass("header-fixed")) {
            $("body").addClass("menu-hide");
        } else if ($("body").hasClass("menu-sidebar")) {
            $(window).on('scroll', function() {
                var scrollWindow = $(window).scrollTop();
                if (scrollWindow == 0) {
                    $(".main-menu").css('top', '');
                } else {
                    if ($("body").hasClass("menu-collapsed")) {
                        return;
                    } else {
                        $(".main-menu").css('top', '-10px');
                        var a = $(window).height() - 70;
                        $('.main-menu-content').css('min-height', a);
                        if (Modernizr.cssscrollbar) {
                            $(".main-menu-content").slimScroll({
                                height: a,
                                allowPageScroll: false,
                                wheelStep: 5,
                                color: '#fff',
                                animate: true
                            });
                        }
                    }
                }
            });
        } else if ($("body").hasClass("menu-static")) {
            $(window).on('scroll', function() {
                var scrollWindow = $(window).scrollTop();
                if (scrollWindow == 0) {
                    if ($("body").hasClass("menu-collapsed")) {
                        return;
                    } else {
                        var a = $(window).height() - 140;
                        $('.main-menu-content').css('min-height', a);
                        if (Modernizr.cssscrollbar) {
                            $(".main-menu-content").slimScroll({
                                height: a,
                                allowPageScroll: false,
                                wheelStep: 5,
                                color: '#fff',
                                animate: true
                            });
                        }
                    }


                } else {
                    $(".main-menu-content").slimScroll({ destroy: true });
                    $(".main-menu-content").css('height', '');
                }
            });
        } else if ($("body").hasClass("horizontal-icon-fixed")) {
            $(window).on('scroll', function() {
                var scrollWindow = $(window).scrollTop();
                if (scrollWindow == 0) {
                    $(".main-menu").css('top', '56px');
                } else {
                    $(".main-menu").css('top', 0);
                }
            });
        }
    }
    //box layout & overlay & menu-sidebar menu end

    //menu scrolling start
    function setMenuLayout() {
        if ($("body").hasClass("menu-bottom")) {
            var a = $(window).height() - 142;
            $('.main-menu-content').css('min-height', a);
            if (Modernizr.cssscrollbar) {
                $(".main-menu-content").slimScroll({
                    height: a,
                    allowPageScroll: false,
                    wheelStep: 5,
                    animate: true,
                    color: '#fff'
                });
            }
        } else if ($("body").hasClass("horizontal-fixed") || $("body").hasClass("horizontal-static") || $("body").hasClass("horizontal-icon") || $("body").hasClass("horizontal-icon-fixed") || $("body").hasClass("menu-compact")) {
            $(".main-menu-content").slimScroll({ destroy: true });
            $('.main-menu-content').css('min-height', '');
            $('.main-menu-content').css('height', '');
            $('.main-menu-content').css('overflow', '');
        } else if ($("body").hasClass("header-fixed") && $window.width() < 768) {
            $(".main-menu-content").slimScroll({ destroy: true });
            $(".main-menu-content").css('height', '');
            $('.main-menu-content').css('min-height', '');
            $(".main-menu").css('position', 'absolute');
        } else {
            var a = $(window).height() - 140;
            $('.main-menu-content').css('min-height', a);
            if (Modernizr.cssscrollbar) {
                $(".main-menu-content").slimScroll({
                    height: a,
                    allowPageScroll: false,
                    wheelStep: 5,
                    color: '#fff',
                    animate: true
                });
            }
        }
    };


    // card js start
    var emailbody = $(window).height();
    $('.user-body').css('min-height', emailbody);
    $(".card-header-right .icofont-close-circled").on('click', function() {
        var $this = $(this);
        $this.parents('.card').animate({
            'opacity': '0',
            '-webkit-transform': 'scale3d(.3, .3, .3)',
            'transform': 'scale3d(.3, .3, .3)'
        });

        setTimeout(function() {
            $this.parents('.card').remove();
        }, 800);
    });

    $(".card-header-right .icofont-rounded-down").on('click', function() {
        var $this = $(this);
        var port = $($this.parents('.card'));
        var card = $(port).children('.card-block').slideToggle();
        $(this).toggleClass("icon-up").fadeIn('slow');
    });
    $(".icofont-refresh").on('mouseenter mouseleave', function() {
        $(this).toggleClass("rotate-refresh").fadeIn('slow');
    });
    $("#more-details").on('click', function() {
        $(".more-details").slideToggle(500);
    });
    $(".mobile-options").on('click', function() {
        $(".navbar-container .nav-right").slideToggle('slow');
    });
    // card js end

    // Menu layout js start    

    // sidebar collapse js start
    $("#collapse-menu").on('click', function() {
        collapseMenu();
    });
    $("#mobile-collapse").on('click', function() {
        $(".main-menu-content").slimScroll({ destroy: true });
        $(".main-menu-content").css('height', '');
        $('.main-menu-content').css('min-height', '');
        $(".main-menu").css('position', 'absolute');
        collapseMenu();

    });

    function collapseMenu() {
        if ($("body").hasClass("menu-hide")) {
            $("body").removeClass("menu-hide");
            $("body").addClass("menu-show");
        } else if ($("body").hasClass("menu-show")) {
            $("body").removeClass("menu-show");
            $("body").addClass("menu-hide");
        } else if ($("body").hasClass("menu-expanded")) {
            $(".main-menu-content").slimScroll({ destroy: true });
            $(".main-menu-content").css('height', '100%');
            $("body").removeClass("menu-expanded");
            $("body").addClass("menu-collapsed").addClass("menu-static");
        } else if ($("body").hasClass("menu-collapsed")) {
            $("body").addClass("menu-expanded");
            $("body").removeClass("menu-collapsed").removeClass("menu-static");
            var a = $(window).height() - 140;
            $('.main-menu-content').css('min-height', a);
            if (Modernizr.cssscrollbar) {
                $(".main-menu-content").slimScroll({
                    height: a,
                    allowPageScroll: false,
                    wheelStep: 5,
                    color: '#fff',
                    animate: true
                });
            }
        }

    };
    // sidebar collapse js end    

    //menu collapse start

    if ($(".main-navigation .nav-item").hasClass("has-class")) {
        $(".tree-1").addClass("open");
    }
    if ($(".nav-sub-item").hasClass("has-class")) {
        $(".tree-2").addClass("open");
    }
    //main li click 
    $(".main-navigation .nav-item").on('click', function() {
        if ($("body").hasClass("horizontal-fixed") || $("body").hasClass("horizontal-static") || $("body").hasClass("horizontal-icon") || $("body").hasClass("horizontal-icon-fixed") || $("body").hasClass("menu-collapsed")) {
            return;
        } else {
            if ($(this).hasClass("has-class") && $(this).children(".tree-1").hasClass("open")) {
                $(this).children("ul").slideToggle();
                $(".tree-1").removeClass("open");
                $(this).children("ul").removeClass("open");
                $(this).removeClass("has-class");
            } else {
                $(".nav-item ul").css('display', 'none');
                $(this).children("ul").slideToggle();
                $(".tree-1").removeClass("open");
                $(".main-navigation .nav-item").removeClass("open").removeClass("has-class");
                $(this).addClass("has-class");
                $(this).children("ul").addClass("open");
            }
        }

    });

    //sub li click (tree-2)
    $(".nav-sub-item").on('click', function(e) {
        e.stopPropagation();
        if ($("body").hasClass("horizontal-fixed") || $("body").hasClass("horizontal-static") || $("body").hasClass("horizontal-icon") || $("body").hasClass("horizontal-icon-fixed") || $("body").hasClass("menu-collapsed")) {
            return;
        } else {
            if ($(this).hasClass("has-class") && $(this).children('.tree-2').hasClass("open")) {
                $(this).children("ul").slideToggle();
                $(this).children('.tree-2').removeClass("open");
                $(this).removeClass("has-class");
                $(this).children("a").children("i.icon-arrow-down").toggleClass("icon-up");
            } else {
                $(".nav-sub-item ul").css('display', 'none');
                $(this).children("ul").slideToggle();
                $(".nav-sub-item").removeClass("open").removeClass("has-class");
                $(this).addClass("has-class");
                $(this).children('.tree-2').addClass("open");
                $(this).children("a").children("i.icon-arrow-down").toggleClass("icon-up");
            }
        }
    });
    //sub li click (tree-3)
    $(".tree-2 .nav-sub-item-3").on('click', function(e) {
        e.stopPropagation();
        if ($("body").hasClass("horizontal-fixed") || $("body").hasClass("horizontal-static") || $("body").hasClass("horizontal-icon") || $("body").hasClass("horizontal-icon-fixed") || $("body").hasClass("menu-collapsed")) {
            return;
        } else {
            if ($(this).hasClass("has-class") && $(this).children('.tree-3').hasClass("open")) {
                $(this).children("ul").slideToggle();
                $(this).children('.tree-3').removeClass("open");
                $(this).removeClass("has-class");
                $(this).children("a").children("i.icon-arrow-down").toggleClass("icon-up");
            } else {
                $(".tree-2 .nav-sub-item-3 ul").css('display', 'none');
                $(this).children("ul").slideToggle();
                $(".tree-2 .nav-sub-item-3").removeClass("open").removeClass("has-class");
                $(this).addClass("has-class");
                $(this).children('.tree-3').addClass("open");
                $(this).children("a").children("i.icon-arrow-down").toggleClass("icon-up");
            }
        }
    });

    //sub li click (tree-4)
    $(".tree-3 .nav-sub-item-4").on('click', function(e) {
        e.stopPropagation();
        if ($("body").hasClass("horizontal-fixed") || $("body").hasClass("horizontal-static") || $("body").hasClass("horizontal-icon") || $("body").hasClass("horizontal-icon-fixed") || $("body").hasClass("menu-collapsed")) {
            return;
        } else {
            if ($(this).hasClass("has-class") && $(this).children('.tree-4').hasClass("open")) {
                $(this).children("ul").slideToggle();
                $(this).children('.tree-4').removeClass("open");
                $(this).removeClass("has-class");
                $(this).children("a").children("i.icon-arrow-down").toggleClass("icon-up");
            } else {
                $(".tree-3 .nav-sub-item-4 ul").css('display', 'none');
                $(this).children("ul").slideToggle();
                $(".tree-3 .nav-sub-item-4").removeClass("open").removeClass("has-class");
                $(this).addClass("has-class");
                $(this).children('.tree-4').addClass("open");
                $(this).children("a").children("i.icon-arrow-down").toggleClass("icon-up");
            }
        }
    });
    //menu collapse end




    //Menu layout end

    /*chatbar js start*/
    /*chat box scroll*/
    var a = $(window).height() - 50;
    $(".main-friend-list").slimScroll({
        height: a,
        allowPageScroll: false,
        wheelStep: 5,
        color: '#1b8bf9'
    });

    // search
    $("#search-friends").on("keyup", function() {
        var g = $(this).val().toLowerCase();
        $(".userlist-box .media-body .chat-header").each(function() {
            var s = $(this).text().toLowerCase();
            $(this).closest('.userlist-box')[s.indexOf(g) !== -1 ? 'show' : 'hide']();
        });
    });

    // open chat box
    $('.displayChatbox').on('click', function() {
        var options = {
            direction: 'right'
        };
        $('.showChat').toggle('slide', options, 500);
    });

    // $(document).on('click',function(e){

    //         
    //       $('.showChat').hide();

    //  });

    //open friend chat
    $('.userlist-box').on('click', function() {
        var options = {
            direction: 'right'
        };
        $('.showChat_inner').toggle('slide', options, 500);
    });
    //back to main chatbar
    $('.back_chatBox').on('click', function() {
        var options = {
            direction: 'right'
        };
        $('.showChat_inner').toggle('slide', options, 500);
        $('.showChat').css('display', 'block');
    });
    // /*chatbar js end*/

    //Language chage dropdown start
    i18next.use(window.i18nextXHRBackend).init({
                debug: !1,
                fallbackLng: !1,
                backend: {
                    loadPath: "assets/locales/{{lng}}/{{ns}}.json"
                },
                returnObjects: !0
            },
            function(err, t) {
                jqueryI18next.init(i18next, $)
            }),
        $(".lng-dropdown a").on("click", function() {

            var $this = $(this),
                selected_lng = $this.data("lng");
            i18next.changeLanguage(selected_lng, function(err, t) {
                    $(".main-menu-content").localize()
                }),
                $this.parent("li").siblings("li").children("a").removeClass("active"), $this.addClass("active"), $(".lng-dropdown a").removeClass("active");
            var drop_lng = $('.lng-dropdown a[data-lng="' + selected_lng + '"]').addClass("active");
            $(".lng-dropdown #dropdown-active-item").html(drop_lng.html())
        })
        //Language chage dropdown end
});

/* Search header start */
(function() {
    var isAnimating;
    var morphSearch = document.getElementById('morphsearch'),
        input = morphSearch.querySelector('input.morphsearch-input'),
        ctrlClose = morphSearch.querySelector('span.morphsearch-close'),
        isOpen = isAnimating = false,
        isHideAnimate = morphsearch.querySelector('.morphsearch-form'),
        // show/hide search area
        toggleSearch = function(evt) {
            // return if open and the input gets focused
            if (evt.type.toLowerCase() === 'focus' && isOpen) return false;

            var offsets = morphsearch.getBoundingClientRect();
            if (isOpen) {
                classie.remove(morphSearch, 'open');

                // trick to hide input text once the search overlay closes
                // todo: hardcoded times, should be done after transition ends
                //if( input.value !== '' ) {
                setTimeout(function() {
                    classie.add(morphSearch, 'hideInput');
                    setTimeout(function() {
                        classie.add(isHideAnimate, 'p-absolute');
                        classie.remove(morphSearch, 'hideInput');
                        input.value = '';
                    }, 300);
                }, 500);
                //}

                input.blur();
            } else {
                classie.remove(isHideAnimate, 'p-absolute');
                classie.add(morphSearch, 'open');
            }
            isOpen = !isOpen;
        };

    // events
    input.addEventListener('focus', toggleSearch);
    ctrlClose.addEventListener('click', toggleSearch);
    // esc key closes search overlay
    // keyboard navigation events
    document.addEventListener('keydown', function(ev) {
        var keyCode = ev.keyCode || ev.which;
        if (keyCode === 27 && isOpen) {
            toggleSearch(ev);
        }
    });
    var morphSearch_search = document.getElementsByClassName('morphsearch-search');
    $(".morphsearch-search").on('click', toggleSearch);

    /***** for demo purposes only: don't allow to submit the form *****/
    morphSearch.querySelector('button[type="submit"]').addEventListener('click', function(ev) {
        ev.preventDefault();
    });
})();
/* Search header end */

// toggle full screen
function toggleFullScreen() {
    var a = $(window).height() - 10;
    $('.main-menu-content').css('min-height', a);
    if (Modernizr.cssscrollbar) {
        $(".main-menu-content").slimScroll({
            height: a,
            allowPageScroll: false,
            wheelStep: 5,
            color: '#fff',
            animate: true
        });
    }
    if (!document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

//light box
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

/* --------------------------------------------------------
        Color picker - demo only
        --------------------------------------------------------   */
(function() {
    $('<div class="color-picker"><a href="#" class="handle"><i class="icofont icofont-color-bucket"></i></a><div class="settings-header"><h3>Setting panel</h3></div><div class="section"><h3 class="color">Normal color schemes:</h3><div class="colors"><a href="#" class="color-1" ></a><a href="#" class="color-2" ></a><a href="#" class="color-3" ></a><a href="#" class="color-4" ></a><a href="#" class="color-5"></a><a href="#" class="color-6"></a></div></div></div>').appendTo($('body'));
})();

/*Gradient Color*/


/*Normal Color */
$(".color-1").click(function() {
    $("#color").attr("href", "assets/css/color/color-1.css");
    return false;
});
$(".color-2").click(function() {
    $("#color").attr("href", "assets/css/color/color-2.css");
    return false;
});
$(".color-3").click(function() {
    $("#color").attr("href", "assets/css/color/color-3.css");
    return false;
});
$(".color-4").click(function() {
    $("#color").attr("href", "assets/css/color/color-4.css");
    return false;
});
$(".color-5").click(function() {
    $("#color").attr("href", "assets/css/color/color-5.css");
    return false;
});
$(".color-6").click(function() {
    $("#color").attr("href", "assets/css/color/color-6.css");
    return false;
});


$('.color-picker').animate({
    right: '-239px'
});

$('.color-picker a.handle').click(function(e) {
    e.preventDefault();
    var div = $('.color-picker');
    if (div.css('right') === '-239px') {
        $('.color-picker').animate({
            right: '0px'
        });
    } else {
        $('.color-picker').animate({
            right: '-239px'
        });
    }
});
