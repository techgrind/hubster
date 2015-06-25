(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.learnmore.controller:LearnmoreCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('LearnMoreCtrl', LearnMoreCtrl);

  function LearnMoreCtrl() {
    var vm = this;
    vm.ctrlName = 'LearnMoreCtrl';
  }
}());
