(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name hubster.constant:config
   *
   * @description
   *
   */
  angular
    .module('hubster')
    .constant('config', {
      name: 'Hubster',
      loginState: 'app.auth.login'
    });
}());
