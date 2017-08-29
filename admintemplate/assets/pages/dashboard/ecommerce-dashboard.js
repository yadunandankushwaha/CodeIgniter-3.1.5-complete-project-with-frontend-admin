$(document).ready(function() {
    /*Combination Chart*/

    var chart = c3.generate({
        bindto: '#chart4',
        data: {
            columns: [
                ['data1', 30, 20, 50, 40, 60, 50],
                ['data2', 200, 130, 90, 240, 130, 220],
                ['data3', 300, 200, 160, 400, 250, 250],
                ['data4', 200, 130, 90, 240, 130, 220],
                ['data5', 130, 120, 150, 140, 160, 150],
                ['data6', 90, 70, 20, 50, 60, 120],
            ],
            type: 'bar',
            colors: {
                data1: '#00C292',
                data2: '#4C5667',
                data3: '#03A9F3',
                data4: '#AB8CE4',
                data5: '#a3aebd',
                data6: '#FEC107'
            },
            types: {
                data3: 'spline',
                data4: 'line',
                data6: 'area',
            },
            groups: [
                ['data1', 'data2']
            ]
        }
    });
    //Donut chart
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChartDonut);

    function drawChartDonut() {
        var dataDonut = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7]
        ]);

        var optionsDonut = {
            title: 'My Daily Activities',
            pieHole: 0.4,
            colors: ['#2ecc71', '#01C0C8', '#FB9678', '#5faee3', '#f4d03f']
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_Donut'));
        chart.draw(dataDonut, optionsDonut);
    }
    /*Pie-chart*/
    var myChart = echarts.init(document.getElementById('pie-chart'));

    var idx = 1;
    var option_dt = {

        timeline: {
            show: true,
            data: ['06-16', '05-16', '04-16'],
            label: {
                formatter: function(s) {
                    return s.slice(0, 5);
                }
            },
            x: 10,
            y: null,
            x2: 10,
            y2: 0,
            width: 250,
            height: 50,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#eaeaea",
            borderWidth: 0,
            padding: 5,
            controlPosition: "left",
            autoPlay: true,
            loop: true,
            playInterval: 2000,
            lineStyle: {
                width: 1,
                color: "#bdbdbd",
                type: ""
            },

        },

        options: [{
                    color: ['#1ABC9C', '#2C3E50', '#4A6076', '#87E8C6', '#656e77', '#42E1FE'],
                    title: {
                        text: '',
                        subtext: ''
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        show: false,
                        x: 'left',
                        orient: 'vertical',
                        padding: 0,
                        data: ['Micromax', 'Xolo', 'Lenevo', 'Sony', 'Others']
                    },
                    toolbox: {
                        show: false,
                        color: ['#1ABC9C', '#1ABC9C', '#1ABC9C', '#1ABC9C'],
                        feature: {
                            mark: { show: false },
                            dataView: { show: false, readOnly: true },
                            magicType: {
                                show: true,
                                itemSize: 12,
                                itemGap: 12,
                                type: ['pie', 'funnel'],
                                option: {
                                    funnel: {
                                        x: '10%',
                                        width: '80%',
                                        funnelAlign: 'center',
                                        max: 50
                                    },
                                    pie: {
                                        roseType: 'none',
                                    }
                                }
                            },
                            restore: { show: false },
                            saveAsImage: { show: true }
                        }
                    },


                    series: [{
                        name: '06-16',
                        type: 'pie',
                        radius: [15, '70%'],
                        roseType: 'radius',
                        center: ['50%', '45%'],
                        width: '50%', // for funnel
                        itemStyle: {
                            normal: { label: { show: true }, labelLine: { show: true } },
                            emphasis: { label: { show: false }, labelLine: { show: false } }
                        },
                        data: [{ value: 35, name: 'Micromax' }, { value: 16, name: 'Xolo' }, { value: 27, name: 'Lenevo' }, { value: 29, name: 'Sony' }, { value: 12, name: 'Others' }]
                    }]
                }, {
                    series: [{
                        name: '05-16',
                        type: 'pie',
                        data: [{ value: 42, name: 'Micromax' }, { value: 51, name: 'Xolo' }, { value: 39, name: 'Lenevo' }, { value: 25, name: 'Sony' }, { value: 9, name: 'Others' }]
                    }]
                }, {
                    series: [{
                        name: '04-16',
                        type: 'pie',
                        data: [{ value: 29, name: 'Micromax' }, { value: 16, name: 'Xolo' }, { value: 24, name: 'Lenevo' }, { value: 19, name: 'Sony' }, { value: 5, name: 'Others' }]
                    }]
                },

            ] // end options object
    };

    myChart.setOption(option_dt);
    // Recent order table
    $('#res-config').DataTable({
        "responsive": true,
        "paging": false,
        "ordering": false,
        "info": false,
        "bFilter": false
    });
    var newcs = $('#new-cons').DataTable();

    new $.fn.dataTable.Responsive(newcs);

    $('#show-hide-res').DataTable({
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.childRowImmediate,
                type: ''
            }
        }
    });


});
