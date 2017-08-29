"use strict";
$(document).ready(function() {
    // simple form
    // Initial data
    var data = {
        "name": "Sara Trivedi",
        "age": 25,
        "phone": "404-101-2022",
        "country": "usa"
    };
    // JSON-schema for the form
    var schema = {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "age": {
                "type": "number",
                "minimum": 0,
                "maximum": 50
            },
            "phone": {
                "type": "string"
            },
            "country": {
                "type": "string",
                "required": true
            }
        }
    };
    // Layout options for the form
    var options = {
        "fields": {
            "name": {
                "type": "text",
                "label": "Name"
            },
            "age": {
                "type": "number",
                "label": "Age"
            },
            "phone": {
                "type": "phone",
                "label": "Phone"
            },
            "country": {
                "type": "country",
                "label": "Country"
            }
        },
        "form": {
            "attributes": {
                "method": "POST",
                "action": "http://httpbin.org/post",
                "enctype": "multipart/form-data"
            },
            "buttons": {
                "submit": {
                    "value": "Submit the Form",
                     "click": function() {
                        var value = this.getValue();
                        alert(JSON.stringify(value, null, "  "));
                    }
                }
            }
        }
    };
    //  Render the form.
    $("#form").alpaca({
        "data": data,
        "schema": schema,
        "options": options,
        "view": "bootstrap-edit-horizontal"
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
