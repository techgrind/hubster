(() => {
  'use strict';

  /* @ngdoc object
   * @name hubster
   * @description
   *
   */
  angular
    .module('hubster', [
      'ngAria',
      'ngMaterial',
      'ui.router',
      'ngMdIcons',
      'home'
    ]);

  function ThemeProvider ($mdThemingProvider) {
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
  }

  angular.module('hubster')
    .config(ThemeProvider);
}());
