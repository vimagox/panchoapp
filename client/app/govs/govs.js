'use strict';

angular.module('xApp.govs', ['ui.router', 'xApp.config', 'xApp.services', 'xApp.storage'])
.config(['$stateProvider', 'config',
function($stateProvider, config) {
  $stateProvider
    .state('app', {
        url: '',
        'abstract': true,
        templateUrl: 'app/govs/home.html',
        controller: 'AppCtrl' })
    .state('govs', {
        url: '/',
        parent: 'app',
        templateUrl: 'app/govs/govs.html',
        controller: 'GovsCtrl',
        resolve: { govs: ['mService', function(mService) {
          console.log('wtf.............');
          console.log(mService);
          return mService.getAsync(config.GOVS_ROUTE);
        }]} })
    .state('xstate', {
        url: '/:xstate',
        parent: 'app',
        templateUrl: 'app/govs/state.html',
        controller: 'StateCtrl',
        resolve: { state: ['mService', 'xStorage', function(mService, xStorage) {
          return mService.getAsync(xStorage.gov().url);
        }]} })
    .state('xsuggestions', {
        url: '/:xstate/sugerencias',
        parent: 'app',
        templateUrl: 'app/govs/suggestions.html',
        controller: 'XSuggestionsCtrl',
        resolve: { suggestions: ['mService', 'xStorage', function(mService, xStorage) {
          return mService.getAsync(xStorage.gov().suggestions.url);
        }]} })
    .state('xcomplaints', {
        url: '/:xstate/quejas',
        parent: 'app',
        templateUrl: 'app/govs/complaints.html',
        controller: 'XComplaintsCtrl',
        resolve: { govs: ['mService', 'xStorage', function(mService, xStorage) {
          return mService.getAsync(xStorage.gov().complaints.url);
        }]} })
    .state('xforums', {
        url: '/:xstate/foros',
        parent: 'app',
        templateUrl: 'app/govs/forums.html',
        controller: 'XForumsCtrl',
        resolve: { govs: ['mService', 'xStorage', function(mService, xStorage) {
          return mService.getAsync(xStorage.gov().forums.url);
        }]} })
    .state('xmunicipios', {
        url: '/:xstate/municipios',
        parent: 'app',
        templateUrl: 'app/govs/municipios.html',
        controller: 'XMunicipiosCtrl',
        resolve: { municipios: ['mService', 'xStorage', function(mService, xStorage) {
          return mService.getAsync(xStorage.gov().municipios.url);
        }]} })
    .state('xdelegaciones', {
        url: '/:xstate/delegaciones',
        parent: 'app',
        templateUrl: 'app/govs/municipios.html',
        controller: 'XMunicipiosCtrl',
        resolve: { municipios: ['mService', 'xStorage', function(mService, xStorage) {
          return mService.getAsync(xStorage.gov().municipios.url);
        }]} });
}])
.controller('AppCtrl', ['$scope', '$state', '$location', '$window', '$anchorScroll',
  function ($scope, $state, $location, $window, $anchorScroll) {
    $scope.location = $location;
    // $scope.date = new Date();
    // $scope.settings = {borderColor:''};
    //
    // $scope.gotoAnchor = function(x) {
    //   var newHash = x;
    //   if ($location.hash() !== newHash) {
    //     $location.hash(x);
    //     $anchorScroll.yOffset = 41;
    //   } else {
    //     $anchorScroll();
    //   }
    // };
    //
    // $scope.reloadRoute = function() {
    //   $state.go($state.current, {}, {reload: true});
    // };
    //
    // $scope.isActive = function (route) {
    //   return route === $location.path();
    // };
    //
    // var w = angular.element($window);
    // $scope.getWindowSize = function() {
    //   return { 'h': w.height(), 'w': w.width() };
    // };
    //
    // $scope.$watch($scope.getWindowSize, function(newValue) {
    //   $scope.windowHeight = newValue.h;
    //   $scope.windowWidth = newValue.w;
    // }, true);
    //
    // w.bind('resize', function() { $scope.$apply(); });
  }
])
.controller('GovsCtrl', ['$scope', '$state', 'xStorage', 'govs',
  function ($scope, $state, xStorage, govs) {
    $scope.settings = { borderColor:'red' };
    $scope.govSelected = "";
    $scope.xstate = "";

    $scope.states = govs;

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
  }
])
.controller('StateCtrl', ['$scope', '$state', 'xStorage', '$stateParams',
  function ($scope, $state, xStorage, $stateParams) {
    $scope.xstate = xStorage.get('xstate');
  }
])
.controller('XSuggestionsCtrl', ['$scope', '$state', 'xStorage',
  function ($scope, $state, xStorage) {
    $scope.xstate = xStorage.get('xstate');
    $scope.back = function() {
      $state.go('xstate', {xstate: x.uid})
    }
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

    $scope.loadMunicipio = function(municipioId) {
      var x = $scope.xstate.municipios[municipioId-3200];
      xStorage.put('xstate', x);
      $state.go('xstate', {xstate: x.uid});
    };
  }
]);



