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

  function AuthCtrl($log) {
    var vm = this;
    $log.debug('AuthCtrl::begin');

    vm.ctrlName = 'AuthCtrl';
    $log.debug('AuthCtrl::end');
  }
}());
