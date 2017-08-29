"use strict";
$(document).ready(function() {
       //Registration Form with Click Validation
    $("#form7").alpaca({
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
                    "required": true,
                    "default": "orlando"
                }
            }
        },
        "options": {
            "form": {
                "buttons": {
                    "submit": {}
                },
                "toggleSubmitValidState": false
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
        },
        "postRender": function(renderedField) {

            var form = renderedField.form;
            if (form) {
                form.registerSubmitHandler(function(e, form) {

                    // validate the entire form (top control + all children)
                    form.validate(true);

                    // draw the validation state (top control + all children)
                    form.refreshValidationState(true);

                    // now display something
                    if (form.isFormValid()) {
                        var value = form.getValue();

                        alert("The form looks good!  Name: " + value.name + ", Birthday: " + value.birthday + ", Preference: " + value.preference);
                    } else {
                        alert("There are problems with the form.  Please make the any necessary corrections.");
                    }

                    e.stopPropagation();

                    return false;
                });
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
