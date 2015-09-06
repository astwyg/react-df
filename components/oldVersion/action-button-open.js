/** @jsx React.DOM */
var React = require('react');

var ActionButtonOpen = React.createClass({
    displayName: 'ActionButtonOpen',
    render: function () {
        return (
            <button className="btn btn-success btn-xs" onClick={this.props.onClick}>
              <i className="fa fa-eye"></i> {this.props.children}
            </button>
        );
    }
});

module.exports = ActionButtonOpen;
