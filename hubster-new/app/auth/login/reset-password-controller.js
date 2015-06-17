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

  function ResetPasswordCtrl($rootScope, $log, $auth) {
    var vm = this;
    vm.ctrlName = 'ResetPasswordCtrl';
    $log.debug(vm.ctrlName + '::begin');

    vm.submit = function () {
      $auth.requestPasswordReset(vm)
        .then(function () {
          // Success
          // $log.debug('Form submission was successful');
          // vm.message = 'Password reset instructions were sent to ' + vm.email;
          // $rootScope.$emit('alert', {title: 'Password Reset Request', content: vm.message, ok: 'Okay'});
        })
        .catch(function (resp) {
          // Fail
          // vm.message = 'Password reset request failed: ' + resp.data.errors.join(', ');
          // $rootScope.$emit('alert', {title: 'Password Reset Request', content: vm.message, ok: 'Okay'});
        });
    };

    $log.debug(vm.ctrlName + '::end');
  }
}());
