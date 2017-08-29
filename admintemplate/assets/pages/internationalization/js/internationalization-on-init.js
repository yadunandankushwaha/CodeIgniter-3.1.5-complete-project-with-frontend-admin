"use strict";
$(document).ready(function() {
    //on init
    i18next.use(window.i18nextXHRBackend).init({
        debug: !1,
        lng: "en",
        fallbackLng: !1,
        backend: {
            loadPath: "../assets/locales/{{lng}}/{{ns}}.json"
        },
        returnObjects: !0
    }, function(err, t) {
        jqueryI18next.init(i18next, $)
    }), $("#lng-onit").on("click", ".lng-nav li a", function() {
        var $this = $(this),
            selected_lng = $this.data("lng");
        i18next.changeLanguage(selected_lng, function(err, t) {
            $(".main-menu-content").localize()
        }), $this.parent("li").siblings("li").children("a").removeClass("active"), $this.addClass("active"), $("#lng-onit").find(".lng-dropdown a").removeClass("active");
        var drop_lng = $("#lng-onit").find('.lng-dropdown a[data-lng="' + selected_lng + '"]').addClass("active");
        $("#lng-onit #dropdown-active-item").html(drop_lng.html())
    }), $("#lng-onit").on("click", ".lng-dropdown a", function() {
        var $this = $(this),
            selected_lng = $this.data("lng");
        i18next.changeLanguage(selected_lng, function(err, t) {
            $(".main-menu-content").localize()
        }), $("#lng-onit .lng-nav li a").removeClass("active"), $('#lng-onit .lng-nav li a[data-lng="' + selected_lng + '"]').addClass("active"), $("#lng-onit").find(".lng-dropdown a").removeClass("active"), $this.addClass("active"), $("#lng-onit #dropdown-active-item").html($this.html())
    })
});
