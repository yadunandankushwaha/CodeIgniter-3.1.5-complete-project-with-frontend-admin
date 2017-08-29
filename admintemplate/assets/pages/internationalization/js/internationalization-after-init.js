"use strict";
$(document).ready(function() {
    //after init
    i18next.use(window.i18nextXHRBackend).init({
        debug: !1,
        fallbackLng: !1,
        backend: {
            loadPath: "../assets/locales/{{lng}}/{{ns}}.json"
        },
        returnObjects: !0
    }, function(err, t) {
        jqueryI18next.init(i18next, $)
    }), i18next.on("initialized", function(options) {
        i18next.changeLanguage("en", function(err, t) {
            $(".main-menu-content").localize()
        })
    }), $("#lng-after-init").on("click", ".lng-nav li a", function() {
        var $this = $(this),
            selected_lng = $this.data("lng");
        i18next.changeLanguage(selected_lng, function(err, t) {
            $(".main-menu-content").localize()
        }), $this.parent("li").siblings("li").children("a").removeClass("active"), $this.addClass("active"), $("#lng-after-init").find(".lng-dropdown a").removeClass("active");
        var drop_lng = $("#lng-after-init").find('.lng-dropdown a[data-lng="' + selected_lng + '"]').addClass("active");
        $("#lng-after-init #dropdown-active-item").html(drop_lng.html())
    }), $("#lng-after-init").on("click", ".lng-dropdown a", function() {
        var $this = $(this),
            selected_lng = $this.data("lng");
        i18next.changeLanguage(selected_lng, function(err, t) {
            $(".main-menu-content").localize()
        }), $("#lng-after-init .lng-nav li a").removeClass("active"), $('#lng-after-init .lng-nav li a[data-lng="' + selected_lng + '"]').addClass("active"), $("#lng-after-init").find(".lng-dropdown a").removeClass("active"), $this.addClass("active"), $("#lng-after-init #dropdown-active-item").html($this.html())
    })
});
