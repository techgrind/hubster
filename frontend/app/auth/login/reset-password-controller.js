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

  function ResetPasswordCtrl($log, $auth) {
    var vm = this;
    vm.ctrlName = 'ResetPasswordCtrl';
    $log.debug(vm.ctrlName + '::begin');

    vm.submit = function () {
      $auth.requestPasswordReset(vm.email)
        .then(function (resp) {
          // Success
          vm.message = 'Password reset instructions were sent to ' + resp.email;
        })
        .catch(function (resp) {
          // Fail
          vm.message = 'Password reset request failed: ' + resp.errors[0];
        });
    };

    $log.debug(vm.ctrlName + '::end');
  }
}());
