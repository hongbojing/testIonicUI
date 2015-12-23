/**
 * Created by hongbojing on 12/22/15.
 */
/**
 * Created by hongbojing on 12/22/15.
 */
(function() {
  'use strict';

  angular
    .module('starter')
    .directive('resize', resize);

  resize.$inject = ['$window'];

  function resize($window) {
    return function (scope) {
      var pageWindow = angular.element($window);
      scope.$watch(function () {
        return {
          'w': window.innerWidth
        };
      }, function (newValue) {
        scope.windowWidth = newValue.w;
        scope.isDesktop = scope.windowWidth >= 992;
        scope.isTablet = (scope.windowWidth < 992) && (scope.windowWidth >= 465);
        scope.isMobile = scope.windowWidth < 465;
      }, true);

      pageWindow.bind('resize', function () {
        scope.$apply();
      });
    };
  }

})();
