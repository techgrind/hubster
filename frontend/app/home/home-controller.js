(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($log, $timeout, UserService) {
    var vm = this;
    $log.debug('HomeCtrl::Begin');

    vm.currentUser = function () {
      return UserService.getCurrentUser() === null;
    };

    vm.addPerson = function () {
      if (vm.newPersonForm.$dirty) {
        vm.persons.push(angular.copy(vm.tempPerson));
        vm.clearPerson();
      }
    };

    vm.clearPerson = function () {
      vm.tempPerson = undefined;

      $timeout(function () {
        vm.newPersonForm.$setPristine();
      }, 50);
    };

    // vm.clearPerson();
    vm.ctrlName = 'HomeCtrl';
    $log.debug('HomeCtrl::End');
  }
}());
