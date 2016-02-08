(function () {

  var API = {
    development: {
      mService: 'http://localhost:3000/',
      gService: 'http://localhost:4000/'
    },
    staging: {
      mService: 'http://xmunicipios.herokuapp.com/',
      gService: 'http://governments.herokuapp.com/'
    },
    production: {
      mService: 'https://xmunicipios.herokuapp.com/',
      gService: 'https://governments.herokuapp.com/'
    }
  };

  var API_URL = API.production;
  var mServiceRoute = function(route) { return API_URL.mService + route; };
  var gServiceRoute = function(route) { return API_URL.gService + route; };

  angular.module('xApp.config', [])
  .constant('config', {
    API_TOKEN: 'token',
    API_URL: API_URL,
    LOGIN_ROUTE: API_URL + 'login',
    GOVS_ROUTE: mServiceRoute('mexico'),
    GOV_ROUTE: function(gid) { return gServiceRoute('mexico/'+gid); },
    LOGS_ENABLED: true,
  });

}());
