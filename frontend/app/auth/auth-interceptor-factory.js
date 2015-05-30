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

  function AuthInterceptor($log) {
    var AuthInterceptorBase = {};
    // (config)
    AuthInterceptorBase.request = function (config) {
      $log.debug('AuthInterceptor::request::begin');
      // Functionality before a request
      $log.debug('AuthInterceptor::request::end');
      return config;
    };

    AuthInterceptorBase.response = function (response) {
      $log.debug('AuthInterceptor::response::begin');
      // Functionality on response - i.e. add token stuff
      $log.debug('AuthInterceptor::response::end');
      return response;
    };
    return AuthInterceptorBase;
  }
}());
