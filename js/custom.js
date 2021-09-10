/*! 
 
 =========================================================
 
 *FashionKart Javascript
 
 =========================================================
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
 */
/**<!-- jdcreators-->**/



(function ($) {

    //logoslider
    $('.logo_slider').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 0,
        dots: false,
        arrows: false,
        cssEase: 'linear',
        speed: 10000,
        initialSlide: 1,
        draggable: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //banner slider
    $('.banner_slide').slick({
        dots: false,
        arrows: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    //product_slider
    $('.product_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //team slider
    $('.team_area').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 586,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //Tab js
    $(".tab_content").hide();
    $(".tab_content:first").show();
    $("ul.tabs li").click(function () {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    $(".tab_drawer_heading").click(function () {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });
    $('ul.tabs li').last().addClass("tab_last");

    // Back to top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('#back-to-top').addClass('show');
                    } else {
                        $('#back-to-top').removeClass('show');
                    }
                };
        backToTop();
        $(window).on("scroll", function () {
            backToTop();
        });
        $('#back-to-top').on("click", function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    //collection_slider
    $('.collection_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider_nav'
    });

    $('.slider_nav').slick({
        vertical: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.collection_slider',
        arrows: false,
        dots: false,
        focusOnSelect: true
    });

    // Quantity Box
    $(".qty_number").append('<div class="inc button"><span>+</span></div><div class="dec button"><span>-</span></div>');
    $(".button").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if (oldValue === "") {
            oldValue = 0;
        }
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    // FAQ Accordion
    $('.accordion').find('.accordion-title').on('click', function () {
        // Adds Active Class
        $(this).toggleClass('active');
        // Expand or Collapse This Panel
        $(this).next().slideToggle('fast');
        // Hide The Other Panels
        $('.accordion-content').not($(this).next()).slideUp('fast');
        // Removes Active Class From Other Titles
        $('.accordion-title').not($(this)).removeClass('active');
    });

    // Count Time 
    function makeTimer() {
        var endTime = new Date("november  30, 2020 17:00:00 PDT");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function () {
        makeTimer();
    }, 300);

    //vertical-tab
    $(".tab_content_v").hide();
    $(".tab_content_v:first").show();

    /* if in tab mode */
    $("ul.tabs_v li").click(function () {

        $(".tab_content_v").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs_v li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading_v").removeClass("d_active");
        $(".tab_drawer_heading_v[rel^='" + activeTab + "']").addClass("d_active");

        /*$(".tabs").css("margin-top", function(){ 
         return ($(".tab_container").outerHeight() - $(".tabs").outerHeight() ) / 2;
         });*/
    });
    $(".tab_container_v").css("min-height", function () {
        return $(".tabs_v").outerHeight() + 50;
    });
    /* if in drawer mode */
    $(".tab_drawer_heading_v").click(function () {

        $(".tab_content_v").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading_v").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs_v li").removeClass("active");
        $("ul.tabs_v li[rel^='" + d_activeTab + "']").addClass("active");
    });

    //filter
    $(".filter-button").click(function () {
        $(this).addClass('active').siblings('.active').removeClass('active');
        var value = $(this).attr('data-filter');
        if (value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
    });

    $("#formButton").click(function () {
        $("#form1").toggle();
    });

    //colection filter 
    $(document).on('click', '.filter_menu a', function () {
        $('.collection_sidebar').animate({left: '0'});
        $('body').addClass('collection-filter');
    });
    $('.filter_colse,.filter-overlay').on("click", function () {
        var collection_sidebar = $('.collection_sidebar').outerWidth();
        $('.collection_sidebar').animate({left: -collection_sidebar});
        $('body').removeClass('collection-filter');
    });
    // Filter Toggle 
    $(document).on("click", ".category_close_icon", function (a) {
        $(this).parent('.category_list_title').siblings('.layer-filter').slideToggle();
        $(this).parent('.category_list_title').toggleClass('open-filter');
    });
    //load more
    $('ul.size li:lt(4),ul.men li:lt(4),ul.color li:lt(4),ul.women li:lt(4)').show();
    $('.loadMore').on("click", function () {
        $(this).parent("div").children("ul").children("li:lt(100)").show();
        $(this).hide();
    });

    //loadmore-1
    $(function () {
        $(".product-load-more .col-grid-box").slice(0, 8).show();
        $(".loadMore1").on('click', function (e) {
            e.preventDefault();
            $(".product-load-more .col-grid-box:hidden").slice(0, 4).slideDown();
            if ($(".product-load-more .col-grid-box:hidden").length === 0) {
                $(".loadMore1").text('no more products');
            }
        });
    });

    //mCustomScrollbar
    $('.mCustomScrollbar').mCustomScrollbar();

    //Collection Sidebar  Height
    var s_title = $('.sidebar_title').outerHeight();
    var s_height = $(window).height();
    var s_total = s_height - s_title;
    $('.filter_content').css('height', s_total - 60);

    //Sidebar
    $('.sidebarCollapse').on('click', function () {
        $('body').toggleClass('compact-menu');
        $('.sidebar').toggleClass('active');
    });

    $('.mobilesearch').on('click', function () {
        $('.search-form').toggleClass('d-none');

    });

    // Menu js
    $('.sidebar-menu .dropdown>a').on('click', function () {
        if ($(this).parent().hasClass('active'))
        {
            $(this).parent().find('>.sub-menu').slideUp('slow');
            $(this).parent().removeClass('active');
        } else
        {

            $(this).parent().find('>.sub-menu').slideDown('slow');
            $(this).parent().addClass('active');
        }

        return false;
    });




})(jQuery);


//mega menu
!(function (n, i, e, a) {
    ;
    (n.navigation = function (t, s) {
        var o = {
            responsive: !0,
            mobileBreakpoint: 991,
            showDuration: 200,
            hideDuration: 200,
            showDelayDuration: 0,
            hideDelayDuration: 0,
            submenuTrigger: "hover",
            effect: "fadeIn",
            submenuIndicator: !0,
            submenuIndicatorTrigger: !1,
            hideSubWhenGoOut: !0,
            visibleSubmenusOnMobile: !1,
            fixed: !1,
            overlay: !0,
            overlayColor: "rgba(0, 0, 0, 0.5)",
            hidden: !1,
            hiddenOnMobile: !1,
            offCanvasSide: "left",
            offCanvasCloseButton: !0,
            animationOnShow: "",
            animationOnHide: "",
            onInit: function () {},
            onLandscape: function () {},
            onPortrait: function () {},
            onShowOffCanvas: function () {},
            onHideOffCanvas: function () {}
        },
                r = this,
                u = Number.MAX_VALUE,
                d = 1,
                l = "click.nav touchstart.nav",
                f = "mouseenter focusin",
                c = "mouseleave focusout"
        r.settings = {}
        var t = (n(t), t)
        n(t).find(".nav-search").length > 0 &&
                n(t)
                .find(".nav-search")
                .find("form")
                .prepend(
                        "<span class='nav-search-close-button' tabindex='0'>&#10005;</span>"
                        ),
                (r.init = function () {
                    ;
                    (r.settings = n.extend({}, o, s)),
                            r.settings.offCanvasCloseButton &&
                            n(t)
                            .find(".nav-menus-wrapper")
                            .prepend(
                                    "<span class='nav-menus-wrapper-close-button'>&#10005;</span>"
                                    ),
                            "right" == r.settings.offCanvasSide &&
                            n(t)
                            .find(".nav-menus-wrapper")
                            .addClass("nav-menus-wrapper-right"),
                            r.settings.hidden &&
                            (n(t).addClass("navigation-hidden"),
                                    (r.settings.mobileBreakpoint = 99999)),
                            v(),
                            r.settings.fixed && n(t).addClass("navigation-fixed"),
                            n(t)
                            .find(".nav-toggle")
                            .on("click touchstart", function (n) {
                                n.stopPropagation(),
                                        n.preventDefault(),
                                        r.showOffcanvas(),
                                        s !== a && r.callback("onShowOffCanvas")
                            }),
                            n(t)
                            .find(".nav-menus-wrapper-close-button")
                            .on("click touchstart", function () {
                                r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas")
                            }),
                            n(t)
                            .find(".nav-search-button, .nav-search-close-button")
                            .on("click touchstart keydown", function (i) {
                                i.stopPropagation(), i.preventDefault()
                                var e = i.keyCode || i.which
                                "click" === i.type ||
                                        "touchstart" === i.type ||
                                        ("keydown" === i.type && 13 == e)
                                        ? r.toggleSearch()
                                        : 9 == e && n(i.target).blur()
                            }),
                            n(t).find(".megamenu-tabs").length > 0 && y(),
                            n(i).resize(function () {
                        r.initNavigationMode(C()), O(), r.settings.hiddenOnMobile && m()
                    }),
                            r.initNavigationMode(C()),
                            r.settings.hiddenOnMobile && m(),
                            s !== a && r.callback("onInit")
                })
        var h = function () {
            n(t)
                    .find(".nav-submenu")
                    .hide(0),
                    n(t)
                    .find("li")
                    .removeClass("focus")
        },
                v = function () {
                    n(t)
                            .find("li")
                            .each(function () {
                                n(this).children(".nav-dropdown,.megamenu-panel").length > 0 &&
                                        (n(this)
                                                .children(".nav-dropdown,.megamenu-panel")
                                                .addClass("nav-submenu"),
                                                r.settings.submenuIndicator &&
                                                n(this)
                                                .children("a")
                                                .append(
                                                        "<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"
                                                        ))
                            })
                },
                m = function () {
                    n(t).hasClass("navigation-portrait")
                            ? n(t).addClass("navigation-hidden")
                            : n(t).removeClass("navigation-hidden")
                }
        ;
        (r.showSubmenu = function (i, e) {
            C() > r.settings.mobileBreakpoint &&
                    n(t)
                    .find(".nav-search")
                    .find("form")
                    .fadeOut(),
                    "fade" == e
                    ? n(i)
                    .children(".nav-submenu")
                    .stop(!0, !0)
                    .delay(r.settings.showDelayDuration)
                    .fadeIn(r.settings.showDuration)
                    .removeClass(r.settings.animationOnHide)
                    .addClass(r.settings.animationOnShow)
                    : n(i)
                    .children(".nav-submenu")
                    .stop(!0, !0)
                    .delay(r.settings.showDelayDuration)
                    .slideDown(r.settings.showDuration)
                    .removeClass(r.settings.animationOnHide)
                    .addClass(r.settings.animationOnShow),
                    n(i).addClass("focus")
        }),
                (r.hideSubmenu = function (i, e) {
                    "fade" == e
                            ? n(i)
                            .find(".nav-submenu")
                            .stop(!0, !0)
                            .delay(r.settings.hideDelayDuration)
                            .fadeOut(r.settings.hideDuration)
                            .removeClass(r.settings.animationOnShow)
                            .addClass(r.settings.animationOnHide)
                            : n(i)
                            .find(".nav-submenu")
                            .stop(!0, !0)
                            .delay(r.settings.hideDelayDuration)
                            .slideUp(r.settings.hideDuration)
                            .removeClass(r.settings.animationOnShow)
                            .addClass(r.settings.animationOnHide),
                            n(i)
                            .removeClass("focus")
                            .find(".focus")
                            .removeClass("focus")
                })
        var p = function () {
            n("body").addClass("no-scroll"),
                    r.settings.overlay &&
                    (n(t).append("<div class='nav-overlay-panel'></div>"),
                            n(t)
                            .find(".nav-overlay-panel")
                            .css("background-color", r.settings.overlayColor)
                            .fadeIn(300)
                            .on("click touchstart", function (n) {
                                r.hideOffcanvas()
                            }))
        },
                g = function () {
                    n("body").removeClass("no-scroll"),
                            r.settings.overlay &&
                            n(t)
                            .find(".nav-overlay-panel")
                            .fadeOut(400, function () {
                                n(this).remove()
                            })
                }
        ;
        (r.showOffcanvas = function () {
            p(),
                    "left" == r.settings.offCanvasSide
                    ? n(t)
                    .find(".nav-menus-wrapper")
                    .css("transition-property", "left")
                    .addClass("nav-menus-wrapper-open")
                    : n(t)
                    .find(".nav-menus-wrapper")
                    .css("transition-property", "right")
                    .addClass("nav-menus-wrapper-open")
        }),
                (r.hideOffcanvas = function () {
                    n(t)
                            .find(".nav-menus-wrapper")
                            .removeClass("nav-menus-wrapper-open")
                            .on(
                                    "webkitTransitionEnd moztransitionend transitionend oTransitionEnd",
                                    function () {
                                        n(t)
                                                .find(".nav-menus-wrapper")
                                                .css("transition-property", "none")
                                                .off()
                                    }
                            ),
                            g()
                }),
                (r.toggleOffcanvas = function () {
                    C() <= r.settings.mobileBreakpoint &&
                            (n(t)
                                    .find(".nav-menus-wrapper")
                                    .hasClass("nav-menus-wrapper-open")
                                    ? (r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas"))
                                    : (r.showOffcanvas(), s !== a && r.callback("onShowOffCanvas")))
                }),
                (r.toggleSearch = function () {
                    "none" ==
                            n(t)
                            .find(".nav-search")
                            .find("form")
                            .css("display")
                            ? (n(t)
                                    .find(".nav-search")
                                    .find("form")
                                    .fadeIn(200),
                                    n(t)
                                    .find(".nav-search")
                                    .find("input")
                                    .focus())
                            : (n(t)
                                    .find(".nav-search")
                                    .find("form")
                                    .fadeOut(200),
                                    n(t)
                                    .find(".nav-search")
                                    .find("input")
                                    .blur())
                }),
                (r.initNavigationMode = function (i) {
                    r.settings.responsive
                            ? (i <= r.settings.mobileBreakpoint &&
                                    u > r.settings.mobileBreakpoint &&
                                    (n(t)
                                            .addClass("navigation-portrait")
                                            .removeClass("navigation-landscape"),
                                            S(),
                                            s !== a && r.callback("onPortrait")),
                                    i > r.settings.mobileBreakpoint &&
                                    d <= r.settings.mobileBreakpoint &&
                                    (n(t)
                                            .addClass("navigation-landscape")
                                            .removeClass("navigation-portrait"),
                                            k(),
                                            g(),
                                            r.hideOffcanvas(),
                                            s !== a && r.callback("onLandscape")),
                                    (u = i),
                                    (d = i))
                            : (n(t).addClass("navigation-landscape"),
                                    k(),
                                    s !== a && r.callback("onLandscape"))
                })
        var b = function () {
            n("html").on("click.body touchstart.body", function (i) {
                0 === n(i.target).closest(".navigation").length &&
                        (n(t)
                                .find(".nav-submenu")
                                .fadeOut(),
                                n(t)
                                .find(".focus")
                                .removeClass("focus"),
                                n(t)
                                .find(".nav-search")
                                .find("form")
                                .fadeOut())
            })
        },
                C = function () {
                    return (
                            i.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
                            )
                },
                w = function () {
                    n(t)
                            .find(".nav-menu")
                            .find("li, a")
                            .off(l)
                            .off(f)
                            .off(c)
                },
                O = function () {
                    if (C() > r.settings.mobileBreakpoint) {
                        var i = n(t).outerWidth(!0)
                        n(t)
                                .find(".nav-menu")
                                .children("li")
                                .children(".nav-submenu")
                                .each(function () {
                                    n(this)
                                            .parent()
                                            .position().left +
                                            n(this).outerWidth() >
                                            i
                                            ? n(this).css("right", 0)
                                            : n(this).css("right", "auto")
                                })
                    }
                },
                y = function () {
                    function i(i) {
                        var e = n(i)
                                .children(".megamenu-tabs-nav")
                                .children("li"),
                                a = n(i).children(".megamenu-tabs-pane")
                        n(e).on("click.tabs touchstart.tabs", function (i) {
                            i.stopPropagation(),
                                    i.preventDefault(),
                                    n(e).removeClass("active"),
                                    n(this).addClass("active"),
                                    n(a)
                                    .hide(0)
                                    .removeClass("active"),
                                    n(a[n(this).index()])
                                    .show(0)
                                    .addClass("active")
                        })
                    }
                    if (n(t).find(".megamenu-tabs").length > 0)
                        for (var e = n(t).find(".megamenu-tabs"), a = 0; a < e.length; a++)
                            i(e[a])
                },
                k = function () {
                    w(),
                            h(),
                            navigator.userAgent.match(/Mobi/i) ||
                            navigator.maxTouchPoints > 0 ||
                            "click" == r.settings.submenuTrigger
                            ? n(t)
                            .find(".nav-menu, .nav-dropdown")
                            .children("li")
                            .children("a")
                            .on(l, function (e) {
                                if (
                                        (r.hideSubmenu(
                                                n(this)
                                                .parent("li")
                                                .siblings("li"),
                                                r.settings.effect
                                                ),
                                                n(this)
                                                .closest(".nav-menu")
                                                .siblings(".nav-menu")
                                                .find(".nav-submenu")
                                                .fadeOut(r.settings.hideDuration),
                                                n(this).siblings(".nav-submenu").length > 0)
                                        ) {
                                    if (
                                            (e.stopPropagation(),
                                                    e.preventDefault(),
                                                    "none" ==
                                                    n(this)
                                                    .siblings(".nav-submenu")
                                                    .css("display"))
                                            )
                                        return (
                                                r.showSubmenu(
                                                        n(this).parent("li"),
                                                        r.settings.effect
                                                        ),
                                                O(),
                                                !1
                                                )
                                    if (
                                            (r.hideSubmenu(n(this).parent("li"), r.settings.effect),
                                                    "_blank" === n(this).attr("target") ||
                                                    "blank" === n(this).attr("target"))
                                            )
                                        i.open(n(this).attr("href"))
                                    else {
                                        if (
                                                "#" === n(this).attr("href") ||
                                                "" === n(this).attr("href") ||
                                                "javascript:void(0)" === n(this).attr("href")
                                                )
                                            return !1
                                        i.location.href = n(this).attr("href")
                                    }
                                }
                            })
                            : n(t)
                            .find(".nav-menu")
                            .find("li")
                            .on(f, function () {
                                r.showSubmenu(this, r.settings.effect), O()
                            })
                            .on(c, function () {
                                r.hideSubmenu(this, r.settings.effect)
                            }),
                            r.settings.hideSubWhenGoOut && b()
                },
                S = function () {
                    w(),
                            h(),
                            r.settings.visibleSubmenusOnMobile
                            ? n(t)
                            .find(".nav-submenu")
                            .show(0)
                            : (n(t)
                                    .find(".submenu-indicator")
                                    .removeClass("submenu-indicator-up"),
                                    r.settings.submenuIndicator &&
                                    r.settings.submenuIndicatorTrigger
                                    ? n(t)
                                    .find(".submenu-indicator")
                                    .on(l, function (i) {
                                        return (
                                                i.stopPropagation(),
                                                i.preventDefault(),
                                                r.hideSubmenu(
                                                        n(this)
                                                        .parent("a")
                                                        .parent("li")
                                                        .siblings("li"),
                                                        "slide"
                                                        ),
                                                r.hideSubmenu(
                                                        n(this)
                                                        .closest(".nav-menu")
                                                        .siblings(".nav-menu")
                                                        .children("li"),
                                                        "slide"
                                                        ),
                                                "none" ==
                                                n(this)
                                                .parent("a")
                                                .siblings(".nav-submenu")
                                                .css("display")
                                                ? (n(this).addClass("submenu-indicator-up"),
                                                        n(this)
                                                        .parent("a")
                                                        .parent("li")
                                                        .siblings("li")
                                                        .find(".submenu-indicator")
                                                        .removeClass("submenu-indicator-up"),
                                                        n(this)
                                                        .closest(".nav-menu")
                                                        .siblings(".nav-menu")
                                                        .find(".submenu-indicator")
                                                        .removeClass("submenu-indicator-up"),
                                                        r.showSubmenu(
                                                                n(this)
                                                                .parent("a")
                                                                .parent("li"),
                                                                "slide"
                                                                ),
                                                        !1)
                                                : (n(this)
                                                        .parent("a")
                                                        .parent("li")
                                                        .find(".submenu-indicator")
                                                        .removeClass("submenu-indicator-up"),
                                                        void r.hideSubmenu(
                                                                n(this)
                                                                .parent("a")
                                                                .parent("li"),
                                                                "slide"
                                                                ))
                                                )
                                    })
                                    : n(t)
                                    .find(".nav-menu, .nav-dropdown")
                                    .children("li")
                                    .children("a")
                                    .on(l, function (e) {
                                        if (
                                                (e.stopPropagation(),
                                                        e.preventDefault(),
                                                        r.hideSubmenu(
                                                                n(this)
                                                                .parent("li")
                                                                .siblings("li"),
                                                                r.settings.effect
                                                                ),
                                                        r.hideSubmenu(
                                                                n(this)
                                                                .closest(".nav-menu")
                                                                .siblings(".nav-menu")
                                                                .children("li"),
                                                                "slide"
                                                                ),
                                                        "none" ==
                                                        n(this)
                                                        .siblings(".nav-submenu")
                                                        .css("display"))
                                                )
                                            return (
                                                    n(this)
                                                    .children(".submenu-indicator")
                                                    .addClass("submenu-indicator-up"),
                                                    n(this)
                                                    .parent("li")
                                                    .siblings("li")
                                                    .find(".submenu-indicator")
                                                    .removeClass("submenu-indicator-up"),
                                                    n(this)
                                                    .closest(".nav-menu")
                                                    .siblings(".nav-menu")
                                                    .find(".submenu-indicator")
                                                    .removeClass("submenu-indicator-up"),
                                                    r.showSubmenu(n(this).parent("li"), "slide"),
                                                    !1
                                                    )
                                        if (
                                                (n(this)
                                                        .parent("li")
                                                        .find(".submenu-indicator")
                                                        .removeClass("submenu-indicator-up"),
                                                        r.hideSubmenu(n(this).parent("li"), "slide"),
                                                        "_blank" === n(this).attr("target") ||
                                                        "blank" === n(this).attr("target"))
                                                )
                                            i.open(n(this).attr("href"))
                                        else {
                                            if (
                                                    "#" === n(this).attr("href") ||
                                                    "" === n(this).attr("href") ||
                                                    "javascript:void(0)" === n(this).attr("href")
                                                    )
                                                return !1
                                            i.location.href = n(this).attr("href")
                                        }
                                    }))
                }
        ;
        (r.callback = function (n) {
            s[n] !== a && s[n].call(t)
        }),
                r.init()
    }),
            (n.fn.navigation = function (i) {
                return this.each(function () {
                    if (a === n(this).data("navigation")) {
                        var e = new n.navigation(this, i)
                        n(this).data("navigation", e)
                    }
                })
            })
})(jQuery, window, document)

        ;
(function ($) {
    "use strict"

    var $window = $(window)

    if ($.fn.navigation) {
        $("#navigation1").navigation()
        $("#always-hidden-nav").navigation({
            hidden: true
        })
    }

    $window.on("load", function () {
        $("#preloader").fadeOut("slow", function () {
            $(this).remove()
        })
    })
})(jQuery)


//accordian_js
$(document).ready(function () {
    $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                    .siblings(".content")
                    .slideUp(200);
            $(".set > a i")
                    .removeClass("fa-minus")
                    .addClass("fa-plus");
        } else {
            $(".set > a i")
                    .removeClass("fa-minus")
                    .addClass("fa-plus");
            $(this)
                    .find("i")
                    .removeClass("fa-plus")
                    .addClass("fa-minus");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this)
                    .siblings(".content")
                    .slideDown(200);
        }
    });
});



