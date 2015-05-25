var InputTextComponent = React.createClass({
  propTypes: {
    col: React.PropTypes.number,
    inputLabel: React.PropTypes.string.isRequired,
    ngModel: React.PropTypes.string.isRequired
  },
  getDefaultProps: function() {
    return {
      col: 6,
      inputLabel: "What ever"
    };
  },
  render: function () {
    var divClass = "input-field col s" + this.props.col;
    return (
      <div className={divClass}>
        <input ng-model={this.props.ngModel} type="text"/>
        <label>{this.props.inputLabel}</label>
      </div>
    );
  }
})
angular.module('hubster').value('InputTextComponent', InputTextComponent);

angular.module('hubster').directive('inputText', function (reactDirective) {
  return reactDirective('InputTextComponent');
});