'use strict';

angular.module('xApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'pancho'
])
.config(['$urlRouterProvider', '$locationProvider',
  function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
        .otherwise('/');

    $locationProvider.html5Mode(true).hashPrefix('!');
  }
]);

// 'ui.bootstrap',
// 'angularMoment',
// 'pageslide-directive',
// 'btford.socket-io',
// 'ngTouch',
