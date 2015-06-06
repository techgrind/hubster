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

    vm.back = function () {
      $window.history.back();
    };

    $rootScope.$on('auth:login-success', function (ev, user) {
      $log.debug(vm.ctrlName + 'User is now logged in.');
      UserService.setCurrentUser(user);
      $state.go('home');
    });

    $rootScope.$on('auth:logout-success', function () {
      $log.debug(vm.ctrlName + 'User is now logged out.');
      UserService.setCurrentUser(null);
      $state.go('auth.login');
    });

    $log.debug('AuthCtrl::end');
  }
}());
