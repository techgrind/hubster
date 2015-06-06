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

  function RegistrationCtrl($rootScope, $state, $log, $auth, $mdDialog) {
    var vm = this;
    vm.ctrlName = 'RegistrationCtrl';
    $log.debug(vm.ctrlName + '::begin');

    vm.submit = function () {
      $log.debug(vm.ctrlName + '::submitting form');
      $auth.submitRegistration({email: vm.email, password: vm.password, password_confirmation: vm.password})
        .then(function (resp) {
          // handle success
          $log.debug(vm.ctrlName + '$auth.submitRegistration success: ' + resp);
          vm.message = 'A registration email has been sent to ' +
            resp.email + '. Please check your email and then log in.';
        })
        .catch(function (resp) {
          var message;
          // handle errors
          $log.debug(vm.ctrlName + '$auth.submitRegistration error: ' + resp);
          vm.message = resp.data.errors.full_messages.join(', ');
          message = {title: 'An Error Occurred', content: vm.message, ok: 'Okay, I\'ve got this!'};
          $rootScope.$emit('alert', message);
        });
    };

    $log.debug(vm.ctrlName + '::end');
  }
}());
