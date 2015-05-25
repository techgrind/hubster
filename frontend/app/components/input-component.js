/** @jsx React.DOM */
var InputComponent = React.createClass({
  propTypes: {
    labelName: React.PropTypes.string.isRequired,
    ngModel : React.PropTypes.string.isRequired
  },
  render: function() {
    // <label>{this.props.labelName}</label>
    // <input type='text' ng-model='{this.props.ngModel}'>
    return React.createElement('span', {id: this.props.id}, 'Hello ' + this.props.firstName + ' ' + this.props.lastName);
  }
})
angular.module('hubster').value('InputComponent', InputComponent);

angular.module('hubster').directive('rinput', function(reactDirective){
  return reactDirective('InputComponent');
});

// React.render(React.createElement("div", {id:"msg"}, "Hello World!"), mountNode);