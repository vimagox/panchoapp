'use strict';

angular.module('xApp.govs', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('govs', {
        url: '/',
        parent: 'app',
        templateUrl: 'app/govs/govs.html',
        controller: 'FederalCtrl'
    })
    .state('xstate', {
        url: '/:xstate',
        parent: 'app',
        templateUrl: 'app/govs/state.html',
        controller: 'StateCtrl'
    })
    .state('xsuggestions', {
        url: '/:xstate/sugerencias',
        parent: 'app',
        templateUrl: 'app/govs/suggestions.html',
        controller: 'XSuggestionsCtrl'
    })
    .state('xcomplaints', {
        url: '/:xstate/quejas',
        parent: 'app',
        templateUrl: 'app/govs/complaints.html',
        controller: 'XComplaintsCtrl'
    })
    .state('xforums', {
        url: '/:xstate/foros',
        parent: 'app',
        templateUrl: 'app/govs/forums.html',
        controller: 'XForumsCtrl'
    })
    .state('xmunicipios', {
        url: '/:xstate/municipios',
        parent: 'app',
        templateUrl: 'app/govs/municipios.html',
        controller: 'XMunicipiosCtrl'
    })
    .state('xdelegaciones', {
        url: '/:xstate/delegaciones',
        parent: 'app',
        templateUrl: 'app/govs/municipios.html',
        controller: 'XMunicipiosCtrl'
    });
}])
.controller('FederalCtrl', ['$scope', '$state', 'xStorage',
  function ($scope, $state, xStorage) {
    $scope.settings = { borderColor:'red' };
    $scope.govSelected = "";
    $scope.xstate = "";

    $scope.loadState = function(stateId) {
      var x = $scope.states[stateId];
      xStorage.put('xstate', x);
      $state.go('xstate', {xstate: x.uid});
    };

    // $scope.viewMenu = function() {
    //   angular.element('.govs-header-menu').slideToggle('fast');
    //   angular.element('.govs-header-menu').toggleClass('is-expanded');
    // };

    $scope.viewGov = function(stateId) {
      $scope.state = $scope.states[stateId];
      $scope.govSelected = stateId===$scope.govSelected?'':stateId;
      angular.element('#gov'+stateId).find('.submenu').slideToggle('fast');
      angular.element('#gov'+stateId).toggleClass('is-expanded');
      $scope.gotoAnchor('gov'+stateId);
      $state.go('govs');
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
.controller('StateCtrl', ['$scope', '$state', 'xStorage', '$stateParams',
  function ($scope, $state, xStorage, $stateParams) {
    $scope.xstate = xStorage.get('xstate');

    $scope.viewGov = function(stateId) {
      // angular.element('#gov'+stateId).find('.submenu').slideToggle('fast');
      // angular.element('#gov'+stateId).toggleClass('is-expanded');
      $state.go('govs');
      $scope.gotoAnchor('gov'+stateId);
    }
  }
])
.controller('XSuggestionsCtrl', ['$scope', '$state', 'xStorage',
  function ($scope, $state, xStorage) {
    $scope.xstate = xStorage.get('xstate');
  }
])
.controller('XComplaintsCtrl', ['$scope', '$state', 'xStorage',
  function ($scope, $state, xStorage) {
    $scope.xstate = xStorage.get('xstate');
  }
])
.controller('XForumsCtrl', ['$scope', '$state', 'xStorage',
  function ($scope, $state, xStorage) {
    $scope.xstate = xStorage.get('xstate');
  }
])
.controller('XMunicipiosCtrl', ['$scope', '$state', 'xStorage',
  function ($scope, $state, xStorage) {
    $scope.xstate = xStorage.get('xstate');
  }
]);
