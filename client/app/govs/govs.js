'use strict';

angular.module('xApp.govs', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('govs', {
        url: '/gobiernos',
        parent: 'app',
        templateUrl: 'app/govs/govs.html',
        controller: 'FederalCtrl',
        controllerAs: 'federal'
    });
}])
.controller('FederalCtrl', ['$scope',
  function ($scope) {

  }
]);
