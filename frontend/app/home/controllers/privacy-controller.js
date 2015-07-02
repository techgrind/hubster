(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:PrivacyCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('PrivacyCtrl', PrivacyCtrl);

  function PrivacyCtrl() {
    var vm = this;
    vm.ctrlName = 'PrivacyCtrl';
  }
}());
