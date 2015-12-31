'use strict';

angular.module('xApp.stats', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('stats', {
        url: 'estadisticas',
        parent: 'app',
        templateUrl: 'app/stats/stats.html',
        controller: 'StatsCtrl',
        controllerAs: 'stats'
    });
}])
.controller('StatsCtrl', ['$scope',
  function ($scope) {

  }
]);
