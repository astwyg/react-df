
var React = require('react');

var Breadcrumb = React.createClass({
    displayName: 'Breadcrumb',
    render: function () {
        return (
            <ol className="breadcrumb page-breadcrumb pull-left pll">
                <li><i className="fa fa-home"></i>&nbsp;<a href="/">{this.props.root}</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                <li className="active">{this.props.active}</li>
            </ol>
        );
    }
});

module.exports = Breadcrumb;
