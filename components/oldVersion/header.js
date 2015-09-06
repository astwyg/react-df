/** @jsx React.DOM */
var React = require('react');
var PageHeader = require('./page-header');
var Breadcrumb = require('./breadcrumb');

var Header = React.createClass({
    displayName: 'Header',
    render: function () {
        return (
            <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb clearfix">
              <PageHeader pageTitle={this.props.pageTitle} />
              <Breadcrumb active={this.props.pageTitle} root="首页" />
            </div>
        );
    }
});

module.exports = Header;
