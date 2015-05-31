(function () {
  'use strict';

  angular
    .module('hubster')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      });
  }
}());
