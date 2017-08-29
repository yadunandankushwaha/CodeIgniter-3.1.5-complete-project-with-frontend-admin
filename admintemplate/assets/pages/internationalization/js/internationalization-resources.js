"use strict";
$(document).ready(function() {
    //Resources To Initialize With
    i18next.init({
                resources: {
                    en: {
                        translation: {
                            key: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        }
                    },
                    es: {
                        translation: {
                            key: "Lorem Ipsum es simplemente un texto ficticio de la industria de impresión y composición. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde los años 1500, cuando una impresora desconocida tomó una galera de tipo y la revolvió para hacer un libro de muestras tipo. Ha sobrevivido no sólo cinco siglos, sino también el salto a la tipografía electrónica, permaneciendo esencialmente sin cambios. Fue popularizado en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum, y más recientemente con software de publicación como Aldus PageMaker incluyendo versiones de Lorem Ipsum."
                        }
                    },
                    pt: {
                        translation: {
                            key: "Lorem Ipsum é simplesmente um texto fictício da indústria gráfica e tipográfica. Lorem Ipsum tem sido o texto padrão do manequim da indústria desde os anos 1500, quando uma impressora desconhecida tomou uma galera de tipo e mexidos-lo para fazer um livro tipo espécime. Ele sobreviveu não apenas cinco séculos, mas também o salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas Letraset contendo Lorem Ipsum passagens, e mais recentemente com software de editoração como Aldus PageMaker incluindo versões de Lorem Ipsum."
                        }
                    },
                    fr: {
                        translation: {
                            key: "Lorem Ipsum est simplement un texte fictif de l'industrie de l'impression et de la composition. Lorem Ipsum a été le texte fictif standard de l'industrie depuis les années 1500, lorsqu'une imprimante inconnue a pris une galère de type et l'a brouillée pour faire un livre de spécimen de type. Il a survécu non seulement cinq siècles, mais aussi le passage à la composition électronique, demeurant essentiellement inchangé. Il a été popularisé dans les années 1960 avec la publication de feuilles de Letraset contenant des passages de Lorem Ipsum et plus récemment avec des logiciels de publication assistée comme Aldus PageMaker, y compris des versions de Lorem Ipsum."
                        }
                    }
                },
                debug: !1
            },
            function(err, t) {
                jqueryI18next.init(i18next, $)
            }),
        $("#navbarSupportedContent").on("click", ".lng-nav li a", function() {
            var $this = $(this),
                selected_lng = $this.data("lng");
            i18next.changeLanguage(selected_lng, function(err, t) {
                $(".translate-text").localize()
            }),
       
 $this.parent("li").siblings("li").children("a").removeClass("active"), $this.addClass("active"), $("#navbarSupportedContent").find(".lng-dropdown a").removeClass("active");
            var drop_lng = $("#navbarSupportedContent").find('.lng-dropdown a[data-lng="' + selected_lng + '"]').addClass("active");
            $("#navbarSupportedContent #dropdown-active-item").html(drop_lng.html())
       }),  $("#navbarSupportedContent").on("click", ".lng-dropdown a", function() {
            var $this = $(this),
                selected_lng = $this.data("lng");
            i18next.changeLanguage(selected_lng, function(err, t) {
                $(".translate-text").localize()
            }),
                $("#navbarSupportedContent .lng-nav li a").removeClass("active"),
                $('#navbarSupportedContent .lng-nav li a[data-lng="' + selected_lng + '"]').addClass("active"), $("#navbarSupportedContent").find(".lng-dropdown a").removeClass("active"), $this.addClass("active"),
                $("#navbarSupportedContent #dropdown-active-item").html($this.html())
        })


});
