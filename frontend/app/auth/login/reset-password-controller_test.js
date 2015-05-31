/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('ResetPasswordCtrl', function () {
  var ctrl;

  beforeEach(module('auth.login'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ResetPasswordCtrl');
  }));

  it('should have ctrlName as ResetPasswordCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ResetPasswordCtrl');
  });
});
