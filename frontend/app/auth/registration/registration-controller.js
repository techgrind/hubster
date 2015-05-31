(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name registration.controller:RegistrationCtrl
   *
   * @description
   *
   */
  angular
    .module('auth.registration')
    .controller('RegistrationCtrl', RegistrationCtrl);

  function RegistrationCtrl() {
    var vm = this;
    vm.ctrlName = 'RegistrationCtrl';
  }
}());
