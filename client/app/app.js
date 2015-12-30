'use strict';

angular.module('xApp', [
    'xApp.app',
    'xApp.main',
    'xApp.home',
    'xApp.govs',
    'xApp.forums',
    'xApp.stats',
    'xApp.suggestions',
    'xApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'
])
.config(['$urlRouterProvider', '$locationProvider',
  function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
        .otherwise('/');

    $locationProvider.html5Mode(true);
  }
]);
