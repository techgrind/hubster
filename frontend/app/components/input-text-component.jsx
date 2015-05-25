var InputTextComponent = React.createClass({
  propTypes: {
    col: React.PropTypes.number,
    inputLabel: React.PropTypes.string.isRequired,
    model: React.PropTypes.string.isRequired
  },
  getDefaultProps: function() {
    return {
      col: 12,
      inputLabel: "What ever"
    };
  },
  render: function () {
    var divClass = "input-field col s" + this.props.col;
    var inputClass = this.props.inputLabel.split(" ").join("_");

    return (
      <div className={divClass}>
        <input id={inputClass} ng-model={this.props.model} type="text"/>
        <label for={inputClass}>{this.props.inputLabel}</label>
      </div>
    );
  }
})
angular.module('hubster').value('InputTextComponent', InputTextComponent);

angular.module('hubster').directive('inputText', function (reactDirective) {
  return reactDirective('InputTextComponent');
});