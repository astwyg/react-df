
//import 3rd party dependents
var jQuery = require("jQuery");
window.jQuery = jQuery;
var React = require('react');
require('bootstrap');

//import base components
var Button=require("./button/button");
var Input = require("./html/input");
var Tab = require("./tabs/tab");
var Tabs = require("./tabs/tabs");
var Select=require("./html/select");
var ExpressionSelect=require("./html/expression");
var Autocomplete=require("./html/autocomplete");

//import ES6 patch ,no longer use, use babel-loader instead
//require("../utils/webpackPatch");

//import combined components
var BSSPanel=require("./panel/panel");
var QueryPanel=require("./panel/query-panel");

//import packed components
var TencentMap = require('./tencentMap/map');

//local variables
var selectData=[{value:'1',text:'显示2'},{value:'2',text:'显示1'}];

//local functions, will call by RenderComponent
var _onSelect=function(v){
      alert(v);
    };
var _onSelect2=function(v){
      alert(v);
    };
var _getAutoCompleteValue=function(){
      var v=  Autocomplete.getValue();
      alert(v);
    };
var queryMetadata= function(param){ 
      console.log(param);
    };


 var markers =  [{x:116,y:40,description:'This is a description'},{x:117,y:40,description:'This is a description'}];


React.render(<div>
	<hr /><hr />
	<div className="base-components">
		<h4>基本组件:</h4>
		<Button btnName="按钮" cssClass="btn-warning"/>
		<Input disName="t1" name="t1" value="输入框"/>
		<Tabs maxHeight="150px">
	        <Tab title="111" id="1">
	            <p>456</p><p>456</p><p>456</p><p>456</p><p>456</p><p>456</p>
	        </Tab>
	        <Tab title="222" id="2" isActive={true}>
	            <p>789</p>
	        </Tab>
	    </Tabs>
	    <Select data={selectData} defaultValue="2" onSelect={_onSelect}/>
        <ExpressionSelect onSelect={_onSelect2}/>
        <div>
          <Autocomplete name="动态下拉" url="/api/test/autocomplete" /><Button btnName="获取下拉列表的值" doAction={_getAutoCompleteValue}/>
        </div>
    </div>
    <hr />
    <div className="packed-components">
    	<h4>包装组件:</h4>
    	<p>地图:</p>
    	<TencentMap id="2"  mapData={markers}  height={"500px"} ref="myTencentMap"> </TencentMap>
    </div>
    <div className="packed-components">
      <h4>组合组件:</h4>
      <p>BSSPanel:</p>
      <BSSPanel pageTitle = "示例Panel">
        <QueryPanel submitAction={queryMetadata} jsonFormat={true} okButtonName="查询(请看console)">
            <Input disName=" 示范输入:" name="demoInput"/>
        </QueryPanel>TencentMap.test(markers);
      </BSSPanel>
    </div>
</div>, document.getElementById('content'));

