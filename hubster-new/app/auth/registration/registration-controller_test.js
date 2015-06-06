/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('RegistrationCtrl', function () {
  var ctrl;

  beforeEach(module('registration'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('RegistrationCtrl');
  }));

  it('should have ctrlName as RegistrationCtrl', function () {
    expect(ctrl.ctrlName).toEqual('RegistrationCtrl');
  });
});
