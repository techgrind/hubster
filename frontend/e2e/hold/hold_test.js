/*global describe, beforeEach, it, browser, expect */
'use strict';

var HoldPagePo = require('./hold.po');

describe('Hold page', function () {
  var holdPage;

  beforeEach(function () {
    holdPage = new HoldPagePo();
    browser.get('/#/hold');
  });

  it('should say HoldCtrl', function () {
    expect(holdPage.heading.getText()).toEqual('hold');
    expect(holdPage.text.getText()).toEqual('HoldCtrl');
  });
});
