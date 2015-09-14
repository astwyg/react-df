
var React = require('react');
/**
 * @module Header
 * @description using for ./panel.js
 * @param {string} root 根节点名称
 * @param {string} pageTitle 本页标题
 */
var Header = React.createClass({
    displayName: 'Header',
    getDefaultProps : function(){
    	return {
    		root:"首页",
    		pageTitle:"(空)",
    	}
    },
    render: function () {
        return (
            <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb clearfix">
              <div className="page-header pull-left">
                <div className="page-title">{this.props.pageTitle}</div>
              </div>
              <ol className="breadcrumb page-breadcrumb pull-left pll">
                <li><i className="fa fa-home"></i>&nbsp;<a href="/">{this.props.root}</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                <li className="active">{this.props.pageTitle}</li>
              </ol>
            </div>
        );
    }
});

module.exports = Header;