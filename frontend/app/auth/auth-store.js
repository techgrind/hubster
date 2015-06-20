(function () {
  'use strict';

   angular
    .module('auth')
    .run(AuthStore);

  function handleError(reason) {
    var message = "Failed to connect to server";

    if(reason && reason.errors) {
      message = "Login failed due to " + reason.errors[0];
    }

    return message;
  }

  function AuthStore($rootScope, $state, $log, UserService) {
    $rootScope.$on('auth:login-success', function (ev, user) {
      UserService.setCurrentUser(user);
      $state.go('home');
    });

    $rootScope.$on('auth:login-error', function(ev, reason) {
      $rootScope.$emit('simple-toast', handleError(reason));
    });

    $rootScope.$on('auth:oauth-registration', function(ev, user) {
      var message = 'A registration email has been sent to ' +
        resp.email + '. Please check your email and then log in.';

      $rootScope.$emit('simple-toast', message);
    });

    $rootScope.$on('auth:logout-success', function () {
      UserService.setCurrentUser(null);
      $state.go('auth.login');
    });

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

}());
