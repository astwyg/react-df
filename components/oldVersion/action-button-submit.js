/** @jsx React.DOM */
var React = require('react');

var ActionButtonSubmit = React.createClass({
    displayName: 'ActionButtonSubmit',
    render: function () {
        return (
            <button className="btn btn-primary" onClick={this.props.onClick}>
              {this.props.children}
            </button>
        );
    }
});

module.exports = ActionButtonSubmit;
