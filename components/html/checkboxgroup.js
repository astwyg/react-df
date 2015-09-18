/**
 * 
 */

var React = require('react/addons');
var Debug = require("../utils/debug");

var CheckboxGroup=React.createClass({
    displayName:'Checkbox',
    getDefaultProps: function(){
        return{
            name:"checkbox", 
            inline: false,
            multi:true,

        }
    },
    getInitialState:function(){
        return {}
    },
    render:function(){
        var labelClass = this.props.inline?"inline":"block" ;
        var childType = this.props.multi?"checkbox":"radio";
        var children = [];
        window.tmp = this.props.children;
        for(var i in this.props.children){
            this.props.children[i].props.type= childType;
            this.props.children[i].props.name= this.props.name;
            children.push(<label className={labelClass}>{this.props.children[i]}</label>);
        }
        return (<div>
                {children}
            </div>);
    },
});
module.exports=CheckboxGroup;
