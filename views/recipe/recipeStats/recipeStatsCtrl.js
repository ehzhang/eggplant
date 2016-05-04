angular.module('app')
  .controller('RecipeStatsCtrl',
    function($scope, $state, VersionService) {
        Chart.defaults.global.defaultFontFamily = 'Avenir Next';


        if ($('#ingr-dropdown .button').length > 0) {
          $('#ingr-dropdown .button').text(text);
          return;
        }

      // $('#ingr-dropdown').dropdown({
      //   duration: 0,
      //   onChange: function(value, text, choice) {
      //     $scope.newIngredient.name = value;
      //   },
      //   onNoResults: function(value) {
      //     dropdownAddCreateNew(value);
      //   }
      // });

        var randomScalingFactor = function() {
            return 500 + Math.round(Math.random() * 100);
        };

        function formatDate(time) {
            return moment(time).format('MM/DD/YY');
        }

        function zeroDate(date) {
            return moment(date).startOf('date');
        }
        var versions = VersionService.getAllForRecipe($scope.recipe.id);

        $scope.versions = versions.sort(function(a, b){
            return a.snapshot.latestVersion - b.snapshot.latestVersion;
        });

        var minDate = $scope.versions[0].snapshot.lastUpdated;
        var maxDate = new Date();
        maxDate.setHours(0);
        maxDate.setMinutes(0);
        maxDate.setSeconds(0);
        maxDate.setMilliseconds(0);

        $('#daterange').daterangepicker({
            format: 'MM/DD/YY',
            startDate: formatDate(minDate),
            endDate: formatDate(maxDate),
            minDate: formatDate(minDate),
            maxDate: formatDate(maxDate),
        }, function(start, end, label) {
            drawChart(zeroDate(start), zeroDate(end));
        });


        function getDiff(version) {
          if (version.index > 0) {
            var prev = VersionService.find(function(v){
              return v.recipeId == version.recipeId && v.index == version.index - 1;
            })[0];
            if (prev) {
              return VersionService.getDiff(prev, version);
            }
          }
        }

        $scope.diffs = $scope.versions.map(getDiff);

        var salesData = [];
        versionData = [];

        for (var i = 0; i < $scope.versions.length; i++) {
            var currentDate = new Date($scope.versions[i].snapshot.lastUpdated);
            var nextDate = maxDate;
            if (i < $scope.versions.length - 1) {
                var nextDate = new Date($scope.versions[i+1].snapshot.lastUpdated);
            }
            var randomData = randomScalingFactor();
            versionData.push({
                x: new Date(zeroDate(currentDate)),
                y: randomData,
                version: $scope.versions[i].snapshot.latestVersion,
            }); 
            salesData.push({
                x: new Date(zeroDate(currentDate)),
                y: randomData,
            }); 
            currentDate.setDate(currentDate.getDate() + 1);

            while (currentDate < nextDate) {
                salesData.push({
                    x: new Date(zeroDate(currentDate)),
                    y: randomScalingFactor(),
                }); 
                currentDate.setDate(currentDate.getDate() + 1);
            }
        }
        
        var drawChart = function(startDate, endDate) {
            $("#canvas").replaceWith("<canvas id='canvas'></canvas>");
            $("#canvas").on("mouseover", null);
            var ctx = document.getElementById("canvas").getContext("2d");

            var filteredVersionData = versionData.filter(function(d) {
                return moment(d.x).isSameOrAfter(new Date(startDate), 'date') && moment(d.x).isSameOrBefore(new Date(endDate), 'date');
            });
            var filteredSalesData = salesData.filter(function(d) {
                return moment(d.x).isSameOrAfter(new Date(startDate), 'date') && moment(d.x).isSameOrBefore(new Date(endDate), 'date');
            });

            if (!moment(filteredVersionData[0].x).isSame(new Date(startDate), 'date')) {
                filteredVersionData.unshift({
                    x: new Date(startDate),
                    y: filteredSalesData[0].y,
                    version: filteredVersionData[0].version - 1,
                })
            }

            if (!moment(filteredVersionData[filteredVersionData.length - 1].x).isSame(new Date(endDate), 'date')) {
                filteredVersionData.push({
                    x: new Date(zeroDate(endDate)),
                    y: filteredSalesData[filteredSalesData.length - 1].y,
                    version: versionData[versionData.length - 1].version + 1,
                });
            }

            var data = {
                datasets: [
                    {
                        label: "Versions",
                        data: filteredVersionData,
                        borderColor: 'rgba(155, 89, 182, .9)',
                        pointBorderColor: 'rgba(155, 89, 182, 1)',
                        pointBackgroundColor: 'rgba(155, 89, 182, 1)',
                    }, {
                        label: "Sales",
                        data: filteredSalesData,
                        borderColor: 'rgba(155, 89, 182, .3)',
                        pointBorderColor: 'rgba(155, 89, 182, .3)',
                        pointBackgroundColor: 'rgba(155, 89, 182, .3)',
                        borderDash: [10,5],
                    }
                ]
            };

            data.datasets.forEach(function(dataset) {
                dataset.borderWidth = 6;
                dataset.backgroundColor = 'rgba(155, 89, 182,.05)';
                dataset.pointHoverRadius = 6;
                dataset.radius = 6;
                dataset.hitRadius = 20;
                dataset.pointBorderWidth = 3;
            });


            var chart = new Chart(ctx, {
                type: 'line',
                data: data,
                options: {
                    hover: {
                        mode: 'label'
                    },
                    title: {
                        display: false,
                        text: $scope.recipe.name + ' Sales'
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
                                // unit: 'day',

                            },
                            ticks: {
                                min: startDate,
                                max: endDate,
                                determineDataLimits: function() {
                                    this.max = endDate;
                                    this.min = startDate;
                                },

                            }
                        }],
                        yAxes: [{
                            position: 'left',
                            scaleLabel: {
                                display: true,
                                labelString: 'Sales'
                            },
                            ticks: {
                            }

                        }],
                    },
                    tooltips: {
                        callbacks: {
                            label: function(tooltipItem, data) {
                                if (tooltipItem.datasetIndex == 0) {
                                    var updatedVersion = parseInt(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].version);
                                    if (updatedVersion == 1) {
                                        return "Created Version 1";
                                    } else if (updatedVersion >= filteredVersionData[filteredVersionData.length - 1].version) {
                                        return "";
                                    } else {
                                        return "Updated to Version " + updatedVersion;
                                    }
                                } else {
                                    return "Sales: " + tooltipItem.yLabel;
                                }
                            }
                        }
                    },
                }
            });

            var xBins = chart.config.data.datasets[0].metaData.map(function(e) {
                return e._view.x;
            });

            function findBin(x) {
                if (x < xBins[0]) {
                    return -1;
                } else {
                    var i = 0;
                    while (i < xBins.length) {
                        if (x >= xBins[i] && x < xBins[i+1]) {
                            return i;
                        }
                        i++;
                    }
                    return xBins.length;
                }
            }

            var resizePopup = function(){$('.ui.popup').css('max-height', $(window).height());};

            $(window).resize(function(e){
                resizePopup();
            });

            $("#canvas").on("mouseover", function(e) {
                var bin = findBin(e.offsetX);
                if (bin < 0 || bin >= xBins.length) {
                    return;
                }
                var rectWidth = xBins[bin+1] - xBins[bin];
                var rectHeight = chart.chartArea.bottom - chart.chartArea.top;
                $("#stats-highlighter").remove();
                $("#canvas-container").append("<div id='stats-highlighter'></div>")
                $("#stats-highlighter").css({
                    left: xBins[bin],
                    top: chart.chartArea.top,
                    width: rectWidth,
                    height: rectHeight,
                });
                $("#stats-highlighter").popup({
                    position : 'right center',
                    hoverable: true,
                    popup : $('#popup-' + parseInt(filteredVersionData[bin].version - 1)),
                });
            });
    }

        
    drawChart(minDate, maxDate);


    $scope.selectVersion = function(id) {
        $state.go('app.recipe.history.version', {versionId: id});
    }

});        