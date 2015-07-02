(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name auth.service:Auth
   *
   * @description
   *
   */
  angular
    .module('auth')
    .service('Auth', Auth);

  function Auth($log, $rootScope, $q, $window, $auth) {
    var self = this,
      apiUrl = $auth.apiUrl();

    self.originUrl = $window.location.origin;
    self.authUrl = apiUrl + '/auth/';

    self.authenticate = function(provider) {
      var defer = $q.defer(),
        browserWindow = $window.open(this.authUrl + provider + "?auth_origin_url=" + this.originalUrl, '_blank', 'location=no');
      $log.debug(self);
      $log.debug(provider);

      browserWindow.addEventListener('loadstop', function(event) {
        if (event.url.match( apiUrl )) {
          browserWindow.executeScript(
            { code:'getCredentials()' },

            function(response){
              var rsp = response[0];

              if (rsp.message == 'deliverCredentials') {
                var user = rsp;

                // Set the user in ng-token-auth
                $auth.initDfd();
                $auth.handleValidAuth(user, true);

                // emit a successful login
                $rootScope.$emit('auth:login-success', user)
                defer.resolve(user);
              } else {
                $rootScope.$emit('auth:login-error', rsp.error)
                defer.reject(rsp.error);
              };

              // Finished with InAppBrowser
              browserWindow.close();
            }
          );
        };
      });

      return defer.promise;
    }

    self.get = function () {
      return 'Auth';
    };
  }
}());
