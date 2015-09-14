    /**
     * Created by chenth on 15-7-24.
     */
var React=require("react/addons");


var ToolBarPanel=React.createClass({
	getDefaultProps : function(){
    	return {
    		title:"",
    	}
    },
    render:function(){
        return (<div className="portlet-header pam mbn">
	              <div className="caption">{this.props.title}</div>
	              <div className="actions">
	                {this.props.children}
	              </div>
	            </div>)
    }
});


module.exports=ToolBarPanel;
