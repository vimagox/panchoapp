'use strict';

angular.module('xApp.main', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    });
}])
.controller('MainCtrl', ['$scope',
  function ($scope) {

  }
]);
