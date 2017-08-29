  'use strict';
$(document).ready(function() {
       dashboardEcharts();
    });

    $(window).on('resize',function() {
        dashboardEcharts();
    });


 function dashboardEcharts() {
     /*line chart*/
     var myChart = echarts.init(document.getElementById('main'));

     var option = {

         tooltip: {
             trigger: 'axis'
         },

         legend: {
             data: ['abc', 'def', 'pqr']
         },
         toolbox: {
             show: false,
             feature: {
                 mark: {show: true},
                 dataView: {show: true, readOnly: false},
                 magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                 restore: {show: true},
                 saveAsImage: {show: true}
             }
         },
         calculable: true,
         xAxis: [
             {
                 type: 'category',
                 splitLine: {
                     show: false
                 },
                 boundaryGap: false,
                 data: ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday']
             }
         ],
         color: ["rgba(165, 255, 222, 0.95)", "rgba(26, 188, 156, 0.39)", "rgba(26, 188, 156, 0.54)"],
         yAxis: [
             {
                 type: 'value',
                 splitLine: {
                     show: false
                 }
             }
         ],
         series: [
             {
                 name: 'abc',
                 type: 'line',
                 smooth: true,
                 itemStyle: {normal: {areaStyle: {type: 'macarons'}}},
                 data: [10, 12, 21, 54, 260, 830, 710]
             },
             {
                 name: 'def',
                 type: 'line',
                 smooth: true,
                 itemStyle: {normal: {areaStyle: {type: 'macarons'}}},
                 data: [30, 182, 434, 791, 390, 30, 10]
             },
             {
                 name: 'pqr',
                 type: 'line',
                 smooth: true,
                 itemStyle: {normal: {areaStyle: {type: 'macarons'}}},
                 data: [1320, 1132, 601, 234, 120, 90, 20]
             }
         ]
     };

     // Load data into the ECharts instance
     myChart.setOption(option);
     // myChart.setTheme({color:['#2196F3','#4CAF50','#ff5252']});


     /*circle chart*/
     var myChart = echarts.init(document.getElementById('pie-chart'));

     var idx = 1;
     var option_dt = {

         timeline: {
             show: true,
             data: ['06-16', '05-16', '04-16'],
             label: {
                 formatter: function (s) {
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

         options: [
             {
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
                         mark: {show: false},
                         dataView: {show: false, readOnly: true},
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
                         restore: {show: false},
                         saveAsImage: {show: true}
                     }
                 },


                 series: [
                     {
                         name: '06-16',
                         type: 'pie',
                         radius: [15, '70%'],
                         roseType: 'radius',
                         center: ['50%', '45%'],
                         width: '50%',       // for funnel
                         itemStyle: {
                             normal: {label: {show: true}, labelLine: {show: true}},
                             emphasis: {label: {show: false}, labelLine: {show: false}}
                         },
                         data: [{value: 35, name: 'Micromax'}, {value: 16, name: 'Xolo'}, {
                             value: 27,
                             name: 'Lenevo'
                         }, {value: 29, name: 'Sony'}, {value: 12, name: 'Others'}]
                     }
                 ]
             },
             {
                 series: [
                     {
                         name: '05-16',
                         type: 'pie',
                         data: [{value: 42, name: 'Micromax'}, {value: 51, name: 'Xolo'}, {
                             value: 39,
                             name: 'Lenevo'
                         }, {value: 25, name: 'Sony'}, {value: 9, name: 'Others'}]
                     }
                 ]
             },
             {
                 series: [
                     {
                         name: '04-16',
                         type: 'pie',
                         data: [{value: 29, name: 'Micromax'}, {value: 16, name: 'Xolo'}, {
                             value: 24,
                             name: 'Lenevo'
                         }, {value: 19, name: 'Sony'}, {value: 5, name: 'Others'}]
                     }
                 ]
             },

         ] // end options object
     };

     myChart.setOption(option_dt);

     /*server-load*/
     var myChartGauge = echarts.init(document.getElementById('server-load'));

     var optionGauge = {

         tooltip: {
             formatter: "{b} : {c}%"
         },
         toolbox: {
             show: false,
             feature: {
                 mark: {show: false},
                 restore: {show: false},
                 saveAsImage: {show: true}
             }
         },
         series: [
             {
                 name: 'Server Load',
                 type: 'gauge',
                 center: ['50%', '50%'],
                 radius: ['0%', '100%'],
                 axisLine: {
                     show: true,
                     lineStyle: {
                         color: [
                             [0.2, '#1ABC9C'],
                             [0.8, '#64DDBB'],
                             [1, '#1ABC9C']
                         ],
                         width: 10
                     }
                 },
                 title: {
                     show: false,
                     offsetCenter: [0, '120%'],
                     textStyle: {
                         color: '#1ABC9C',
                         fontSize: 15
                     }
                 },
                 detail: {
                     show: true,
                     backgroundColor: 'rgba(0,0,0,0)',
                     borderWidth: 0,
                     borderColor: '#ccc',
                     width: 100,
                     height: 40,
                     offsetCenter: [0, '40%'],
                     formatter: '{value}%',
                     textStyle: {
                         color: 'auto',
                         fontSize: 20
                     }
                 },

                 data: [{value: 50, name: 'Server Load (MB)'}]
             }
         ]
     };

     gauge_load_chart(optionGauge);
     var timeTicket = setInterval(function () {

         gauge_load_chart(optionGauge);
     }, 2000);


     function gauge_load_chart(optionGauge) {

         optionGauge.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
         myChartGauge.setOption(optionGauge, true);
     }


     /*bar chart*/
     var myChart = echarts.init(document.getElementById('bar_chart'));

     option = {
         tooltip: {
             trigger: 'axis',
             axisPointer: {
                 type: 'shadow'
             },
             formatter: function (params) {
                 return params[0].name + '<br/>'
                     + params[0].seriesName + ' : ' + params[0].value + '<br/>'
                     + params[1].seriesName + ' : ' + (params[1].value + params[0].value);
             }
         },
         legend: {
             selectedMode: false,
             data: ['Acutal', 'Forecast']
         },
         toolbox: {
             show: false
         },
         calculable: true,
         xAxis: [
             {
                 type: 'category',
                 data: ['Cosco', 'CMA', 'APL', 'OOCL', 'Wanhai', 'Zim']
             }
         ],
         yAxis: [
             {
                 type: 'value',
                 boundaryGap: [0, 0.1]
             }
         ],
         series: [
             {
                 name: 'Acutal',
                 type: 'bar',
                 stack: 'sum',
                 barCategoryGap: '50%',
                 itemStyle: {
                     normal: {
                         color: 'rgba(26, 188, 156, 0.54)',
                         barBorderColor: 'rgba(26, 188, 156, 0.54)',
                         barBorderWidth: 3,
                         barBorderRadius: 0,
                         label: {
                             show: true, position: 'insideTop'
                         }
                     }
                 },
                 data: [260, 200, 220, 120, 100, 80]
             },
             {
                 name: 'Forecast',
                 type: 'bar',
                 stack: 'sum',
                 itemStyle: {
                     normal: {
                         color: '#fff',
                         barBorderColor: '#1ABC9C',
                         barBorderWidth: 3,
                         barBorderRadius: 0,
                         label: {
                             show: true,
                             position: 'top',
                             formatter: function (params) {
                                 for (var i = 0, l = option.xAxis[0].data.length; i < l; i++) {
                                     if (option.xAxis[0].data[i] == params.name) {
                                         return option.series[0].data[i] + params.value;
                                     }
                                 }
                             },
                             textStyle: {
                                 color: '#1ABC9C'
                             }
                         }
                     }
                 },
                 data: [40, 80, 50, 80, 80, 70]
             }
         ]
     };

     myChart.setOption(option);
 };
  /*Scatter chart*/