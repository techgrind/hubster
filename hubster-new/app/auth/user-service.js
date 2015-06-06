(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name hubster.service:User
   *
   * @description
   *
   */
  angular
    .module('hubster')
    .service('UserService', User);

  function User(store) {
    var service = this,
      currentUser = null;

    service.setCurrentUser = function (user) {
      currentUser = user;
      store.set('user', user);
      return currentUser;
    };

    service.getCurrentUser = function () {
      if (!currentUser) {
        currentUser = store.get('user');
      }
      return currentUser;
    };
  }
}());
