"use strict";
$(document).ready(function() {
    var chartData = [{
        "date": "2012-01-01",
        "distance": 227,
        "townName": "New York",
        "townName2": "New York",
        "townSize": 25,
        "latitude": 40.71,
        "duration": 408
    }, {
        "date": "2012-01-02",
        "distance": 371,
        "townName": "Washington",
        "townSize": 14,
        "latitude": 38.89,
        "duration": 482
    }, {
        "date": "2012-01-03",
        "distance": 433,
        "townName": "Wilmington",
        "townSize": 6,
        "latitude": 34.22,
        "duration": 562
    }, {
        "date": "2012-01-04",
        "distance": 345,
        "townName": "Jacksonville",
        "townSize": 7,
        "latitude": 30.35,
        "duration": 379
    }, {
        "date": "2012-01-05",
        "distance": 480,
        "townName": "Miami",
        "townName2": "Miami",
        "townSize": 10,
        "latitude": 25.83,
        "duration": 501
    }, {
        "date": "2012-01-06",
        "distance": 386,
        "townName": "Tallahassee",
        "townSize": 7,
        "latitude": 30.46,
        "duration": 443
    }, {
        "date": "2012-01-07",
        "distance": 348,
        "townName": "New Orleans",
        "townSize": 10,
        "latitude": 29.94,
        "duration": 405
    }, {
        "date": "2012-01-08",
        "distance": 238,
        "townName": "Houston",
        "townName2": "Houston",
        "townSize": 16,
        "latitude": 29.76,
        "duration": 309
    }, {
        "date": "2012-01-09",
        "distance": 218,
        "townName": "Dalas",
        "townSize": 17,
        "latitude": 32.8,
        "duration": 287
    }, {
        "date": "2012-01-10"
    }, {
        "date": "2012-01-11"
    }, {
        "date": "2012-01-12"
    }, ];
    var chart = AmCharts.makeChart("chartdiv", {
        type: "serial",
        theme: "light",
        dataDateFormat: "YYYY-MM-DD",
        dataProvider: chartData,

        addClassNames: true,
        startDuration: 1,
        color: "black",
        marginLeft: 0,

        categoryField: "date",
        categoryAxis: {
            parseDates: true,
            minPeriod: "DD",
            autoGridCount: false,
            gridCount: 50,
            gridAlpha: 0.1,
            gridColor: "#52BEDB",
            axisColor: "#7D94A1",
            dateFormats: [{
                period: 'DD',
                format: 'DD'
            }, {
                period: 'WW',
                format: 'MMM DD'
            }, {
                period: 'MM',
                format: 'MMM'
            }, {
                period: 'YYYY',
                format: 'YYYY'
            }]
        },

        valueAxes: [{
            id: "a1",
            title: "distance",
            gridAlpha: 0,
            axisAlpha: 0
        }, {
            id: "a2",
            position: "right",
            gridAlpha: 0,
            axisAlpha: 0,
            labelsEnabled: false
        }, {
            id: "a3",
            title: "duration",
            position: "right",
            gridAlpha: 0,
            axisAlpha: 0,
            inside: true,
            duration: "mm",
            durationUnits: {
                DD: "d. ",
                hh: "h ",
                mm: "min",
                ss: ""
            }
        }],
        graphs: [{
            id: "g1",
            valueField: "distance",
            title: "distance",
            type: "column",
            fillAlphas: 0.9,
            valueAxis: "a1",
            balloonText: "[[value]] miles",
            legendValueText: "[[value]] mi",
            legendPeriodValueText: "total: [[value.sum]] mi",
            lineColor: "#52BEDB",
            alphaField: "alpha",
        }, {
            id: "g2",
            valueField: "latitude",
            classNameField: "bulletClass",
            title: "latitude/city",
            type: "line",
            valueAxis: "a2",
            lineColor: "black",
            lineThickness: 1,
            legendValueText: "[[description]]/[[value]]",
            descriptionField: "townName",
            bullet: "round",
            bulletSizeField: "townSize",
            bulletBorderColor: "#02617A",
            bulletBorderAlpha: 1,
            bulletBorderThickness: 2,
            bulletColor: "#89C4F4",
            labelText: "[[townName2]]",
            labelPosition: "right",
            balloonText: "latitude:[[value]]",
            showBalloon: true,
            animationPlayed: true,
        }, {
            id: "g3",
            title: "duration",
            valueField: "duration",
            type: "line",
            valueAxis: "a3",
            lineColor: "#E26A6A",
            balloonText: "[[value]]",
            lineThickness: 1,
            legendValueText: "[[value]]",
            bullet: "square",
            bulletBorderColor: "#E26A6A",
            bulletBorderThickness: 1,
            bulletBorderAlpha: 1,
            dashLengthField: "dashLength",
            animationPlayed: true
        }],

        chartCursor: {
            zoomable: false,
            categoryBalloonDateFormat: "DD",
            cursorAlpha: 0,
            valueBalloonsEnabled: false
        },
        legend: {
            bulletType: "round",
            equalWidths: false,
            valueWidth: 120,
            useGraphSettings: true,
            color: "black"
        }
    });
});
