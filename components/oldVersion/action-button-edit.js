
var React = require('react');

var ActionButtonEdit = React.createClass({
    displayName: 'ActionButtonEdit',
    render: function () {
        return (
            <button className="btn btn-info btn-xs" onClick={this.props.onClick}>
              <i className="fa fa-edit"></i> {this.props.children}
            </button>
        );
    }
});

module.exports = ActionButtonEdit;
