var jsx = require('jsx-transform');

var a = jsx.fromString("var HelloComponent = React.createClass({propTypes: {id: React.PropTypes.number.isRequired,firstName : React.PropTypes.string.isRequired,lastName : React.PropTypes.string.isRequired},render: function() {return <span>Hello {this.props.firstName} {this.props.lastName}</span> }})", {  factory: 'React.createElement' });

var fs = require('fs');
fs.writeFile("tmp-test.js", a + "\n", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
