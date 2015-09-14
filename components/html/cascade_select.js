/**
 * Created by chenth on 15-8-3.
 * 二级联动select
 * <CascadeSelect firstDisName="一级" secondDisName="二级"  firsDefaultValue="2" data={[{value:'1',text:'显示2'},{value:'2',text:'显示1'}]} url="api/test/autoselect"  />
 *firstDisName:一级显示名称
 * secondDisName:二级显示名称
 * firsDefaultValue:一级显示值
 * data:一级下拉填充数据
 * url:一级下拉选择时，二级下拉联动时后台请求的url
 */
var React=require("react/addons");
var Select=require("./select");
var AjaxUtils = require('../utils/ajax');
var CascadeSelect=React.createClass({
getInitialState : function(){
    return {
        data:[],
        url:this.props.url,
        secondDefaultValue:""
    };
},
_fetch:function(value){
    var path=getPath();
    var self=this;
    AjaxUtils.get(this.state.url,function(d){
        self.setState({
            data:d,
            secondDefaultValue:""
        })
    });
},
_cascadeSelect:function(v){
    this.setState({
        data:[],
        secondDefaultValue:""
    });

    this._fetch(v);
},
onSelect:function(v){
    if(this.props.onSelect){
        this.props.onSelect(v);
    }
},
render:function(){
        return (<div><Select disName={this.props.firstDisName} onSelect={this._cascadeSelect} defaultValue={this.props.firsDefaultValue} data={this.props.data} /><Select disName={this.props.secondDisName} onSelect={this._onSelect} defaultValue={this.state.secondDefaultValue} data={this.state.data} /></div>)
    }
});
module.exports=CascadeSelect;