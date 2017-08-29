function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
$(document).ready(function() {
    $('.summernote')
        .on('summernote.change', function() {
            var $buttons = [
                $(this).summernote("toolbar.get", "ol"),
                $(this).summernote("toolbar.get", "bold"),
                $(this).summernote("toolbar.get", "italic")
            ];

            for (var i = 0; i < $buttons.length; i++) {
                var r = getRandomInt(0, 255);
                var g = getRandomInt(0, 255);
                var b = getRandomInt(0, 255);

                $buttons[i].css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
            }

        })
        .summernote({
            height: 300
        });
    $('.airmode-note').summernote({
        height: 300,
        tabsize: 2,
        airMode: true
    });
    var self = this;

    // load github's emoji list
    $.ajax({
        url: 'https://api.github.com/emojis'
    }).then(function(data) {
        var emojis = Object.keys(data);
        var emojiUrls = data;

        $('.emoji-summernote').summernote({
            height: 300,
            hintDirection: 'top',
            hint: [{
                search: function(keyword, callback) {
                    callback($.grep(emojis, function(item) {
                        return item.indexOf(keyword) === 0;
                    }));
                },
                match: /\B:([\-+\w]+)$/,
                template: function(item) {
                    var content = emojiUrls[item];
                    return '<img src="' + content + '" width="20" /> :' + item + ':';
                },
                content: function(item) {
                    var url = emojiUrls[item];
                    if (url) {
                        return $('<img />').attr('src', url).css('width', 20)[0];
                    }
                    return '';
                }
            }]
        });
    });
    $('.udefine-summernote').summernote({
        height: 200,
        hint: {
            match: /#(\w{2,})$/,
            search: function(keyword, callback) {
                $.ajax({
                    url: 'https://api.github.com/search/repositories?q=' + keyword + '&order=asc'
                }).then(function(data) {
                    callback(data.items);
                });
            },
            content: function(item) {
                return '[' + item.full_name + '] ' + item.description;
            },
            template: function(item) {
                return '[<strong>' + item.full_name + '</strong>] ' + item.description;
            }
        }
    });
    $('.jcustom-summernote').on('summernote.init', function() {
        console.log('summernote initialize!')
    }).on('summernote.change', function() {
        console.log(' changed content ')
    }).on('summernote.keyup', function(event) {
        console.log('you can use keyboard event', event);
    }).on('summernote.enter', function(event) {
        console.log('check enter key ');
    }).summernote({
        height: 300
    });
    $('.lang-summernote').summernote({
        height: 200,
        tabsize: 2,
        lang: 'ko-KR'
    });
    $('#dropper').on('shown.bs.modal', function() {
        $('#dropping').summernote({ height: 300, focus: true });
    }).on('hidden.bs.modal', function() {
        $('#dropping').summernote('destroy');;
    });
});
