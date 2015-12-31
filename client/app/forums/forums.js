'use strict';

angular.module('xApp.forums', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('forums', {
        url: 'foros',
        parent: 'app',
        templateUrl: 'app/forums/forums.html',
        controller: 'ForumsCtrl',
        controllerAs: 'forums'
    });
}])
.controller('ForumsCtrl', ['$scope',
  function ($scope) {

  }
]);
