'use strict';

describe('HubsterApp', function () {
  var React = require('react/addons');
  var HubsterApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    HubsterApp = require('components/HubsterApp.js');
    component = React.createElement(HubsterApp);
  });

  it('should create a new instance of HubsterApp', function () {
    expect(component).toBeDefined();
  });
});
