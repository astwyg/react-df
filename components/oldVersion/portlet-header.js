/** @jsx React.DOM */
var React = require('react');

var PortletHeader = React.createClass({
    displayName: 'PortletHeader',
    render: function () {
        return (
            <div className="portlet-header pam mbn">
              <div className="caption">{this.props.title}</div>
              <div className="actions">
                {this.props.children}
              </div>
            </div>
        );
    }
});

module.exports = PortletHeader;
