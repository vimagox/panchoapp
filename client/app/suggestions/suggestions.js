'use strict';

angular.module('xApp.suggestions', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('suggestions', {
        url: 'sugerencias',
        parent: 'app',
        templateUrl: 'app/suggestions/suggestions.html',
        controller: 'SuggestionsCtrl',
        controllerAs: 'suggestions'
    });
}])
.controller('SuggestionsCtrl', ['$scope',
  function ($scope) {

  }
]);
