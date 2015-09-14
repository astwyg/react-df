    /**
     * Created by chenth on 15-7-24.
     */
var React=require("react/addons");

var Header = require('../oldVersion/header');
var PortletHeader = require('../oldVersion/portlet-header');

var ToolBarPanel=React.createClass({
    render:function(){
        return (<PortletHeader title="">
            {this.props.children}
        </PortletHeader>)
    }
});


module.exports=ToolBarPanel;
