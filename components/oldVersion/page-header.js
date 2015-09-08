
var React = require('react');

var PageHeader = React.createClass({
    displayName: 'PageHeader',
    render: function () {
        return (
            <div className="page-header pull-left">
                <div className="page-title">{this.props.pageTitle}</div>
            </div>
        );
    }
});

module.exports = PageHeader;