(function ($) {
//rangeslider
    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var w1 = 40;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var w2 = 40;
        var r2 = x2 + w2;

        if (r1 < x2 || x1 > r2)
            return false;
        return true;

    }
    // slider call
    $('#slider').slider({
        range: true,
        min: 0,
        max: 135,
        values: [0, 100],
        slide: function (event, ui) {

            $('.ui-slider-handle:eq(0) .price-range-min').html('$' + ui.values[ 0 ]);
            $('.ui-slider-handle:eq(1) .price-range-max').html('$' + ui.values[ 1 ]);
            $('.price-range-both').html('<i>$' + ui.values[ 0 ] + ' - </i>$' + ui.values[ 1 ]);

            //

            if (ui.values[0] === ui.values[1]) {
                $('.price-range-both i').css('display', 'none');
                $('.ui-slider-handle').css('margin-left', '-0.8em');
            } else {
                $('.price-range-both i').css('display', 'inline');
                $('.ui-slider-handle').css('margin-left', '0');
            }

            //

            if (collision($('.price-range-min'), $('.price-range-max')) === true) {
                $('.price-range-min, .price-range-max').css('opacity', '0');
                $('.price-range-both').css('display', 'block');
                $('.ui-slider-handle').css('margin-left', '0');
            } else {
                $('.price-range-min, .price-range-max').css('opacity', '1');
                $('.price-range-both').css('display', 'none');
                $('.ui-slider-handle').css('margin-left', '-0.8em');
            }

        }
    });
    $('.ui-slider-range').append('<span class="price-range-both value"><i>$' + $('#slider').slider('values', 0) + ' - </i>' + $('#slider').slider('values', 1) + '</span>');
    $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">$' + $('#slider').slider('values', 0) + '</span>');
    $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">$' + $('#slider').slider('values', 1) + '</span>');

});

//delete product
jQuery(document).on("click", ".td.remove_cart", function () {
    jQuery(this).parents("div.tr").remove();
    jQuery(".cart_subtotal.text-right").remove();
});

//table clone
jQuery(document).ready(function () {
    jQuery(".save-button").click(function () {
        jQuery(".cart_table").clone().appendTo("#save-later");
    });
});