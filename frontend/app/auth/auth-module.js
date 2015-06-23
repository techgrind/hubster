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
      apiUrl: 'https://hubster-dev.herokuapp.com/'
    });
  }
  angular.module('auth').config(AuthProviderConfig);
}());
