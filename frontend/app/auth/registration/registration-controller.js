(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name registration.controller:RegistrationCtrl
   *
   * @description
   *
   */
  angular
    .module('auth.registration')
    .controller('RegistrationCtrl', RegistrationCtrl);

  function RegistrationCtrl($rootScope, $state, $log, $auth, UserService) {
    var vm = this;
    vm.ctrlName = 'RegistrationCtrl';
    $log.debug(vm.ctrlName + '::begin');

    vm.submit = function () {
      $log.debug(vm.ctrlName + '::submitting form');
      $auth.submitRegistration({email: vm.email, password: vm.password, password_confirmation: vm.password})
        .then(function (resp) {
          // handle success
          $log.debug(vm.ctrlName + '$auth.submitRegistration success: ' + resp);
          if (resp.data.status === "success") {
            UserService.setCurrentUser(resp.data.data);
            $state.transitionTo('app.home');
            $rootScope.$broadcast('authorized');
          } else {
            // Show them an error message perhaps
            $log.debug(vm.ctrlName + '$auth.submitRegistration status != success: ' + resp);
          }
        })
        .catch(function (resp) {
          // handle errors
          $log.debug(vm.ctrlName + '$auth.submitRegistration error: ' + resp);
          $rootScope.$broadcast('unauthorized');
        });
    };

    $log.debug(vm.ctrlName + '::end');
  }
}());
