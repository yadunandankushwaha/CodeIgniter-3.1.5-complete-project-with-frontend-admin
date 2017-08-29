'use strict';
$(document).ready(function() {
    /*Area chart*/
        $("#areachart").html('');
        var widchart = $("#areachart").width();
        var graph = new Rickshaw.Graph({
            element: document.querySelector("#areachart"),
            width: widchart,
            height: 200,
            series: [{
                color: '#1abc9c',
                data: [
                    { x: 0, y: 10 },
                    { x: 1, y: 16 },
                    { x: 2, y: 50 },
                    { x: 3, y: 25 },
                    { x: 4, y: 15 },
                    { x: 5, y: 25 },
                    { x: 6, y: 35 },
                    { x: 7, y: 15 },
                ]
            }]
        });
        graph.render();
        
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


    // Calender js
    $(function() {
        $('.widget-calender').pignoseCalendar();
    });

    // Flipclock js    
    var clock;

    clock = $('.widget-clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
            stop: function() {
                $('.message').html('The clock has stopped!')
            }
        }
    });

    clock.setTime(220880);
    clock.setCountdown(true);
    clock.start();

    $('.stop').on('click',function(e) {
        clock.stop();
    });

    $('.start').on('click',function(e) {
        clock.start();
    });

    var myVar = setInterval(function() {
        myTimer()
    }, 1000);

    function myTimer() {
        var d = new Date();
        var t = d.toLocaleTimeString();
        document.getElementById("current-time").innerHTML = t;
    }

    function myStopFunction() {
        clearInterval(myVar);
    }

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

    /*Site visit Chart*/

    Morris.Area({
        element: 'morris-site-visit',
        data: [{
            period: '2010',
            SiteA: 0,
            SiteB: 0,

        }, {
            period: '2011',
            SiteA: 130,
            SiteB: 100,

        }, {
            period: '2012',
            SiteA: 80,
            SiteB: 60,

        }, {
            period: '2013',
            SiteA: 70,
            SiteB: 200,

        }, {
            period: '2014',
            SiteA: 180,
            SiteB: 150,

        }, {
            period: '2015',
            SiteA: 105,
            SiteB: 90,

        }, {
            period: '2016',
            SiteA: 250,
            SiteB: 150,

        }],
        xkey: 'period',
        ykeys: ['SiteA', 'SiteB'],
        labels: ['Site A', 'Site B'],
        pointSize: 0,
        fillOpacity: 0.4,
        pointStrokeColors: ['#b4becb', '#01c0c8'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 0,
        smooth: false,
        hideHover: 'auto',
        lineColors: ['#b4becb', '#01c0c8'],
        resize: true

    });

    /*ADVANCED SMIL ANIMATIONS*/
    var chart = new Chartist.Line('.ct-chart2', {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        series: [
            [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
            [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
            [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
            [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
        ]
    }, {
        low: 0
    });

    // Let's put a sequence number aside so we can use it in the event callbacks
    var seq = 0,
        delays = 80,
        durations = 500;

    // Once the chart is fully created we reset the sequence
    chart.on('created', function() {
        seq = 0;
    });

    // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
    chart.on('draw', function(data) {
        seq++;

        if (data.type === 'line') {
            // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
            data.element.animate({
                opacity: {
                    // The delay when we like to start the animation
                    begin: seq * delays + 1000,
                    // Duration of the animation
                    dur: durations,
                    // The value where the animation should start
                    from: 0,
                    // The value where it should end
                    to: 1
                }
            });
        } else if (data.type === 'label' && data.axis === 'x') {
            data.element.animate({
                y: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.y + 100,
                    to: data.y,
                    // We can specify an easing function from Chartist.Svg.Easing
                    easing: 'easeOutQuart'
                }
            });
        } else if (data.type === 'label' && data.axis === 'y') {
            data.element.animate({
                x: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 100,
                    to: data.x,
                    easing: 'easeOutQuart'
                }
            });
        } else if (data.type === 'point') {
            data.element.animate({
                x1: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 10,
                    to: data.x,
                    easing: 'easeOutQuart'
                },
                x2: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 10,
                    to: data.x,
                    easing: 'easeOutQuart'
                },
                opacity: {
                    begin: seq * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: 'easeOutQuart'
                }
            });
        } else if (data.type === 'grid') {
            // Using data.axis we get x or y which we can use to construct our animation definition objects
            var pos1Animation = {
                begin: seq * delays,
                dur: durations,
                from: data[data.axis.units.pos + '1'] - 30,
                to: data[data.axis.units.pos + '1'],
                easing: 'easeOutQuart'
            };

            var pos2Animation = {
                begin: seq * delays,
                dur: durations,
                from: data[data.axis.units.pos + '2'] - 100,
                to: data[data.axis.units.pos + '2'],
                easing: 'easeOutQuart'
            };

            var animations = {};
            animations[data.axis.units.pos + '1'] = pos1Animation;
            animations[data.axis.units.pos + '2'] = pos2Animation;
            animations['opacity'] = {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'easeOutQuart'
            };

            data.element.animate(animations);
        }
    });   

    $(".dial").knob({
        draw: function() {
            // "tron" case
            if (this.$.data('skin') == 'tron') {
                this.cursorExt = 0.3;
                var a = this.arc(this.cv) // Arc
                    ,
                    pa // Previous arc
                    , r = 1;
                this.g.lineWidth = this.lineWidth;
                if (this.o.displayPrevious) {
                    pa = this.arc(this.v);
                    this.g.beginPath();
                    this.g.strokeStyle = this.pColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                    this.g.stroke();
                }
                this.g.beginPath();
                this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                this.g.stroke();
                this.g.lineWidth = 2;
                this.g.beginPath();
                this.g.strokeStyle = this.o.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                this.g.stroke();
                return false;
            }
        }
    });

    window.addEventListener('load', resizeGraph, false);
    window.addEventListener('resize', resizeGraph, false);

    function resizeGraph() {
        /*Area chart*/
        $("#areachart").html('');
        var widchart = $("#areachart").width();
        var graph = new Rickshaw.Graph({
            element: document.querySelector("#areachart"),
            width: widchart,
            height: 200,
            series: [{
                color: '#1abc9c',
                data: [
                    { x: 0, y: 10 },
                    { x: 1, y: 16 },
                    { x: 2, y: 50 },
                    { x: 3, y: 25 },
                    { x: 4, y: 15 },
                    { x: 5, y: 25 },
                    { x: 6, y: 35 },
                    { x: 7, y: 15 },
                ]
            }]
        });
        graph.render();
    }

    var chart = c3.generate({
        bindto: '#chart',
        data: {
            columns: [
                ['data2', 2, 10, 4, 15, 25]
            ],

        },
        axis: {
            rotated: false
        },
        color: {
            pattern: ['#2ecc71']
        }
    });



    /*markers map*/
    // var map;
    // map = new GMaps({
    //     el: '#markers-map',
    //     lat: 21.2334329,
    //     lng: 72.866472,
    //     scrollwheel: false
    // });

    // map.addMarker({
    //     lat: 21.2334329,
    //     lng: 72.866472,
    //     title: 'Marker with InfoWindow',
    //     infoWindow: {
    //         content: '<p><Phoenicoded></Phoenicoded> <br/> Buy Now at <a href="">Themeforest</a></p>'
    //     }
    // });
});
