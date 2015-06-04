(() => {
  'use strict';

  class AppCtrl {
    constructor($mdSidenav, $log) {
      this.ctrlName = 'AppCtrl';
      this.$log = $log;
      this.$mdSidenav = $mdSidenav;
    }

    toggleSidenav(menuId) {
      this.$mdSidenav(menuId).toggle();
    }
  }

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

  angular.module('hubster').config(function($mdThemingProvider) {
  var customBlueMap =     $mdThemingProvider.extendPalette('light-blue', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  $mdThemingProvider.theme('default')
    .primaryPalette('customBlue', {
      'default': '500',
      'hue-1': '50'
    })
    .accentPalette('pink');
  $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey')
});
}());
