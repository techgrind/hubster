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
      'ngMaterial',
      'log.ex.uo',
      'react',
      'home'
    ]);

  function NgMaterialConfig($mdThemingProvider, $mdIconProvider) {
    $mdIconProvider
      .defaultIconSet('./assets/svg/avatars.svg', 128)
      .icon('menu', './images/menu.svg', 24)
      .icon('share', './images/share.svg', 24)
      .icon('google_plus', './images/google_plus.svg', 512)
      .icon('hangouts', './images/hangouts.svg', 512)
      .icon('twitter', './images/twitter.svg', 512)
      .icon('phone', './images/phone.svg', 512);

    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red');
  }
  angular.module('hubster').config(NgMaterialConfig);

  function LogProvider(logExProvider) {
    logExProvider.enableLogging(true);
  }
  angular.module('hubster').config(LogProvider);
}());
