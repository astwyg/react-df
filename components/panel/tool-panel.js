    /**
     * Created by chenth on 15-7-24.
     */
var React=require("react/addons");

var components = require('components');

var Header = components.Header;
var PortletHeader = components.PortletHeader;

var ToolBarPanel=React.createClass({
    render:function(){
        return (<PortletHeader title="">
            {this.props.children}
        </PortletHeader>)
    }
});


module.exports=ToolBarPanel;
