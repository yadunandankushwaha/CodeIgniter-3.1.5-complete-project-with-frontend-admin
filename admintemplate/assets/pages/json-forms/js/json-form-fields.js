"use strict";
$(document).ready(function(){
    // Basic example
    $("#alpaca-basic").alpaca({
        "data": "I Love Alpaca Ice Cream!",
        "options": {
            "focus": false
        }
    });
    // Display only view
    $("#alpaca-static").alpaca({
        "data": "I Love Alpaca Ice Cream!",
        "schema": {
            "type": "string"
        },
        "view": "bootstrap-display"
    });
 // Input field label
    $("#alpaca-input-label").alpaca({
        "data": "I Love Alpaca Ice Cream!",
        "options": {
            "label": "Input label",
            "focus": false
        }
    });
    // Static input label
    $("#alpaca-static-label").alpaca({
        "data": "I Love Alpaca Ice Cream!",
        "schema": {
            "type": "string"
        },
        "options": {
            "label": "Input label"
        },
        "view": "bootstrap-display"
    });
      // Disallow empty spaces
    $("#alpaca-disallow-empty").alpaca({
        "schema": {
            "type": "string"
        },
        "options": {
            "type": "lowercase",
            "label": "User Name",
            "disallowEmptySpaces": true,
            "helper": "Type something with empty space",
            "focus": false
        }
    });
      // Disallow values
    $("#alpaca-disallow-values").alpaca({
        "data": "Mickey Mantle",
        "schema": {
            "type": "string",
            "disallow": ["Mickey Mantle", "Mickey"]
        },
        "options": {
            "label": "Name",
            "focus": false
        }
    });
     // Typeahead integration
    $("#alpaca-typeahead").alpaca({
        "schema": {
            "type": "string"
        },
        "options": {
            "type": "text",
            "label": "Company Name",
            "helper": "Select the name of a computing company",
            "placeholder": "Enter 'a'",
            "focus": false,
            "typeahead": {
                "config": {
                    "autoselect": true,
                    "highlight": true,
                    "hint": true,
                    "minLength": 1
                },
                "datasets": {
                    "type": "local",
                    "source": function(query) {
                        var companies = ["Google", "Amazon", "Microsoft", "Apple", "Spotify", "Alpaca", "Another company", "Facebook"];
                        var results = [];
                        for (var i = 0; i < companies.length; i++) {
                            var add = true;
                            if (query) {
                                add = (companies[i].indexOf(query) === 0);
                            }
                            if (add) {
                                results.push({
                                    "value": companies[i]
                                });
                            }
                        }
                        return results;
                    }
                }
            }
        }
    });
// Maxlength integration
    $("#alpaca-maxlength").alpaca({
        "schema": {
            "type": "string",
            "minLength": 3,
            "maxLength": 25
        },
        "options": {
            "type": "text",
            "label": "What is your name?",
            "constrainMaxLength": true,
            "constrainMinLength": true,
            "showMaxLengthIndicator": true,
            "focus": false
        },
        "data": "Jackie Robinson"
    });
     // Basic textarea
    $("#alpaca-textarea").alpaca({
        "data": "Ice cream or ice-cream is a frozen dessert usually made from dairy products, such as milk and cream, and often combined with fruits or other ingredients and flavours.",
        "options": {
            "type": "textarea",
            "label": "Receipt",
            "helper": "Receipt for Best Homemade Ice Cream",
            "rows": 4,
            "cols": 80,
            "focus": false
        }
    });
 // With placeholder
    $("#alpaca-textarea-placeholder").alpaca({
        "options": {
            "type": "textarea",
            "label": "Receipt",
            "helper": "Receipt for Best Homemade Ice Cream",
            "placeholder": "Enter your favorite ice cream here...",
            "rows": 4,
            "cols": 80,
            "focus": false
        }
    });
     // Basic select
    $("#alpaca-select").alpaca({
        "data": "coffee",
        "schema": {
            "enum": ["vanilla", "chocolate", "coffee", "strawberry", "mint"]
        },
        "options": {
            "label": "Ice cream",
            "helper": "What flavor of ice cream do you prefer?",
            "focus": false
        }
    });
      // External data source
    $("#alpaca-select-external").alpaca({
        "options": {
            "label": "Ice cream",
            "helper": "Guess my favorite ice cream?",
            "type": "select",
            "focus": false,
            "dataSource": "./../assets/pages/json-forms/json/icecream-list.json"
        }
    });
    // Multiselect
    $("#alpaca-multiselect").alpaca({
        "data": ["Vanilla", "Chocolate"],
        "schema": {
            "type": "array",
            "items": {
                "title": "Ice Cream",
                "type": "string",
                "enum": ["Vanilla", "Chocolate", "Strawberry", "Mint"],
                "minItems": 2,
                "maxItems": 3
            }
        },
        "options": {
            "label": "Ice cream",
            "helper": "Guess my favorite ice cream?",
            "type": "select",
            "size": 5,
            "id": "multiselect",
            "focus": false
        },
        "postRender": function(control) {
            $("#multiselect").parent().find("input[type=checkbox]").uniform();
        }
    });

     // Multiselect with remote data
    $("#alpaca-multiselect-remote").alpaca({
        "options": {
            "label": "Select your favorite flavor of ice cream",
            "type": "select",
            "multiple": true,
            "helper": "Guess my favorite ice cream?",
            "size": 3,
            "focus": false,
            "id": "multiselect-remote",
            "dataSource": "./../assets/pages/json-forms/json/icecream-list.json"
        },
        "postRender": function(control) {
            $("#multiselect-remote").parent().find("input[type=checkbox]").uniform();
        }
    });
 // Select2 select
    $("#alpaca-select2").alpaca({
        "data": "coffee",
        "schema": {
            "enum": ["vanilla", "chocolate", "coffee", "strawberry", "mint"]
        },
        "options": {
            "label": "Ice cream",
            "helper": "What flavor of ice cream do you prefer?",
            "id": "select2-basic",
            "focus": false
        },
        "postRender": function(control) {
            $('#select2-basic').select2({
                minimumResultsForSearch: Infinity
            });
        }
    });
   
     // Select2 select with search
    $("#alpaca-select2-search").alpaca({
        "data": "coffee",
        "schema": {
            "enum": ["vanilla", "chocolate", "coffee", "strawberry", "mint"]
        },
        "options": {
            "label": "Ice cream",
            "helper": "What flavor of ice cream do you prefer?",
            "id": "select2-search",
            "focus": false
        },
        "postRender": function(control) {
            $('#select2-search').select2();
        }
    });
     // Option tree field
    $("#alpaca-option-tree").alpaca({
        "schema": {
            "type": "number",
            "title": "What number would like for your sports jersey?"
        },
        "options": {
            "type": "optiontree",
            "tree": {
                "selectors": {
                    "sport": {
                        "schema": {
                            "type": "string"
                        },
                        "options": {
                            "type": "select",
                            "noneLabel": "Pick a Sport..."
                        }
                    },
                    "team": {
                        "schema": {
                            "type": "string"
                        },
                        "options": {
                            "type": "select",
                            "noneLabel": "Pick a Team..."
                        }
                    },
                    "player": {
                        "schema": {
                            "type": "string"
                        },
                        "options": {
                            "type": "select",
                            "noneLabel": "Pick a Player..."
                        }
                    }
                },
                "order": ["sport", "team", "player"],
                "data": [{
                    "value": 23,
                    "attributes": {
                        "sport": "Basketball",
                        "team": "Chicago Bulls",
                        "player": "Michael Jordan"
                    }
                }, {
                    "value": 33,
                    "attributes": {
                        "sport": "Basketball",
                        "team": "Chicago Bulls",
                        "player": "Scotty Pippen"
                    }
                }, {
                    "value": 4,
                    "attributes": {
                        "sport": "Football",
                        "team": "Green Bay Packers",
                        "player": "Brett Favre"
                    }
                }, {
                    "value": 19,
                    "attributes": {
                        "sport": "Baseball",
                        "team": "Milwaukee Brewers",
                        "player": "Robin Yount"
                    }
                }, {
                    "value": 99,
                    "attributes": {
                        "sport": "Hockey",
                        "player": "Wayne Gretzky"
                    }
                }],
                "horizontal": true
            },
            "focus": false
        }
    });

    // Using connector
        $("#alpaca-option-tree-connector").alpaca({
            "schemaSource": "./../assets/pages/json-forms/json/optiontree-custom-schema.json",
            "optionsSource": "./../assets/pages/json-forms/json/optiontree-custom-options.json"
        });

   // CKEditor
    // ------------------------------

    // Full featured CKEditor
    $("#alpaca-ckeditor-full").alpaca({
        "data": "Ice cream is a <b>frozen</b> dessert usually made from <i>dairy products</i>, such as milk and cream, and often combined with fruits or other ingredients and flavors.",
        "options": {
            "type": "ckeditor"
        }
    });

     // Lowercase
    $("#alpaca-lowercase").alpaca({
        "data": "Ice cream is wonderful.",
        "schema": {
            "format": "lowercase"
        },
        "options": {
            "focus": false
        }
    });
     // Uppercase
    $("#alpaca-uppercase").alpaca({
        "data": "Ice cream is wonderful.",
        "schema": {
            "format": "uppercase"
        },
        "options": {
            "focus": false
        }
    });
      // Search type
    $("#alpaca-search").alpaca({
        "data": "Where for art thou Romeo?",
        "schema": {
            "type": "string"
        },
        "options": {
            "type": "search",
            "focus": false,
            "label": "Search"
        }
    });
    // Integer type
    $("#alpaca-integer").alpaca({
        "data": 20,
        "options": {
            "type": "integer",
            "label": "Age:",
            "focus": false
        },
        "schema": {
            "minimum": 18,
            "maximum": 25,
            "exclusiveMinimum": true,
            "exclusiveMaximum": true,
            "divisibleBy": 2
        }
    });
      // Password type
    $("#alpaca-password").alpaca({
        "data": "password",
        "schema": {
            "format": "password"
        },
        "options": {
            "focus": false
        }
    });
       // Email type
    $("#alpaca-email").alpaca({
        "data": "support",
        "schema": {
            "format": "email"
        },
        "options": {
            "focus": false
        }
    });
     // Currency type
    $("#alpaca-currency").alpaca({
        "options": {
            "type": "currency",
            "focus": false
        }
    });
    // Personal name type
    $("#alpaca-name").alpaca({
        "data": "Oscar Zoroaster Phadrig Isaac Norman Henkel Emmannuel Ambroise Diggs",
        "options": {
            "type": "personalname",
            "focus": false
        }
    });
    // Basic file input
    $("#alpaca-file").alpaca({
        "data": "",
        "options": {
            "type": "file",
            "label": "Ice Cream Photo:",
            "helper": "Pick your favorite ice cream picture.",
            "focus": false
        },
        "schema": {
            "type": "string",
            "format": "uri"
        }
    });
    // Static mode
    $("#alpaca-file-static").alpaca({
        "data": "/abc.html",
        "options": {
            "type": "file",
            "label": "Ice Cream Photo:",
            "helper": "Pick your favorite ice cream picture.",
            "focus": false
        },
        "schema": {
            "type": "string",
            "format": "uri"
        },
        "view": "bootstrap-display"
    });
    // Country selector
    $("#alpaca-country").alpaca({
        "options": {
            "type": "country",
            "focus": false
        }
    });
     // State selector
    $("#alpaca-state").alpaca({
        "options": {
            "type": "state",
            "focus": false
        }
    });
     // Searchable country selector
    $("#alpaca-country-search").alpaca({
        "options": {
            "type": "country",
            "id": "country-search",
            "focus": false
        },
        "postRender": function(control) {
            $('#country-search').select2();
        }
    });
    // Searchable state selector
    $("#alpaca-state-search").alpaca({
        "options": {
            "type": "state",
            "id": "state-search",
            "focus": false
        },
        "postRender": function(control) {
            $('#state-search').select2();
        }
    });
     // Basic checkbox list
    $("#alpaca-checkbox-list").alpaca({
        "data": ["sandwich", "cookie", "drink"],
        "schema": {
            "type": "array",
            "enum": ["sandwich", "chips", "cookie", "drink"]
        },
        "options": {
            "type": "checkbox",
            "label": "What would you like with your order?",
            "optionLabels": ["A Sandwich", "Potato Chips", "A Cookie", "Soft Drink"]
        }
    });
     // Styled checkbox list
    $("#alpaca-checkbox-list-styled").alpaca({
        "data": ["sandwich", "cookie", "drink"],
        "schema": {
            "type": "array",
            "enum": ["sandwich", "chips", "cookie", "drink"]
        },
        "options": {
            "type": "checkbox",
            "label": "What would you like with your order?",
            "optionLabels": ["A Sandwich", "Potato Chips", "A Cookie", "Soft Drink"],
            "fieldClass": "checkbox-styled-list"
        },
        "postRender": function(control) {
            $('.checkbox-styled-list').find('input[type=checkbox]').uniform();
        }
    });
    // Display only mode
    $("#alpaca-checkbox-static").alpaca({
        "data": false,
        "view": "bootstrap-display",
        "options": {
            "label": "Registered?"
        }
    });
     // Disabled checkbox
    $("#alpaca-checkbox-styled-disabled").alpaca({
        "data": true,
        "options": {
            "label": "Question:",
            "rightLabel": "Do you like Alpaca?",
            "fieldClass": "checkbox-styled-disabled",
            "disabled": true
        },
        "postRender": function(control) {
            $('.checkbox-styled-disabled').find('input[type=checkbox]').uniform();
        }
    });
     // Basic radios
    $("#alpaca-radio-basic").alpaca({
        "data": "green",
        "options": {
            "type": "radio",
            "label": "Favorite Color",
            "helper": "Pick your favorite color",
            "optionLabels": {
                "red": "Red",
                "green": "Green",
                "blue": "Blue",
                "white": "White",
                "black": "Black"
            }
        },
        "schema": {
            "required": true,
            "enum": ["red", "green", "blue", "white", "black"]
        }
    });
     // Styled radios
    $("#alpaca-radio-styled").alpaca({
        "data": "Jimi Hendrix",
        "schema": {
            "enum": ["Jimi Hendrix", "Mark Knopfler", "Joe Satriani", "Eddie Van Halen", "Orianthi"]
        },
        "options": {
            "type": "radio",
            "label": "Who is your favorite guitarist?",
            "fieldClass": "radio-styled-demo",
            "vertical": true
        },
        "postRender": function(control) {
            $('.radio-styled-demo').find('input[type=radio]').uniform({
                radioClass: 'choice'
            });
        }
    });
      // Disabled mode
    $("#alpaca-radio-styled-disabled").alpaca({
        "data": "Jimi Hendrix",
        "schema": {
            "enum": ["Jimi Hendrix", "Mark Knopfler", "Joe Satriani", "Eddie Van Halen", "Orianthi"]
        },
        "options": {
            "type": "radio",
            "label": "Who is your favorite guitarist?",
            "vertical": true,
            "fieldClass": "radio-styled-disabled-demo",
            "disabled": true
        },
        "postRender": function(control) {
            $('.radio-styled-disabled-demo').find('input[type=radio]').uniform({
                radioClass: 'choice'
            });
        }
    });
     // Required radios
    $("#alpaca-radio-required").alpaca({
        "data": "Coffee2",
        "options": {
            "label": "Ice cream",
            "helper": "Guess my favorite ice cream?",
            "optionLabels": ["Vanilla Flavor", "Chocolate Flavor", "Coffee Flavor"]
        },
        "schema": {
            "required": true,
            "enum": ["Vanilla", "Chocolate", "Coffee"]
        }
    });

     // Basic setup
    $("#alpaca-tokenfield").alpaca({
        "schema": {
            "title": "Character Names",
            "type": "string"
        },
        "options": {
            "type": "token",
            "focus": false,
            "tokenfield": {
                "autocomplete": {
                    "source": ["marty", "doc", "george", "biff", "lorraine", "mr. strickland"],
                    "delay": 100
                },
                "showAutocompleteOnFocus": true
            }
        },
        "data": "marty,doc,george,biff"
    });
     // Display only mode
    $("#alpaca-tokenfield-static").alpaca({
        "schema": {
            "title": "Character Names",
            "type": "string"
        },
        "options": {
            "type": "token",
            "focus": false,
            "tokenfield": {
                "autocomplete": {
                    "source": ["marty", "doc", "george", "biff", "lorraine", "mr. strickland"],
                    "delay": 100
                },
                "showAutocompleteOnFocus": true
            }
        },
        "data": "marty,doc,george,biff",
        "view": "bootstrap-display"
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