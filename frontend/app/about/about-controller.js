(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name about.controller:AboutCtrl
   *
   * @description
   *
   */
  angular
    .module('about')
    .controller('AboutCtrl', AboutCtrl);

  function AboutCtrl($log, $timeout) {
    var vm = this;
    $log.debug('AboutCtrl::Begin');
    vm.persons = [
      {id: 1, firstName: 'Artem', lastName: 'Chernyak'},
      {id: 2, firstName: 'Jeff', lastName: 'Ancel'}
    ];

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
    vm.ctrlName = 'AboutCtrl';
    $log.debug('AboutCtrl::End');
  }
}());
