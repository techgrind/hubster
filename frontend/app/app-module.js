(function () {
  'use strict';

  /* @ngdoc object
   * @name hubster
   * @description
   *
   */
  angular
    .module('hubster', [
      'ngAria',
      'ui.router',
      'log.ex.uo',
      'react',
      'angular-storage',
      'home',
      'auth'
    ]);

  function LogProvider(logExProvider) {
    logExProvider.enableLogging(true);
  }
  angular.module('hubster').config(LogProvider);
}());
