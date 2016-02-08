'use strict';

angular.module('pancho.services', ['pancho.config', 'pancho.storage', 'pancho.http', 'pancho.log'])
.service('yService', ['xstorage', 'xlog', function XUser(xstorage, xlog) {
    var user = this;

    user.login = function(data) {
      user.id = data.id;
      user.name = data.first_name + ' ' + data.last_name;
      user.firstName = data.first_name;
      user.lastName = data.last_name;
      user.email = data.email;
      user.phone = data.phone;
      user.token = data.token;
      user.channel = data.channel;
      xStorage.storeUser(user);
    }

    user.update = function(xuser) {
      user.name = xuser.firstName + ' ' + xuser.lastName;
      user.firstName = xuser.firstName;
      user.lastName = xuser.lastName;
      user.password = xuser.password;
      xStorage.updateUser(xuser);
    };

    user.refresh = function() {
      if(user.token===undefined ) {
        xStorage.loadUser(user);
      }
      return user;
    };

    user.isLoggedIn = function() {
      return user.token !== undefined && dashStorage.get('token') !== undefined;
    };
  }
])
.service('mService', ['$q', '$state', '$location', 'config', 'xUser', 'xStorage', 'xHttp',
  function ($q, $state, $location, config, user, xStorage, xHttp) {

  	this.login = function(email, pass, okFn, errorFn) {
      dashHttp.post(
        config.LOGIN_ROUTE,
        { user: {email: email, password: pass} },
        function(data) {
          user.login(data.data);
          okFn(data)
        }, errorFn);
    };

    this.logout = function (okFn, errorFn) {
      xStorage.clear();
      okFn(null);
    };

    this.updateUser = function(xuser, okFn) {
      xHttp.put(config.USER_ROUTE(user.id),
        { first_name: xuser.firstName,
          last_name: xuser.lastName,
          password: xuser.password,
          password_confirmation: xuser.confirmPassword },
        function(){
          user.update(xuser);
          okFn();
        },
        function(){});
    };

    this.get = function(url, okFn, errorFn) {
      console.log(url);
      xHttp.xget(url, okFn, errorFn);
    };

    this.getAsync = function(url) {
      console.log(url);
      var defer = $q.defer();
      this.get(url, function(data){ defer.resolve(data.data); });
      return defer.promise;
    };
  }
]);
