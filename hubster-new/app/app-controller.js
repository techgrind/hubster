(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name hubster.controller:AppCtrl
   *
   * @description
   *
   */
  angular
    .module('hubster')
    .controller('AppCtrl', AppCtrl);

  function AppCtrl($mdSidenav, $log) {
    var vm = this;
    vm.ctrlName = 'AppCtrl';
    $log.debug(vm.ctrlName + '::Start');

    vm.toggleSidenav = function toggleSidenav(menuId) {
      $log.debug(vm.ctrlName + '::toggleSidenav');
      $mdSidenav(menuId).toggle();
    };

    $log.debug(vm.ctrlName + '::End');
  }
}());
