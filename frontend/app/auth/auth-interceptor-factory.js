(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name hubster.factory:AuthInterceptor
   *
   * @description
   *
   */
  angular
    .module('auth')
    .factory('AuthInterceptor', AuthInterceptor);

  function AuthInterceptor($rootScope, $log, UserService) {
    var AuthInterceptorBase = {};
    // (config)
    AuthInterceptorBase.request = function (config) {
      var currentUser = UserService.getCurrentUser(),
        accessToken = currentUser ? currentUser.accessToken : null;

      $log.debug('AuthInterceptor::request::begin');

      if (accessToken) {
        config.headers.authorization = accessToken;
      }

      $log.debug('AuthInterceptor::request::end');
      return config;
    };

    AuthInterceptorBase.response = function (response) {
      $log.debug('AuthInterceptor::response::begin');
      // Functionality on response - i.e. add token stuff
      $log.debug('AuthInterceptor::response::end');
      return response;
    };

    AuthInterceptorBase.responseError = function (response) {
      $log.debug('AuthInterceptor::responseError::begin');
      if (response.status === 401) {
        $rootScope.$broadcast('unauthorized');
      }
      $log.debug('AuthInterceptor::responseError::end');
      return response;
    };

    return AuthInterceptorBase;
  }
}());
