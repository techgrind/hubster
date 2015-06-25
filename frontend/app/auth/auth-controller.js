(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name auth.controller:AuthCtrl
   *
   * @description
   *
   */
  angular
    .module('auth')
    .controller('AuthCtrl', AuthCtrl);

  function AuthCtrl($rootScope, $state, $window, $log, UserService) {
    var vm = this;
    vm.ctrlName = 'AuthCtrl';
    $log.debug(vm.ctrlName + '::begin');

    $log.debug('AuthCtrl::end');
  }
}());
