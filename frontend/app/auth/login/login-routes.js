(function () {
  'use strict';

  angular
    .module('login')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('app.auth.login', {
        url: '/login',
        templateUrl: 'auth/login/login.tpl.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      });
  }
}());
