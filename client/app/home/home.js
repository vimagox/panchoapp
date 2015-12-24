'use strict';

angular.module('xApp.home', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/mx',
      templateUrl: 'app/home/home.html',
      controller: 'HomeCtrl',
      controllerAs: 'home'
    });
}])
.controller('HomeCtrl', ['$scope',
  function ($scope) {

  }
]);
