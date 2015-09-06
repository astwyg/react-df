/** @jsx React.DOM */
var React = require('react');

var ActionButtonCancel = React.createClass({
    displayName: 'ActionButtonCancel',
    render: function () {
        return (
            <button className="btn btn-default" onClick={this.props.onClick}>
              {this.props.children}
            </button>
        );
    }
});

module.exports = ActionButtonCancel;
