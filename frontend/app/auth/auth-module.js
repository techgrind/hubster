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
<<<<<<< HEAD
      apiUrl: 'https://hubster-dev.herokuapp.com/'
=======
      apiUrl: 'https://hubster-dev.herokuapp.com'
>>>>>>> refs/remotes/origin/master
    });
  }
  angular.module('auth').config(AuthProviderConfig);
}());