// $scope.states = [
//   {id:0,  uid:'fed', name:"Gobierno Federal", vato:"Enrique Peña Nieto", period:"2012 - 2018", party:"pri"},
//   {id:1,  uid:'aguas', name:"Aguascalientes", vato:"Carlos Lozano de la Torre", period:"2010 - 2016", party:"pri"},
//   {id:2,  uid:'baja', name:"Baja California", vato:"Francisco Vega de Lamadrid", period:"2013 - 2019", party:"pan"},
//   {id:3,  uid:'bajasur', name:"Baja California Sur", vato:"Marco Alberto Covarrubias Villaseñor", period:"2011 - 2017", party:"pan"},
//   {id:4,  uid:'campeche', name:"Campeche", vato:"Alejandro Moreno Cárdenas", period:"2015 - 2021", party:"pri"},
//   {id:5,  uid:'chiapas', name:"Chiapas", vato:"Manuel Velasco Coello", period:"2012 - 2018", party:"pvem"},
//   {id:6,  uid:'chihuahua', name:"Chihuahua", vato:"César Horacio Duarte Jáquez", period:"2010 - 2016", party:"pri"},
//   {id:7,  uid:'coahuila', name:"Coahuila", vato:"Rubén Moreira Valdez", period:"2011 - 2017", party:"pri"},
//   {id:8,  uid:'colima', name:"Colima", vato:"Mario Anguiano Moreno / Ramón Pérez Díaz", period:"2009 - 2015", party:"pri"},
//   {id:9,  uid:'durango', name:"Durango", vato:"Jorge Alejandro Salum del Palacio", period:"2010 - 2016", party:"pri"},
//   {id:10,  uid:'guanajuato', name:"Guanajuato", vato:"Miguel Márquez Márquez", period:"2012-2018", party:"pan"},
//   {id:11, uid:'guerrero', name:"Guerrero", vato:"Héctor Antonio Astudillo Flores", period:"2015-2021", party:"pri"},
//   {id:12, uid:'hidalgo', name:"Hidalgo", vato:"Francisco Olvera Ruiz", period:"2011 - 2016", party:"pri"},
//   {id:13, uid:'jalisco', name:"Jalisco", vato:"Aristóteles Sandoval", period:"2013 - 2019", party:"pri"},
//   {id:14, uid:'mexico', name:"México", vato:"Eruviel Avila Villegas", period:"2011 - 2017", party:"pri"},
//   {id:15, uid:'michoacan', name:"Michoacán", vato:"Silvano Aureoles Conejo", period:"2015 - 2021", party:"prd"},
//   {id:16, uid:'morelos', name:"Morelos", vato:"Graco Ramírez", period:"2012 - 2018", party:"prd"},
//   {id:17, uid:'nayarit', name:"Nayarit", vato:"Roberto Sandoval", period:"2011 - 2017", party:"pri"},
//   {id:18, uid:'nuevoleon', name:"Nuevo León", vato:"Jaime Heliodoro Rodríguez Calderón", period:"2015 - 2021", party:"ind"},
//   {id:19, uid:'oaxaca', name:"Oaxaca", vato:"Gabino Cué Monteagudo", period:"2010 - 2016", party:"pop"},
//   {id:20, uid:'puebla', name:"Puebla", vato:"Rafael Moreno Valle", period:"2011 - 2017", party:"pan"},
//   {id:21, uid:'queretaro', name:"Querétaro", vato:"Francisco Domínguez Servién", period:"2015 - 2021", party:"pan"},
//   {id:22, uid:'roo', name:"Quintana Roo", vato:"Roberto Borge Angulo", period:"2011 - 2016", party:"pri"},
//   {id:23, uid:'slp', name:"San Luis Potosí", vato:"Fernando Toranzo Fernández", period:"2009 - 2015", party:"pri"},
//   {id:24, uid:'sinaloa', name:"Sinaloa", vato:"Mario López Valdez", period:"2011 - 2016", party:"pan"},
//   {id:25, uid:'sonora', name:"Sonora", vato:"Claudia Pavlovich Arellano", period:"2015 - 2021", party:"pri"},
//   {id:26, uid:'tabasco', name:"Tabasco", vato:"Arturo Núńez Jiménez", period:"2012 - 2018", party:"prd"},
//   {id:27, uid:'tamaulipas', name:"Tamaulipas", vato:"Egidio Torre Cantú", period:"2011 - 2016", party:"pri"},
//   {id:28, uid:'tlaxcala', name:"Tlaxcala", vato:"Mariano González Zarur", period:"2011 - 2017", party:"pri"},
//   {id:29, uid:'veracruz', name:"Veracruz", vato:"Javier Duarte de Ochoa", period:"2010 - 2016", party:"pri"},
//   {id:30, uid:'yucatan', name:"Yucatán", vato:"Rolando Zapata Bello", period:"2012 - 2018", party:"pri"},
//   {id:31, uid:'zacatecas', name:"Zacatecas", vato:"Miguel Alonso Reyes", period:"2010 - 2016", party:"pri"},
//   {id:32, uid:'df',  name:"D.F.", vato:"Miguel Angel Mancera Espinosa", period:"2012 - 2018", party:"prd",
//     municipios: [
//       {id:3200, uid:'ao',  name:"Alvaro Obregón", vato:"Maria Antonieta Hidalgo Torres", period:"", party:"pri"},
//       {id:3201, uid:'az',  name:"Azcapotzalco", vato:"Pablo Moctezuma Barragán", period:"", party:"pri"},
//       {id:3202, uid:'bj',  name:"Benito Juárez", vato:"Christian von Roehrich", period:"", party:"pri"},
//       {id:3203, uid:'co',  name:"Coyoacán", vato:"José Valentin Maldonado Salgado", period:"", party:"pri"},
//       {id:3204, uid:'cj',  name:"Cuajimalpa", vato:"Miguel Angel Salazar", period:"", party:"pan"},
//       {id:3205, uid:'cu',  name:"Cuauhtémoc", vato:"Ricardo Monreal", period:"", party:"pan"},
//       {id:3206, uid:'gu',  name:"Gustavo A. Madero", vato:"Victor Hugo Lobo", period:"", party:"prd"},
//       {id:3207, uid:'ic',  name:"Iztacalco", vato:"Carlos Estrada", period:"", party:"prd"},
//       {id:3208, uid:'ip',  name:"Iztapalapa", vato:"Dione Anguiano", period:"", party:"pri"},
//       {id:3209, uid:'mc',  name:"Magdalena Contreras", vato:"Fernando Mercado", period:"", party:"pri"},
//       {id:3210, uid:'mh',  name:"Miguel Hidalgo", vato:"Xóchitl Gálvez", period:"", party:"pan"},
//       {id:3211, uid:'ma',  name:"Milpa Alta", vato:"Jorge Alvarado Galicia", period:"", party:"pan"},
//       {id:3212, uid:'th',  name:"Tláhuac", vato:"Rigoberto Salgado", period:"", party:"pri"},
//       {id:3213, uid:'tp',  name:"Tlalpan", vato:"Claudia Sheinbaum Pardo", period:"", party:"pri"},
//       {id:3214, uid:'ve',  name:"Venustiano Carranza", vato:"Israel Moreno Rivera", period:"", party:"pri"},
//       {id:3215, uid:'xo',  name:"Xochimilco", vato:"Avelino Méndez Rangel", period:"", party:"prd"}
//     ]
//   }
