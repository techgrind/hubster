(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:TermsCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('TermsCtrl', TermsCtrl);

  function TermsCtrl() {
    var vm = this;
    vm.ctrlName = 'TermsCtrl';
  }
}());
