/** @jsx React.DOM */
var HelloComponent = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    firstName : React.PropTypes.string.isRequired,
    lastName : React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('span', {id: this.props.id}, 'Hello ' + this.props.firstName + ' ' + this.props.lastName);
  }
})
angular.module('hubster').value('HelloComponent', HelloComponent);

angular.module('hubster').directive('hello', function(reactDirective){
  return reactDirective('HelloComponent');
});

// React.render(React.createElement("div", {id:"msg"}, "Hello World!"), mountNode);