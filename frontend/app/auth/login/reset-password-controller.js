(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name auth.login.controller:ResetPasswordCtrl
   *
   * @description
   *
   */
  angular
    .module('auth.login')
    .controller('ResetPasswordCtrl', ResetPasswordCtrl);

  function ResetPasswordCtrl() {
    var vm = this;
    vm.ctrlName = 'ResetPasswordCtrl';
  }
}());
