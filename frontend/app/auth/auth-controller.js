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

  function AuthCtrl() {
    var vm = this;
    vm.ctrlName = 'AuthCtrl';
  }
}());
