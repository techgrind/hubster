(function () {
  'use strict';

  angular
    .module('auth.registration')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('auth.register', {
        url: '/register',
        templateUrl: 'auth/registration/registration.tpl.html',
        controller: 'RegistrationCtrl',
        controllerAs: 'registration'
      });
  }
}());
