/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('HoldCtrl', function () {
  var ctrl;

  beforeEach(module('hold'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('HoldCtrl');
  }));

  it('should have ctrlName as HoldCtrl', function () {
    expect(ctrl.ctrlName).toEqual('HoldCtrl');
  });
});
