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
      apiUrl: 'http://hubster-rails.dev',
      authProviderPaths: {
        github:   '/auth/github',
        facebook: '/auth/facebook',
        google:   '/auth/google_oauth2',
        twitter:  '/auth/twitter'
      }
    });
  }
  angular.module('auth').config(AuthProviderConfig);
}());
