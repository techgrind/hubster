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
        .then(function (result) {
          // handle success
          if (angular.isDefined(result.errors)){
            $log.debug(vm.ctrlName + '$auth.submitLogin status != success: ' + result.errors);
            $rootScope.$broadcast('unauthorized');
          } else {
            UserService.setCurrentUser(result);
            $state.transitionTo('app.home');
            $rootScope.$broadcast('authorized');          
            debugger;
          }
        }, function (error) {
          $log.debug(vm.ctrlName + '$auth.submitLogin status != success: ' + error);
          $rootScope.$broadcast('unauthorized');
        });
    };

    $log.debug(vm.ctrlName + '::end');
  }
}());
