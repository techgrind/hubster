/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('LearnmoreCtrl', function () {
  var ctrl;

  beforeEach(module('home.learnmore'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('LearnmoreCtrl');
  }));

  it('should have ctrlName as LearnmoreCtrl', function () {
    expect(ctrl.ctrlName).toEqual('LearnmoreCtrl');
  });
});
