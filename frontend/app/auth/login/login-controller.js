(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name login.controller:LoginCtrl
   *
   * @description
   *
   */
  angular
    .module('auth.login')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl($rootScope, $state, $log, $auth, UserService) {
    var vm = this;
    vm.ctrlName = 'LoginCtrl';
    $log.debug(vm.ctrlName + '::begin');

    vm.submit = function () {
      $log.debug(vm.ctrlName + '::submitting form');
      $auth.submitLogin({email: vm.email, password: vm.password})
        .then(function (response) {
          // Success
        })
        .catch(function (response) {
          // Fail
        });
    };

    $log.debug(vm.ctrlName + '::end');
  }
}());
