"use strict";
$(document).ready(function() {
    /*Multiple Bars*/
    $("#barchart").html('');
    var graph2 = new Rickshaw.Graph({
        element: document.querySelector("#barchart"),
        renderer: 'bar',
        stack: false,
        series: [{
            data: [{
                x: 0,
                y: 40
            }, {
                x: 1,
                y: 49
            }, {
                x: 2,
                y: 30
            }],
            color: '#1abc9c'
        }, {
            data: [{
                x: 0,
                y: 10
            }, {
                x: 1,
                y: 24
            }, {
                x: 2,
                y: 15
            }],
            color: '#bdc3c7'
        }]
    });
    graph2.render();
    /*Multiple Bars*/
    $("#barchart2").html('');
    var graph3 = new Rickshaw.Graph({
        element: document.querySelector("#barchart2"),
        renderer: 'bar',
        stack: false,
        series: [{
            data: [{
                x: 0,
                y: 28
            }, {
                x: 1,
                y: 48
            }, {
                x: 2,
                y: 78
            }],
            color: '#1abc9c'
        }, {
            data: [{
                x: 0,
                y: 78
            }, {
                x: 1,
                y: 88
            }, {
                x: 2,
                y: 98
            }],
            color: '#bdc3c7'
        }]
    });

    graph3.render();


    // Extra chart
    Morris.Area({
        element: 'morris-extra-area',
        data: [{
                period: '2010',
                iphone: 0,
                ipad: 0,
                itouch: 0
            }, {
                period: '2011',
                iphone: 50,
                ipad: 15,
                itouch: 5
            }, {
                period: '2012',
                iphone: 20,
                ipad: 50,
                itouch: 65
            }, {
                period: '2013',
                iphone: 60,
                ipad: 12,
                itouch: 7
            }, {
                period: '2014',
                iphone: 30,
                ipad: 20,
                itouch: 120
            }, {
                period: '2015',
                iphone: 25,
                ipad: 80,
                itouch: 40
            }, {
                period: '2016',
                iphone: 10,
                ipad: 10,
                itouch: 10
            }


        ],
        lineColors: ['#fb9678', '#7E81CB', '#01C0C8'],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['Site A', 'Site B', 'Site C'],
        pointSize: 0,
        lineWidth: 0,
        resize: true,
        fillOpacity: 0.8,
        behaveLikeLine: true,
        gridLineColor: '#5FBEAA',
        hideHover: 'auto'

    });
});
