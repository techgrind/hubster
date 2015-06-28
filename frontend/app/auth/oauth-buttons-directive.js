(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name auth.directive:oauthButtons
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="auth">
       <file name="index.html">
        <oauth-buttons></oauth-buttons>
       </file>
     </example>
   *
   */
  angular
    .module('auth')
    .directive('oauthButtons', oauthButtons);

  function oauthButtons() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'auth/oauth-buttons-directive.tpl.html',
      replace: false,
      controllerAs: 'oauthButtons',
      controller: function ($auth, $log) {
        var vm = this;
        vm.name = 'oauthButtons';
        $log.debug('oauthButtons::begin');

        vm.authenticate = function (system) {
          $log.debug('oauthButtons: User clicked ' + system);
          $auth.authenticate(system);
        };
         
        $log.debug('oauthButtons::end');
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
}());
