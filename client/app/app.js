'use strict';

angular.module('xApp', [
    'xApp.main',
    'xApp.home',
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
