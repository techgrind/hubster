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
    .module('home.learnmore')
    .controller('LearnmoreCtrl', LearnmoreCtrl);

  function LearnmoreCtrl() {
    var vm = this;
    vm.ctrlName = 'LearnmoreCtrl';
  }
}());
