(() => {
  'use strict';

  angular
    .module('hubster')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
