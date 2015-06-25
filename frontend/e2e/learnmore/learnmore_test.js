/*global describe, beforeEach, it, browser, expect */
'use strict';

var LearnmorePagePo = require('./learnmore.po');

describe('Learnmore page', function () {
  var learnmorePage;

  beforeEach(function () {
    learnmorePage = new LearnmorePagePo();
    browser.get('/#/learnmore');
  });

  it('should say LearnmoreCtrl', function () {
    expect(learnmorePage.heading.getText()).toEqual('learnmore');
    expect(learnmorePage.text.getText()).toEqual('LearnmoreCtrl');
  });
});
