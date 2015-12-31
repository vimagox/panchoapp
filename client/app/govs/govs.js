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
    })
    .state('xstate', {
        url: '/x',
        parent: 'app',
        templateUrl: 'app/govs/state.html',
        controller: 'StateCtrl',
        controllerAs: 'state'
    });
}])
.controller('FederalCtrl', ['$scope', '$state', 'xStorage',
  function ($scope, $state, xStorage) {
    $scope.settings = { borderColor:'red' };
    $scope.govSelected = "";
    $scope.xstate = "";

    $scope.loadState = function(stateId) {
      xStorage.put('xstate', $scope.states[stateId]);
      $state.go('xstate');
    };

    $scope.viewGov = function(stateId) {
      $scope.xstate = $scope.states[stateId];
      $scope.govSelected = stateId===$scope.govSelected?'':stateId;
      angular.element('#gov'+stateId).find('.submenu').slideToggle('fast');
      angular.element('#gov'+stateId).toggleClass('is-expanded');
      $scope.gotoAnchor('gov'+stateId);
    }

    $scope.states = [
      {id:0,  uid:'fed', name:"Gobierno Federal", vato:"Enrique Peña Nieto", period:"2012 - 2018", party:"pri"},
      {id:1,  uid:'agu', name:"Aguascalientes", vato:"Carlos Lozano de la Torre", period:"2010 - 2016", party:"pri"},
      {id:2,  uid:'bcn', name:"Baja California", vato:"Francisco Vega de Lamadrid", period:"2013 - 2019", party:"pan"},
      {id:3,  uid:'bcs', name:"Baja California Sur", vato:"Marco Alberto Covarrubias Villaseñor", period:"2011 - 2017", party:"pan"},
      {id:4,  uid:'cam', name:"Campeche", vato:"Alejandro Moreno Cárdenas", period:"2015 - 2021", party:"pri"},
      {id:5,  uid:'cha', name:"Chiapas", vato:"Manuel Velasco Coello", period:"2012 - 2018", party:"pvem"},
      {id:6,  uid:'chi', name:"Chihuahua", vato:"César Horacio Duarte Jáquez", period:"2010 - 2016", party:"pri"},
      {id:7,  uid:'coa', name:"Coahuila", vato:"Rubén Moreira Valdez", period:"2011 - 2017", party:"pri"},
      {id:8,  uid:'col', name:"Colima", vato:"Mario Anguiano Moreno / Ramón Pérez Díaz", period:"2009 - 2015", party:"pri"},
      {id:9,  uid:'dur', name:"Durango", vato:"Jorge Alejandro Salum del Palacio", period:"2010 - 2016", party:"pri"},
      {id:10,  uid:'gua', name:"Guanajuato", vato:"Miguel Márquez Márquez", period:"2012-2018", party:"pan"},
      {id:11, uid:'gue', name:"Guerrero", vato:"Héctor Antonio Astudillo Flores", period:"2015-2021", party:"pri"},
      {id:12, uid:'gue', name:"Hidalgo", vato:"Francisco Olvera Ruiz", period:"2011 - 2016", party:"pri"},
      {id:13, uid:'jal', name:"Jalisco", vato:"Aristóteles Sandoval", period:"2013 - 2019", party:"pri"},
      {id:14, uid:'mex', name:"México", vato:"Eruviel Avila Villegas", period:"2011 - 2017", party:"pri"},
      {id:15, uid:'mic', name:"Michoacán", vato:"Silvano Aureoles Conejo", period:"2015 - 2021", party:"prd"},
      {id:16, uid:'mor', name:"Morelos", vato:"Graco Ramírez", period:"2012 - 2018", party:"prd"},
      {id:17, uid:'nay', name:"Nayarit", vato:"Roberto Sandoval", period:"2011 - 2017", party:"pri"},
      {id:18, uid:'nvl', name:"Nuevo León", vato:"Jaime Heliodoro Rodríguez Calderón", period:"2015 - 2021", party:"ind"},
      {id:19, uid:'oax', name:"Oaxaca", vato:"Gabino Cué Monteagudo", period:"2010 - 2016", party:"pop"},
      {id:20, uid:'pue', name:"Puebla", vato:"Rafael Moreno Valle", period:"2011 - 2017", party:"pan"},
      {id:21, uid:'que', name:"Querétaro", vato:"Francisco Domínguez Servién", period:"2015 - 2021", party:"pan"},
      {id:22, uid:'qui', name:"Quintana Roo", vato:"Roberto Borge Angulo", period:"2011 - 2016", party:"pri"},
      {id:23, uid:'slp', name:"San Luis Potosí", vato:"Fernando Toranzo Fernández", period:"2009 - 2015", party:"pri"},
      {id:24, uid:'sin', name:"Sinaloa", vato:"Mario López Valdez", period:"2011 - 2016", party:"pan"},
      {id:25, uid:'son', name:"Sonora", vato:"Claudia Pavlovich Arellano", period:"2015 - 2021", party:"pri"},
      {id:26, uid:'tab', name:"Tabasco", vato:"Arturo Núńez Jiménez", period:"2012 - 2018", party:"prd"},
      {id:27, uid:'tam', name:"Tamaulipas", vato:"Egidio Torre Cantú", period:"2011 - 2016", party:"pri"},
      {id:28, uid:'tla', name:"Tlaxcala", vato:"Mariano González Zarur", period:"2011 - 2017", party:"pri"},
      {id:29, uid:'ver', name:"Veracruz", vato:"Javier Duarte de Ochoa", period:"2010 - 2016", party:"pri"},
      {id:30, uid:'yuc', name:"Yucatán", vato:"Rolando Zapata Bello", period:"2012 - 2018", party:"pri"},
      {id:31, uid:'zac', name:"Zacatecas", vato:"Miguel Alonso Reyes", period:"2010 - 2016", party:"pri"},
      {id:32, uid:'df',  name:"D.F.", vato:"Miguel Angel Mancera Espinosa", period:"2012 - 2018", party:"prd"}
    ];
  }
])
.controller('StateCtrl', ['$scope', '$state', 'xStorage',
  function ($scope, $state, xStorage) {
    $scope.xstate = xStorage.get('xstate');
  }
]);
