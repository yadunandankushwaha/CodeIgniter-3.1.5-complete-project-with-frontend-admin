/* --------------------------------------------------------
 Color picker - demo only
 --------------------------------------------------------   */
(function() {
    $('<div class="color-picker"><a href="#" class="handle"><i class="icofont icofont-color-bucket"></i></a><div class="settings-header"><h3>Setting panel</h3></div><div class="section"><h3 class="color">Normal color schemes:</h3><div class="colors"><a href="#" class="color-1" ></a><a href="#" class="color-2" ></a><a href="#" class="color-3" ></a><a href="#" class="color-4" ></a><a href="#" class="color-5"></a><a href="#" class="color-6"></a></div></div></div>').appendTo($('body'));
})();

/*Gradient Color*/


/*Normal Color */
$(".color-1").click(function() {
    $("#color").attr("href", "assets/css/color/color-1.css");
    return false;
});
$(".color-2").click(function() {
    $("#color").attr("href", "assets/css/color/color-2.css");
    return false;
});
$(".color-3").click(function() {
    $("#color").attr("href", "assets/css/color/color-3.css");
    return false;
});
$(".color-4").click(function() {
    $("#color").attr("href", "assets/css/color/color-4.css");
    return false;
});
$(".color-5").click(function() {
    $("#color").attr("href", "assets/css/color/color-5.css");
    return false;
});
$(".color-6").click(function() {
    $("#color").attr("href", "assets/css/color/color-6.css");
    return false;
});


$('.color-picker').animate({
    right: '-239px'
});

$('.color-picker a.handle').click(function(e) {
    e.preventDefault();
    var div = $('.color-picker');
    if (div.css('right') === '-239px') {
        $('.color-picker').animate({
            right: '0px'
        });
    } else {
        $('.color-picker').animate({
            right: '-239px'
        });
    }
});
