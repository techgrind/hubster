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

  function RegistrationCtrl($rootScope, $state, $log, $auth) {
    var vm = this;
    vm.ctrlName = 'RegistrationCtrl';
    $log.debug(vm.ctrlName + '::begin');

    vm.submit = function () {
      var options;
      $log.debug(vm.ctrlName + '::submitting form');

      /*
      * HACK: Library doesn't allow camel cased :-/
      */
      /* jshint ignore:start */
      // jscs:disable
      options = {email: vm.email, password: vm.password, password_confirmation: vm.password};
      // jscs:enable
      /* jshint ignore:end */
      $auth.submitRegistration(options)
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
          /* jshint ignore:start */
          // jscs:disable
          vm.message = resp.data.errors.full_messages.join(', ');
          // jscs:enable
          /* jshint ignore:end */
          message = {title: 'An Error Occurred', content: vm.message, ok: 'Okay, I\'ve got this!'};
          $rootScope.$emit('alert', message);
        });
    };

    $log.debug(vm.ctrlName + '::end');
  }
}());
