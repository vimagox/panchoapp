'use strict';

angular.module('pancho.log', ['pancho.config'])
.service('xlog', ['xconfig',
  function (config) {

    this.log = function(data) {
      if(config.LOGS_ENABLED) {
        console.log(data);
      }
    };
  }
]);
