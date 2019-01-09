! function(e) {
    "use strict";
    e(window).on("load", function() {
        var o = e("body");
        o.addClass("page-loaded"), Appear.init(), o.on("click", 'a:not([target="_blank"]):not([href^="#"]):not([href^="mailto"]):not([class*="no-redirect"]):not([class*="lightbox-link"])', function(t) {
            if (!(t.altKey || t.ctrlKey || t.shiftKey || t.metaKey)) {
                t.preventDefault();
                var n = this.href;
                e("#preloader").one("transitionend webkitTransitionEnd oTransitionEnd", function() {
                    window.location = n
                }), o.removeClass("page-loaded")
            }
        })
    }), window.onpageshow = function(e) {
        e.persisted && window.location.reload()
    }, document.querySelector("nav.onepage") && new ScrollListener("nav.onepage a", {
        navigation: !0
    }), document.querySelectorAll(".parallax-folio-item figcaption").forEach(function(e) {
        new ScrollListener(e, {
            onAppear: function() {
                this.classList.add("visible")
            },
            offsetBottom: 200,
            offsetTop: 200
        })
    }), e("#header").on("click", ".mob-menu", function(o) {
        o.preventDefault(), e(".mob-menu").toggleClass("active"), e(".navigation").slideToggle()
    }), e("#header").on("click", "a", function(o) {
        if (!(window.innerWidth > 1024)) {
            var t = e(this).next("ul, .mega-menu");
            t.length && (o.preventDefault(), t.slideToggle())
        }
    }), e(".navigation.onepage").on("click", "a", function() {
        e(".mob-menu.active").click()
    });
    var o = document.querySelector(".scroll-down");
    o && (o.addEventListener("click", function(o) {
        o.preventDefault();
        var t = document.querySelector(".hero-fullscreen") || document.querySelector("section"),
            n = t ? t.getBoundingClientRect().bottom : window.innerHeight;
        e("html, body").animate({
            scrollTop: n
        }, 1e3, "easeInOutExpo")
    }), raf("scroll", function() {
        window.pageYOffset ? o.classList.add("scrolled") : o.classList.remove("scrolled")
    })), document.querySelectorAll(".hover-list-links").forEach(function(o) {
        document.body.classList.add("has-hover-list"), o.querySelectorAll(".item").forEach(function(o, t) {
            e(o).on("mouseenter touchstart", function() {
                document.body.classList.add("hover-item-active", "hover-links-active"), document.querySelector(".hover-list-media").swiper.slideTo(t)
            })
        }), e(o).on("mouseleave mouseout", function() {
            document.body.classList.remove("hover-links-active")
        })
    }), document.querySelector(".entrance") && document.body.classList.add("has-entrance");
    var t = document.querySelector(".background-scroll-blur");
    if (t) {
        var n = t.classList;
        window.raf("scroll", function() {
            window.pageYOffset > 50 ? n.add("blurred") : n.remove("blurred")
        })
    }
    var i = e(".sticky-header #main, .fixed-header #main"),
        r = e(".sticky-header.sticky-footer #main, .fixed-header.fixed-footer #main"),
        a = e(".hero-fullscreen"),
        c = e(".sticky-header.sticky-footer .hero-fullscreen, .fixed-header.fixed-footer .hero-fullscreen"),
        l = e(".hero-min-fullscreen"),
        s = e(".sticky-header.sticky-footer .hero-min-fullscreen, .fixed-header.fixed-footer .hero-min-fullscreen");

    function d() {
        var o = e(window).height(),
            t = e("#header").outerHeight() || 0,
            n = e("#footer").outerHeight() || 0;
        i.css("padding-top", t), r.css("padding-bottom", n), a.css("height", o - t), c.css("height", o - t - n), l.css("min-height", o - t), s.css("min-height", o - t - n)
    }
    d(), window.addEventListener("resize", d)
}(jQuery);