angular.module('app')
  .controller('RecipeStatsCtrl',
    function($scope, VersionService) {

        Chart.defaults.global.defaultFontFamily = 'Avenir Next';

        if ($('#ingr-dropdown .button').length > 0) {
          $('#ingr-dropdown .button').text(text);
          return;
        }

              $('#ingr-dropdown').dropdown({
        duration: 0,
        onChange: function(value, text, choice) {
          $scope.newIngredient.name = value;
        },
        onNoResults: function(value) {
          dropdownAddCreateNew(value);
        }
      });


        Chart.defaults.global.defaultFontFamily = 'Lato';

        var randomScalingFactor = function() {
            return Math.round(Math.random() * 100);
        };

        var versions = VersionService.getAllForRecipe($scope.recipe.id);

        versions = versions
                    .sort(function(a, b){
                        return a.snapshot.lastUpdated - b.snapshot.lastUpdated;
                    });

        var pointData = versions.map(function(v){

            // "round" the date to the nearest beginning of day.
            // Otherwise, it plots at exact time, which can look a little wonky.
            var d = new Date(v.snapshot.lastUpdated);
            d.setHours(0);
            d.setMinutes(0);
            d.setSeconds(0);
            d.setMilliseconds(0);

            return {
                // x: new Date(v.snapshot.lastUpdated), // <- wonky
                x: d,
                y: randomScalingFactor()
            };
        });

        // TODO: put the version data in here
        var data = {
            datasets: [{
                label: $scope.recipe.name + " Sales",
                data: pointData
                },
            ]
        };

        data.datasets.forEach(function(dataset) {
            dataset.borderColor = 'rgba(155, 89, 182, .9)';
            dataset.borderWidth = 6;
            dataset.backgroundColor = 'rgba(155, 89, 182,.05)';
            dataset.pointBorderColor = 'rgba(155, 89, 182, 1)';
            dataset.pointBackgroundColor = 'rgba(155, 89, 182, 1)';
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
                    }],
                },
            }
        });

    });