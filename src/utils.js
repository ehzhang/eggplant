angular.module('app')
  .run(function($rootScope, $sce, $sanitize) {
    $rootScope.UTIL = {
      markdownToHTML: function(md) {
        var converter = new showdown.Converter();
        var html = $sanitize(converter.makeHtml(md));
        return $sce.trustAsHtml(html);
      }
    };
  });