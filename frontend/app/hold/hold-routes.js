(function () {
  'use strict';

  angular
    .module('hold')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('hold', {
        url: '/hold',
        templateUrl: 'hold/hold.tpl.html',
        controller: 'HoldCtrl',
        controllerAs: 'hold'
      });
  }
}());
