(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name hold.controller:HoldCtrl
   *
   * @description
   *
   */
  angular
    .module('hold')
    .controller('HoldCtrl', HoldCtrl);

  function HoldCtrl() {
    var vm = this;
    vm.ctrlName = 'HoldCtrl';
  }
}());
