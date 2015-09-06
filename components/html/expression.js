/**
 * 表达式组件
 * @type {exports}
 */

var React=require("react/addons");
var Select=require("./select");
var ExpressionSelect=React.createClass({
    getInitialState:function(){
    return {
        selectData:[{value:'1',text:'等于'},{value:'2',text:'大于'},{value:'3',text:'小于'},{value:'4',text:'大于等于'},{value:'5',text:'小于等于'},{value:'6',text:'包含'}]
    }
},
_onSelect:function(v){
    if(this.props.onSelect){
        this.props.onSelect(v);
    }

},
render:function(){
    return(<Select data={this.state.selectData} noEmptyMsg={true} name={this.props.name} defaultValue="1" onSelect={this._onSelect} />);

}
});

module.exports=ExpressionSelect;
