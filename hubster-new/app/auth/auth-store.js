(function () {
  'use strict';

  function AuthStore($rootScope, $state) {
    $rootScope.$on('auth:password-reset-confirm-success', function () {
      $state.go('auth.passwordReset');
    });

    $rootScope.$on('auth:validation-success', function () {
      $rootScope.$emit('simple-toast', { content: 'Logged in!' });
    });

    $rootScope.$on('auth:password-reset-request-success', function (ev, data) {
      var message = 'Password reset instructions sent';
      $rootScope.$emit('simple-toast', { content: message});
    });

    $rootScope.$on('auth:password-reset-request-error', function (ev, resp) {
      var message = 'Password reset request failed: ' + resp.errors.join(', ');
      $rootScope.$emit('alert', {title: 'Password Reset Request', content: message, ok: 'Okay'});
    });
  }

  angular.module('auth').run(AuthStore);
}());
