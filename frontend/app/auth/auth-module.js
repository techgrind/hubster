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
      'login'
    ]);

  function AuthProvider($authProvider) {
    $authProvider.configure({
      apiUrl: 'http://localhost:3000'
    });
  }
  angular.module('auth').config(AuthProvider);
}());
