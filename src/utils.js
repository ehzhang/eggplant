angular.module('app')
  .run(function($rootScope, $sce, $sanitize) {
    $rootScope.UTIL = {
      fromNow: function(time) {
        return moment(time).fromNow();
      }
    };
  });