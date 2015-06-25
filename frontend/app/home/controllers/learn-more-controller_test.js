/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('LearnMoreCtrl', function () {
  var ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('LearnMoreCtrl');
  }));

  it('should have ctrlName as LearnMoreCtrl', function () {
    expect(ctrl.ctrlName).toEqual('LearnMoreCtrl');
  });
});
