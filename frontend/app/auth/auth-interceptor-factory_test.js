/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('AuthInterceptor', function () {
  var factory;

  beforeEach(module('hubster'));

  beforeEach(inject(function (AuthInterceptor) {
    factory = AuthInterceptor;
  }));

  it('should have resquest be type function', function () {
    expect(typeof factory.request).toEqual('function');
  });

  it('should have response be type function', function () {
    expect(typeof factory.response).toEqual('function');
  });
});
