(function () {
  'use strict';

  /* @ngdoc object
   * @name auth
   * @description
   *
   */
  angular
    .module('auth', [
      'ui.router',
      'rails',
      'ng-token-auth',
      'auth.login',
      'auth.registration'
    ]);

  function AuthProviderConfig($authProvider) {
    $authProvider.configure({
      apiUrl: 'http://localhost:3000'
    });
  }
  angular.module('auth').config(AuthProviderConfig);
}());
