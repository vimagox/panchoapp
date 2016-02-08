'use strict';

angular.module('pancho.http', ['pancho.config', 'pancho.storage', 'pancho.log'])
.service('xHttp', ['$http', '$location', 'config', 'xStorage', 'xLog',
  function ($http, $location, config, xStorage, xLog) {
    var headers = function(user_token) {
      var xheaders = {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'X-APP-API-KEY': config.API_TOKEN
      };
      if(user_token != undefined) {
        xheaders['Authorization'] = 'token ' + user_token;
      }
      return xheaders;
    };

    var xreq = function(xmethod, xurl, xdata, okFn, errorFn) {
      var xheaders = headers(xStorage.get('token'));
      xLog.log(xurl);
      $http({
        method: xmethod,
        url: xurl,
        headers: xheaders,
        data: xdata
      }).then(
        function successCallback(data) {
          xLog.log(data);
          okFn(data);
        },
        function errorCallback(err) {
          xLog.log('ERROR===================================');
          xLog.log(err);
          xLog.log('========================================');
          if (errorFn) { errorFn(err); }
        }
      );
    }

    this.post = function(url, data, okFn, errorFn) {
      xreq('POST', url, data, okFn, errorFn);
    };

    this.get = function(url, okFn, errorFn) {
      xreq('GET', url, {}, okFn, errorFn);
    };

    this.xget = function(o, okFn, errorFn) {
      if (o === undefined) { $location.path('/'); }
      xreq('GET', o.url, {}, okFn, errorFn);
    };

    this.put = function(url, data, okFn, errorFn) {
      xreq('PUT', url, data, okFn, errorFn);
    };

    this.delete = function(url, okFn, errorFn) {
      xreq('DELETE', url, {}, okFn, errorFn);
    };
  }
]);
