/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('Auth', function () {
  var service;

  beforeEach(module('auth'));

  beforeEach(inject(function (Auth) {
    service = Auth;
  }));

  it('should equal Auth', function () {
    expect(service.get()).toEqual('Auth');
  });
});
