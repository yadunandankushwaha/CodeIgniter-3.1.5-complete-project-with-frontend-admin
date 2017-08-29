"use strict";
$(document).ready(function() {
   //Clubs (View Selector)
    $("#selector1").alpaca({
        "schema": {
            "type": "string",
            "enum": [
                "bootstrap-edit",
                "bootstrap-edit-horizontal",
                "bootstrap-display",
                "bootstrap-create",
                "bootstrap-create-horizontal"
            ],
            "default": "bootstrap-edit"
        },
        "options": {
            "type": "select",
            "onFieldChange": function(e) {
                f(this.getValue());
            }
        }
    });

    var f = function(viewId) {
        $("#field1").empty();

        $("#field1").alpaca({
            "schema": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "birthday": {
                        "type": "string"
                    },
                    "team": {
                        "type": "string",
                        "enum": [
                            "Anzhi-Makhachkla",
                            "Arsenal",
                            "Atletico-Madrid",
                            "Barcelona",
                            "Bayern-Munich",
                            "Benfica",
                            "Borussia-Dortmund",
                            "Chelsea",
                            "Eintracht-Frankfurt",
                            "FC-Porto",
                            "FC-Twente",
                            "Juventus",
                            "Malaga",
                            "Manchester-City",
                            "Manchester-United",
                            "Marseille",
                            "Napoli",
                            "Paris-Saint-Germain",
                            "Real-Madrid",
                            "Shakhtar-Donetsk",
                            "Tottenham-Hotspur"
                        ]
                    }
                }
            },
            "options": {
                "fields": {
                    "name": {
                        "size": 20,
                        "label": "Name"
                    },
                    "birthday": {
                        "type": "date",
                        "size": 20,
                        "label": "Date of Birth"
                    },
                    "team": {
                        "type": "select",
                        "size": 20,
                        "label": "Team",
                        "helper": "Select your preferred team",
                        "onFieldChange": function(e) {
                            $("#logo1").empty();

                            var value = this.getValue();
                            if (value) {
                                var img = $("<img src='./../assets/images/clubs-team/" + value + ".png'>");
                                $("#logo1").append(img);
                            }
                        }

                    }
                }
            },
            "view": {
                "parent": viewId,
                "layout": {
                    "template": "./../assets/pages/json-forms/json/clubs-template.html",
                    "bindings": {
                        "name": "left",
                        "birthday": "left",
                        "team": "left"
                    }
                }
            }
        });
    };

    f("bootstrap-edit");   
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
