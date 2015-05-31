(function () {
  'use strict';

  angular
    .module('auth.login')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('auth.login', {
        url: '/login',
        templateUrl: 'auth/login/login.tpl.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      });
    $stateProvider
      .state('auth.resetPassword', {
        url: '/reset_password',
        templateUrl: 'auth/login/reset-password.tpl.html',
        controller: 'ResetPasswordCtrl',
        controllerAs: 'resetPassword'
      });
  }
}());
