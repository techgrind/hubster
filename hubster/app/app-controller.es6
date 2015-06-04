(() => {
  'use strict';

  class AppCtrl {
    constructor($mdSidenav, $log) {
      this.ctrlName = 'AppCtrl';
      this.$mdSidenav = $mdSidenav;
      this.$log = $log;
      this.$log.debug(this.ctrlName + "::Start");
    }

    toggleSidenav(menuId) {
      this.$log.debug(this.ctrlName + "::toggleSidenave")
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
