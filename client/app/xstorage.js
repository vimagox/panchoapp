'use strict';

angular.module('xApp.storage', [])
.service('xStorage', ['$cookies',
  function ($cookies) {

    this.put = function(id, value) {
      if (typeof value === 'object') {
        $cookies.putObject(id, value);
      } else {
        $cookies.put(id, value);
      }
    };

    this.get = function(id) {
      return $cookies.getObject(id);
    };

    this.clear = function() {
      var cookies = $cookies.getAll();
      angular.forEach(cookies, function (v, k) {
          $cookies.remove(k);
      });
    };
  }
]);
