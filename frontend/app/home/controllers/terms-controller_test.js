/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('TermsCtrl', function () {
  var ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('TermsCtrl');
  }));

  it('should have ctrlName as TermsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TermsCtrl');
  });
});
