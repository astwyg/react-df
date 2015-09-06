/** @jsx React.DOM */
var React = require('react');

var ActionButtonSearch = React.createClass({
    displayName: 'ActionButtonSearch',
    render: function () {
        return (
            <button className="btn btn-outlined btn-warning btn-sm" onClick={this.props.onClick}>
              <i className="fa fa-search"></i> {this.props.children}
            </button>
        );
    }
});

module.exports = ActionButtonSearch;
