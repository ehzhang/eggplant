angular.module('app')
  .controller('RecipeStatsCtrl',
    function($scope) {

        Chart.defaults.global.defaultFontFamily = 'Lato';

        var randomScalingFactor = function() {
            return Math.random() * 100;
        };
        var randomColor = function(opacity) {
            return 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + (opacity || '.3') + ')';
        };
        // TODO: put the version data in here
        var scatterChartData = {
            datasets: [{
                label: "My First dataset",
                data: [{
                    x: new Date(2016, 4, 20),
                    y: randomScalingFactor(),
                }, {
                    x: new Date(2016, 4, 21),
                    y: randomScalingFactor(),
                }, {
                    x: new Date(2016, 4, 22),
                    y: randomScalingFactor(),
                }, {
                    x: new Date(2016, 4, 23),
                    y: randomScalingFactor(),
                }, {
                    x: new Date(2016, 4, 24),
                    y: randomScalingFactor(),
                }, {
                    x: new Date(2016, 4, 25),
                    y: randomScalingFactor(),
                }, {
                    x: new Date(2016, 4, 26),
                    y: randomScalingFactor(),
                }]
            },
            //  {
            //     label: "My Second dataset",
            //     data: [{
            //         x: new Date(2016, 4, 20),
            //         y: randomScalingFactor(),
            //     }, {
            //         x: new Date(2016, 4, 21),
            //         y: randomScalingFactor(),
            //     }, {
            //         x: new Date(2016, 4, 22),
            //         y: randomScalingFactor(),
            //     }, {
            //         x: new Date(2016, 4, 23),
            //         y: randomScalingFactor(),
            //     }, {
            //         x: new Date(2016, 4, 24),
            //         y: randomScalingFactor(),
            //     }, {
            //         x: new Date(2016, 4, 25),
            //         y: randomScalingFactor(),
            //     }, {
            //         x: new Date(2016, 4, 26),
            //         y: randomScalingFactor(),
            //     }]
            // }
            ]
        };
        $.each(scatterChartData.datasets, function(i, dataset) {
            dataset.borderColor = randomColor(0.4);
            dataset.backgroundColor = randomColor(0.1);
            dataset.pointBorderColor = randomColor(0.7);
            dataset.pointBackgroundColor = randomColor(0.5);
            dataset.pointBorderWidth = 1;
        });
        var ctx = document.getElementById("canvas").getContext("2d");
        var myScatter = Chart.Scatter(ctx, {
            data: scatterChartData,
            options: {
                title: {
                    display: true,
                    text: 'Sales'
                },
                scales: {
                    xAxes: [{
                        type: "time",
                        position: 'bottom',
                        scaleLabel: {
                            display: true,
                            labelString: 'Date'
                        },
                        time: {
                            // Moment js for each of the units. Replaces `displayFormat`
                            // To override, use a pattern string from http://momentjs.com/docs/#/displaying/format/
                            displayFormats: {
                                'millisecond': 'SSS [ms]',
                                'second': 'h:mm:ss a', // 11:20:01 AM
                                'minute': 'h:mm:ss a', // 11:20:01 AM
                                'hour': 'MMM D, hA', // Sept 4, 5PM
                                'day': 'll', // Sep 4 2015
                                'week': 'll', // Week 46, or maybe "[W]WW - YYYY" ?
                                'month': 'MMM YYYY', // Sept 2015
                                'quarter': '[Q]Q - YYYY', // Q3
                                'year': 'YYYY', // 2015
                            },
                            // Sets the display format used in tooltip generation
                            tooltipFormat: 'll',
                        },
                    }],
                    yAxes: [{
                        position: 'left',
                        scaleLabel: {
                            display: true,
                            labelString: 'Sales'
                        }
                    }]
                }
            }
        });

    });