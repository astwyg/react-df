var React = require('react');
var TopBar = require("./topbar");
var SideBar = require("./sidebar");
/**
 * 用于天翼云业务管理系统的页面框架
 * 
 */
var Frame = React.createClass({
	displayName: 'Frame',
	getDefaultProps: function(){
        return{
        	userName:"TEST",
        	menu:null,
        }
    },
    _logout: function(){
    	alert("place logout function here");
    },
	render: function(){
		return(<div>
			<TopBar logout={this._logout} userName={this.props.userName}/>
			<div id="wrapper">
				<SideBar list={this.props.menu} />
				<div id="page-wrapper">
				</div>
			</div>
		</div>)
	}
});

module.exports = Frame;