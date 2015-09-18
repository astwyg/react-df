/**
 * 
 */

var React = require('react/addons');
var Debug = require("../utils/debug");

var Checkbox=React.createClass({
    displayName:'CheckNode',
    getDefaultProps: function(){
        return{
            id : "checkbox default id",
            value : "checkbox default value",
            type : "checkbox",
            name: "checkbox default name",
            dispName: "checkbox default dispname",
            onClick: function(){return},
        }
    },
    getInitialState:function(){
        return {
            dis:false,
            cssClass:'primary'
        };
    },
    onClick: function(){
        this.props.onClick(this.props.name,this.props.value);
    },
    render:function(){
        return (<span> <input type={this.props.type} id={this.props.id} value={this.props.value} name={this.props.name} onClick={this.onClick}/> {this.props.dispName}
            </span>);
        }
});
module.exports=Checkbox;
