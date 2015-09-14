var React = require('react/addons');
//var Debug = require("../common/debug");

var Tab=React.createClass({
    displayName:'Tab',

    getInitialState:function(){
        return {
        };
    },
    getDefaultProps: function(){
        return{
        }
    },
    componentDidMount:function(){
    },
    render:function(){
        var className = "tab-pane fade "+ (this.props.isActive?"in active":"");
        return(
            <div className={className} id={this.props.id}>
        		{this.props.children}
			</div>);
	}
});
module.exports=Tab;