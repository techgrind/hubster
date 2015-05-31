(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name hubster.controller:AppCtrl
   *
   * @description
   *
   */
  angular
    .module('hubster')
    .controller('AppCtrl', AppCtrl);

  function AppCtrl($log, $rootScope, $state, config, UserService) {
    var vm = this;
    $log.debug('AppCtrl::begin');
    // $log.log('Test->log');
    // $log.debug('Test->debug');
    // $log.info('Test->info');
    // $log.warn('Test->warn');
    // $log.error('Test->error');
    vm.ctrlName = 'AppCtrl';

    vm.config = config;

    vm.signOut = function () {
      $rootScope.$broadcast('unauthorized');
    };

    // Auth
    $rootScope.$on('authorized', function () {
      $log.debug('AppCtrl::authorized');
      vm.currentUser = UserService.getCurrentUser();
    });

    $rootScope.$on('unauthorized', function () {
      $log.debug('AppCtrl::unauthorized');
      vm.currentUser = UserService.setCurrentUser(null);
      $state.go(config.loginState);
    });

    // Let's attache to state change events and have an early alert system of
    // where an error has occurred
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      $log.debug('fromState: ' + fromState.name + 'toState: ' + toState.name);
      $log.debug('event, toState, toParams, fromState, fromParams', event, toState, toParams, fromState, fromParams);
    });

    $rootScope.$on('$stateChangeSuccess', function () {
      $log.debug('Successfully changed states');
    });

    $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
      $log.debug('event, unfoundState, fromState, fromParams', event, unfoundState, fromState, fromParams);
    });

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      // Prevent Angular from trying to revert
      event.preventDefault();
      $log.debug('event, toState, toParams, fromState, fromParams', event, toState, toParams, fromState, fromParams);
      $log.error('An error occurred that prevented you from transitioning states.', error);
    });

    if (UserService.getCurrentUser() === null) {
      $log.debug('User is not authenticated');
      $rootScope.$broadcast('unauthorized');
    }

    $log.debug('AppCtrl::end');
  }
}());
