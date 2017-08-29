"use strict";
$(document).ready(function() {
      //Registration Form with Automatic Validation
    $("#form6").alpaca({
        "view": "bootstrap-create",
        "schema": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "required": true
                },
                "birthday": {
                    "type": "text",
                    "format": "date",
                    "required": true
                },
                "preference": {
                    "type": "text",
                    "enum": ["orlando", "tokyo", "amsterdam"],
                    "default": "orlando",
                    "required": true
                }
            }
        },
        "options": {
            "form": {
                "buttons": {
                    "submit": {}
                }
            },
            "fields": {
                "name": {
                    "label": "Your Name"
                },
                "birthday": {
                    "label": "Your Birthday"
                },
                "preference": {
                    "label": "Your Destination",
                    "type": "select",
                    "optionLabels": ["Orlando, USA", "Tokyo, Japan", "Amsterdam, Netherlands"]
                }
            }
        }
    });

        //Load Resources Using XHR
    i18next.use(window.i18nextXHRBackend).init({
        debug: !1,
        fallbackLng: !1,
        backend: {
            loadPath: "./../assets/locales/{{lng}}/{{ns}}.json"
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
