'use strict';

angular.module('pancho.storage', [])
.service('xstorage', ['$cookies',
  function ($cookies) {

      this.setGov = function(gov) { $cookies.putObject('gov', gov); };
      this.gov = function() { return $cookies.getObject('gov'); };

      this.setMunicipio = function(mun) { $cookies.putObject('mun', mun); };
      this.municipio = function() { return $cookies.getObject('mun'); };

      // This can be a suggestion, complaint or a forum.
      this.setX = function(x) { $cookies.putObject('xstuff', x); };
      this.x = function() { return $cookies.getObject('xstuff'); };

      this.get = function(id) {
        return $cookies.get(id);
      };

      this.clear = function() {
        var cookies = $cookies.getAll();
        angular.forEach(cookies, function (v, k) {
            $cookies.remove(k);
        });
      };
    }
  ]);
