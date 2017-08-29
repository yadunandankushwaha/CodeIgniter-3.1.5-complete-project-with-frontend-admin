"use strict";
$(document).ready(function() {
    // New Customer Form
    $("#form1").alpaca({
        "optionsSource": "./../assets/pages/json-forms/json/options.json",
        "schemaSource": "./../assets/pages/json-forms/json/schema.json",
        "view": "bootstrap-create"
    });    
        //Load Resources Using XHR
    i18next.use(window.i18nextXHRBackend).init({
        debug: !1,
        fallbackLng: !1,
        backend: {
            loadPath: "../assets/locales/{{lng}}/{{ns}}.json"
        },
        returnObjects: !0
    }, 
    function(err, t) {
        jqueryI18next.init(i18next, $)
    }), 
     $(".lng-dropdown a").on("click", function() {
        var $this = $(this),
            selected_lng1 = $this.data("lng");
        i18next.changeLanguage(selected_lng1, function(err, t) {
            $(".main-menu-content").localize()
        })
    })
});
