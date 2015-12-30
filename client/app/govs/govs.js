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
    $scope.settings = { borderColor:'red' };

    $scope.states = ["Aguascalientes", "Baja California", "Baja California Sur",
    "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango",
    "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán",
    "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro",
    "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco",
    "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"];
  }
]);
