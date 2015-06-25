(function () {
  'use strict';

  angular
    .module('home.learnmore')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('learnmore', {
        url: '/learnmore',
        templateUrl: 'home/learnmore/learnmore.tpl.html',
        controller: 'LearnmoreCtrl',
        controllerAs: 'learnmore'
      });
  }
}());
