/* global equal */

import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var App;

module('Integration - About Page', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should navigate to the About page', function() {
  visit('/').then(function() {
    click("a:contains('About')").then(function() {
      equal(find('h2 span').text(), 'About');
    });
  });
});