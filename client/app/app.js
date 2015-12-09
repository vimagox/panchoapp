'use strict';

angular.module('xApp', [
  'xApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
