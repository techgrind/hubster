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

  function LoginCtrl($log, $auth, $rootScope, $state, UserService) {
    var vm = this;
    vm.ctrlName = 'LoginCtrl';
    $log.debug(vm.ctrlName + '::begin');

    vm.submit = function () {
      $log.debug(vm.ctrlName + '::submitting form');
      $auth.submitLogin({email: vm.email, password: vm.password})
        .then(function (resp) {
          // handle success
          UserService.setCurrentUser(resp.data);
          $state.transitionTo('app.home');
          $rootScope.$broadcast('authorized');
        })
        .catch(function (resp) {
          // handle errors
          $log.debug(vm.ctrlName + '$auth.submitLogin error: ' + resp.toJson());
          $rootScope.$broadcast('unauthorized');
        });
    };

    $log.debug(vm.ctrlName + '::begin');
  }
}());
