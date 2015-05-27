'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var mui = require('material-ui');
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var Colors = require('material-ui/lib/styles/colors');
var RaisedButton = mui.RaisedButton;
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
// CSS
require('normalize.css');

require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

var HubsterApp = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount: function() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },

  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <RaisedButton label="Default" />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = HubsterApp;
