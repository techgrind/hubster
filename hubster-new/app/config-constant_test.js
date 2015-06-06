/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('config', function () {
  var constant;

  beforeEach(module('hubster'));

  beforeEach(inject(function (config) {
    constant = config;
  }));

  it('should equal 0', function () {
    expect(constant).toBe(0);
  });
});
