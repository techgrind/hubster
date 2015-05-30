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

  function AppCtrl($log, $rootScope, config) {
    var vm = this;
    // $log.log('Test->log');
    // $log.debug('Test->debug');
    // $log.info('Test->info');
    // $log.warn('Test->warn');
    // $log.error('Test->error');
    vm.ctrlName = 'AppCtrl';

    vm.config = config;

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
  }
}());
