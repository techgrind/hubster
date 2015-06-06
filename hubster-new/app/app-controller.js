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

  function AppCtrl($rootScope, $state, $mdSidenav, $mdDialog, $log, config) {
    var vm = this;
    vm.ctrlName = 'AppCtrl';
    $log.debug(vm.ctrlName + '::Start');

    vm.toggleSidenav = function toggleSidenav(menuId) {
      $log.debug(vm.ctrlName + '::toggleSidenav');
      $mdSidenav(menuId)
        .toggle();
    };

    $rootScope.$on('alert', function () {
      var alert,settings;
      settings = arguments[1];
      alert = $mdDialog.alert()
        .title(settings.title)
        .content(settings.content)
        .ok(settings.ok);

      $mdDialog
        .show(alert)
        .finally(function () {
          alert = undefined;
        });
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
      if (error.reason === 'unauthorized') {
        $state.go(config.loginState);
      }
    });

    $log.debug(vm.ctrlName + '::End');
  }
}());
