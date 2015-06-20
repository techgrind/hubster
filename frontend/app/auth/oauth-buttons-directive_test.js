/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('oauthButtons', function () {
  var scope
    , element;

  beforeEach(module('auth', 'auth/oauth-buttons-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<oauth-buttons></oauth-buttons>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().oauthButtons.name).toEqual('oauthButtons');
  });
});
