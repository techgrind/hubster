(function () {
  'use strict';

  angular
    .module('hubster')
    .config(config);

  function config($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider.state('app', {
      abstract: true
    });

    $urlRouterProvider.otherwise('/auth');

    $httpProvider.interceptors.push('AuthInterceptor');
  }
}());
