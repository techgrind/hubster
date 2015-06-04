(() => {
  'use strict';

  angular
    .module('hubster')
    .config(config);

  function config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
