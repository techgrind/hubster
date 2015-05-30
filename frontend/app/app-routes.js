(function () {
  'use strict';

  angular
    .module('hubster')
    .config(config);

  function config($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider.state('app', {
      abstract: true,
      controller: 'AppCtrl as app',
      template: '<div ui-view></div>'
    });

    $urlRouterProvider.otherwise('/home');

    $httpProvider.interceptors.push('AuthInterceptor');
  }
}());
