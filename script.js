'use strict';

//задание 1
$('.minus').click(function() {
    if ($(this).next().text() > 0)
        $(this).next().text(+($(this).next().text()) - 1);
});

$('.plus').click(function() {
    $(this).prev().text(+($(this).prev().text()) + 1);
});

//задание 2
$('.squares > div').click(function() {
    if ($(this).css('backgroundColor') === 'rgb(0, 128, 0)') {
        $(this).css('backgroundColor', 'yellow');
    } else if ($(this).css('backgroundColor')  === 'rgb(0, 0, 255)') {
        $(this).css('backgroundColor', 'green');
    } else {
        $(this).css('backgroundColor', 'blue');
    }
    $(this).appendTo($('.squares'));
});