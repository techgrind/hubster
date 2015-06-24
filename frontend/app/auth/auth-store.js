(function () {
  'use strict';

  angular
    .module('auth')
    .run(AuthStore);

  function AuthStore($rootScope, $state, $log, UserService) {
    // Helpers
    function handleError(reason) {
      var message = 'Failed to connect to server';

      if (reason && reason.errors) {
        message = "Login failed due to " + reason.errors[0];
      }

      $rootScope.$emit('simple-toast', message);
    }

    // login
    $rootScope.$on('auth:login-success', function (ev, user) {
      UserService.setCurrentUser(user);
      $rootScope.$emit('simple-toast', "You logged in successfully");
      $state.go('home');
    });

    $rootScope.$on('auth:login-error', function (ev, reason) {
      handleError(reason);
    });

    // Token validation
    $rootScope.$on('auth:validation-success', function () {
      var message = 'Logged in!';
      $rootScope.$emit('simple-toast', message);
    });

    $rootScope.$on('auth:validation-error', function () {
      var message = 'Failed to log in.';
      $rootScope.$emit('simple-toast', message);
    });

    $rootScope.$on('auth:invalid', function () {
      var message = 'Invalid login attempt.';
      $rootScope.$emit('simple-toast', message);
    });

    // Logout
    $rootScope.$on('auth:logout-success', function () {
      UserService.setCurrentUser(null);
      $state.go('auth.login');
    });

    $rootScope.$on('auth:logout-error', function (ev, reason) {
      handleError(reason);
    });

    // Email registration
    $rootScope.$on('auth:registration-email-success', function (ev, user) {
      var message = 'A registration email has been sent to ' +
        user.email + '. Please check your email and then log in.';

      $rootScope.$emit('simple-toast', message);
    });

    $rootScope.$on('auth:registration-email-error', function (ev, reason) {
      handleError(reason);
    });

    $rootScope.$on('auth:email-confirmation-success', function (ev, user) {
      var message = 'Welcome, ' + user.email;
      $rootScope.$emit('simple-toast', message);
    });

    $rootScope.$on('auth:email-confirmation-error', function (ev, reason) {
      handleError(reason);
    });

    // Password reset
    $rootScope.$on('auth:password-reset-request-success', function (ev, user) {
      var message = 'Password reset instructions sent to ' + user.email;
      $rootScope.$emit('simple-toast', message);
    });

    $rootScope.$on('auth:password-reset-request-error', function (ev, reason) {
      handleError(reason);
    });

    $rootScope.$on('auth:password-reset-confirm-success', function () {
      $state.go('auth.passwordReset');
    });

    $rootScope.$on('auth:password-reset-confirm-error', function (ev, reason) {
      handleError(reason);
    });

    // Account management
    $rootScope.$on('auth:password-change-success', function(ev) {
      var message = 'Your password has been successfully updated!';
      $rootScope.$emit('simple-toast', message);
    });

    $rootScope.$on('auth:password-change-error', function (ev, reason) {
      handleError(reason);
    });

    $rootScope.$on('auth:account-update-success', function(ev) {
      var message = 'Your account has been successfully updated!';
      $rootScope.$emit('simple-toast', message);
    });

    $rootScope.$on('auth:account-update-error', function (ev, reason) {
      handleError(reason);
    });

    $rootScope.$on('auth:account-destroy-success', function(ev) {
      var message = 'Your account has been successfully destroyed!';
      $rootScope.$emit('simple-toast', message);
    });

    $rootScope.$on('auth:account-destroy-error', function (ev, reason) {
      handleError(reason);
    });

    // Session expiration
    $rootScope.$on('auth:session-expired', function () {
      var message = 'Session has expired.';
      $rootScope.$emit('simple-toast', message);
    });
  }
}());
