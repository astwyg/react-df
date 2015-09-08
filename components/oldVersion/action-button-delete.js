
var React = require('react');

var ActionButtonDelete = React.createClass({
    displayName: 'ActionButtonDelete',
    render: function () {
        return (
            <button className="btn btn-danger btn-xs" onClick={this.props.onClick}>
              <i className="fa fa-trash"></i> {this.props.children}
            </button>
        );
    }
});

module.exports = ActionButtonDelete;
