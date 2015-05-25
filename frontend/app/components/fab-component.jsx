var FabComponent = React.createClass({
  propTypes: {
    icon: React.PropTypes.isRequired
  },

  render : function () {
    var icon = "fa fa-" + this.props.icon + " md-default-theme"
    return (
      <a className="btn-floating btn-large waves-effect waves-light red">
        <i className={icon}></i>
      </a>
    );
  }
});