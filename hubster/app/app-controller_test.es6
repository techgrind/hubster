/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('AppCtrl', () => {
  let ctrl;

  beforeEach(module('hubster'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('AppCtrl');
  }));

  it('should have ctrlName as AppCtrl', () => {
    expect(ctrl.ctrlName).toEqual('AppCtrl');
  });
});
