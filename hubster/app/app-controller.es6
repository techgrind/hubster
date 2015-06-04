(() => {
  'use strict';

  class AppCtrl {
    constructor($mdSidenav, $log) {
      this.ctrlName = 'AppCtrl';
      this.$log = $log;
      this.$mdSidenav = $mdSidenav;
      $log.debug = "AppCtrl::Start"
    }

    render

    toggleSidenav(menuId) {
      this.$mdSidenav(menuId).toggle();
    }
  }

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
}());
