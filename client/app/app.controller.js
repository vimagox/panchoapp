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
.controller('AppCtrl', ['$scope', '$state', '$location', '$window',
  function ($scope, $state, $location, $window) {
    $scope.location = $location;
    $scope.date = new Date();
    $scope.settings = {borderColor:''};

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
      console.log(newValue.h);
      $scope.windowHeight = newValue.h;
      $scope.windowWidth = newValue.w;
    }, true);

    w.bind('resize', function() { $scope.$apply(); });
  }
]);
