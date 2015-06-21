/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('PasswordResetCtrl', function () {
  var ctrl;

  beforeEach(module('auth.login'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('PasswordResetCtrl');
  }));

  it('should have ctrlName as PasswordResetCtrl', function () {
    expect(ctrl.ctrlName).toEqual('PasswordResetCtrl');
  });
});
