/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('PrivacyCtrl', function () {
  var ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('PrivacyCtrl');
  }));

  it('should have ctrlName as PrivacyCtrl', function () {
    expect(ctrl.ctrlName).toEqual('PrivacyCtrl');
  });
});
