(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name common.constant:config
   *
   * @description
   *
   */
  angular
    .module('common')
    .constant('config', {
      name: 'Hubster',
      loginState: 'auth.login',
      // authApiUrl: 'https://hubster-dev.herokuapp.com',
      authApiUrl: 'http://hubster-rails.dev',
      authAuthProviderPaths: {
        github:   '/auth/github',
        facebook: '/auth/facebook',
        google:   '/auth/google_oauth2',
        twitter:  '/auth/twitter'
      }
    });
}());
