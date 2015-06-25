(function () {
  'use strict';

  angular
    .module('home')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/views/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      });

    $stateProvider
      .state('learn-more', {
        url: '/learn-more',
        templateUrl: 'home/views/learn-more.tpl.html',
        controller: 'LearnMoreCtrl',
        controllerAs: 'learn'
      });
  }
}());
