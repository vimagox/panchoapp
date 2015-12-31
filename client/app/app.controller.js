'use strict';

angular.module('xApp.app', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('app', {
        url: '',
        'abstract': true,
        templateUrl: 'app/app.html',
        controller: 'AppCtrl'
    });
}])
.controller('AppCtrl', ['$scope', '$state', '$location', '$window', '$anchorScroll',
  function ($scope, $state, $location, $window, $anchorScroll) {
    $scope.location = $location;
    $scope.date = new Date();
    $scope.settings = {borderColor:''};

    $scope.gotoAnchor = function(x) {
      var newHash = x;
      if ($location.hash() !== newHash) {
        $location.hash(x);
        $anchorScroll.yOffset = 41;
      } else {
        $anchorScroll();
      }
    };

    $scope.reloadRoute = function() {
      $state.go($state.current, {}, {reload: true});
    };

    $scope.isActive = function (route) {
      return route === $location.path();
    };

    var w = angular.element($window);
    $scope.getWindowSize = function() {
      return { 'h': w.height(), 'w': w.width() };
    };

    $scope.$watch($scope.getWindowSize, function(newValue) {
      $scope.windowHeight = newValue.h;
      $scope.windowWidth = newValue.w;
    }, true);

    w.bind('resize', function() { $scope.$apply(); });
  }
]);
