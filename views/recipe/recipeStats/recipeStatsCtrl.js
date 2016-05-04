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

        var versions = VersionService.getAllForRecipe($scope.recipe.id);
        $scope.versions = versions.sort(function(a, b){
            return a.snapshot.lastUpdated - b.snapshot.lastUpdated;
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
            var nextDate = new Date();
            if (i < $scope.versions.length - 1) {
                var nextDate = new Date($scope.versions[i+1].snapshot.lastUpdated);
            }
            var randomData = randomScalingFactor();
            versionData.push({
                x: new Date(currentDate),
                y: randomData,
            }); 
            salesData.push({
                x: new Date(currentDate),
                y: randomData,
            }); 
            currentDate.setDate(currentDate.getDate() + 1);

            while (currentDate < nextDate) {
                salesData.push({
                    x: new Date(currentDate),
                    y: randomScalingFactor(),
                }); 
                currentDate.setDate(currentDate.getDate() + 1);
            }
        }
        versionData.push({
            x: new Date(),
            y: versionData[versionData.length - 1].y,
        }); 

        var data = {
            datasets: [
                {
                    label: "Versions",
                    data: versionData,
                    borderColor: 'rgba(155, 89, 182, .9)',
                    pointBorderColor: 'rgba(155, 89, 182, 1)',
                    pointBackgroundColor: 'rgba(155, 89, 182, 1)',
                }, {
                    label: "Sales",
                    data: salesData,
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

        var ctx = document.getElementById("canvas").getContext("2d");

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
                        },
                    }],
                    yAxes: [{
                        position: 'left',
                        scaleLabel: {
                            display: true,
                            labelString: 'Sales'
                        }
                    }],
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            if (tooltipItem.datasetIndex == 0) {
                                return "Updated to Version " + parseInt(tooltipItem.datasetIndex + 1);
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
                popup : $('#popup-' + bin),
            });
        });


    $scope.selectVersion = function(id) {
        $state.go('app.recipe.history.version', {versionId: id});
    }

});        