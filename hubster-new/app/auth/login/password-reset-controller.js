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
    .controller('PasswordResetCtrl', ResetPasswordCtrl);

  function ResetPasswordCtrl($rootScope, $log, $auth) {
    var vm = this;
    vm.ctrlName = 'PasswordResetCtrl';
    $log.debug(vm.ctrlName + '::begin');

    vm.submit = function () {
      var options;

      /*
      * HACK: Library doesn't allow camel cased :-/
      */
      /* jshint ignore:start */
      // jscs: disable
      options = {password: vm.password, password_confirmation: vm.password};
      // jscs: enable
      /* jshint ignore:end */

      $auth.updatePassword(options)
        .then(function () {
          // Custom stuff here (success)
        })
        .catch(function () {
          // handle error response
        });
    };

    $log.debug(vm.ctrlName + '::end');
  }
}());
