'use strict';
$(document).ready(function() {
    $('#issue-list-table').DataTable();


    var progression1 = 0;

    var progress = setInterval(function() {

        $('.progress .issue-text1').text(progression1 + '%');
        $('.progress .issue-text1').css({ 'left': progression1 + '%' });
        $('.progress .issue-text1').css({ 'top': '-20px' });
        $('.progress .issue-bar1').css({ 'width': progression1 + '%' });

        if (progression1 == 70) {
            clearInterval(progress);

        } else
            progression1 += 1;

    }, 100);

    $(".piechart1").sparkline([100, 112, 80], {
        type: 'pie',
        width: '150',
        height: '150',
        tooltipFormat: '<span style="color: {{color}}">&#2980b9 ;</span> {{offset:names}} ({{percent.1}}%)',
        sliceColors: ['#25A6F7','#dc3912','#42E1FE','#109618','#66aa00','#01C0C8','#0099c6','#990099 '],
        names: {
                        0: 'Complete',
                        1: 'Progress',
                        2: 'New',
                    },
        tooltipClassname: 'pie-chart-tooltip'
    });

    $(".piechart2").sparkline([200, 29, 90], {
        type: 'pie',
        width: '150px',
        height: '150px',
        tooltipFormat: '<span style="color: {{color}}">&#99D683;</span> {{offset:names}} ({{percent.1}}%)',
        sliceColors: ['#25A6F7','#dc3912','#42E1FE','#109618','#66aa00','#01C0C8','#0099c6','#990099 '],
        tooltipValueLookups: {
            names: {
                0: 'Complete',
                1: 'Progress',
                2: 'New',
            }
        },
        tooltipClassname: 'pie-chart-tooltip'
    });

});
