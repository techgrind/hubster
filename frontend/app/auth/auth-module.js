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
      'auth.registration',
      'common'
    ]);

  function AuthProviderConfig($authProvider, config) {
    $authProvider.configure({
      apiUrl: config.authApiUrl,
      authProviderPaths: config.authAuthProviderPaths
    });
  }
  angular.module('auth').config(AuthProviderConfig);
}());
