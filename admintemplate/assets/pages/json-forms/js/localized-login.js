"use strict";
$(document).ready(function() {
      //Localized Login Demo
 /*   Alpaca.setDefaultLocale("es_ES");*/
    $("#form5").alpaca({
        "schema": {
            "type": "object",
            "properties": {
                "username": {
                    "type": "string",
                    "title": "Username",
                    "required": true,
                    "pattern": "^[a-zA-Z0-9_]+$"
                },
                "password": {
                    "type": "string",
                    "title": "Password",
                    "required": true,
                    "pattern": "^[a-zA-Z0-9_]+$"
                }
            }
        },
        "options": {
            "renderForm": true,
            "form": {
                "attributes": {
                    "action": "http://www.alpacajs.org/endpoints/echo.php",
                    "method": "post"
                },
                "buttons": {
                    "submit": {}
                }
            },
            "fields": {
                "username": {
                    "size": 20,
                    "label": "Nombre de usuario"
                },
                "password": {
                    "type": "password",
                    "size": 20,
                    "label": "Contraseña"
                }
            }
        },
        "data": {
            "username": "1234",
            "password": "@@@"
        },
        "view": {
            "parent": "bootstrap-create-horizontal",
            "fields": {
                "/username": {
                    "messages": {
                        "es_ES": {
                            "invalidPattern": "Nombre de usuario no válido!"
                        }
                    }
                }
            }
        },
        "postRender": function(renderedField) {
            var form = renderedField.form;
            if (form) {
                form.registerSubmitHandler(function(e) {
                    return (renderedField.isValid(true));
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
