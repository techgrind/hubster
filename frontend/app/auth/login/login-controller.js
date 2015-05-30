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
    .module('login')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl($log, $auth) {
    var vm = this;
    vm.ctrlName = 'LoginCtrl';
    $log.debug(vm.ctrlName + '::begin');

    vm.submit = function () {
      $log.debug(vm.ctrlName + '::submitting form');
      $auth.submitLogin({email: vm.email, password: vm.password})
        .then(function(resp) { 
          // handle success
        })
        .catch(function(resp) { 
          // handle errors
        });
    };

    $log.debug(vm.ctrlName + '::begin');
  }
}());
