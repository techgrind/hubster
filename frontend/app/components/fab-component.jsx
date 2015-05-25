var FabComponent = React.createClass({
  propTypes: {
    icon: React.PropTypes.isRequired
  },

  render : function () {
    var icon = "fa fa-" + this.props.icon + " md-default-theme"
    return (
      <button className="md-fab md-button md-default-theme">
        <i className={icon}></i>
      </button>
    );
  }
});