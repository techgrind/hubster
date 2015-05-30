(function () {
  'use strict';

  angular
    .module('auth')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('app.auth', {
        url: '/auth',
        abstract: true,
        templateUrl: 'auth/auth.tpl.html',
        controller: 'AuthCtrl',
        controllerAs: 'auth'
      });
  }
}());
