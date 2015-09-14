
//import 3rd party dependents
var React = require('react');
require('bootstrap');

//import base components
var Button=require("./html/button");
var Input = require("./html/input");
var Tab = require("./tabs/tab");
var Tabs = require("./tabs/tabs");
var Select=require("./html/select");
var ExpressionSelect=require("./html/expression");
var Autocomplete=require("./html/autocomplete");
var Treeview = require("./tree/treeview");
var TreeWithTable = require("./tree/treeWithTable");

//import ES6 patch ,no longer use, use babel-loader instead
//require("../utils/webpackPatch");

//import combined components
var BSSPanel=require("./panel/panel");
var QueryPanel=require("./panel/query-panel");
var ToolBarPanel=require("./panel/tool-panel");
var TablePanel=require("./panel/table-panel");

//import packed components
var TencentMap = require('./tencentMap/map');
var Modal=require("./message/modal");
var MessageBox = require("./message/messageBox");

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
var tree1Data = {
    treedata: 
    [
        {
            "name": "website",
            "uid": "uid1",
            "children": [
                {
                    "name": "images",
                    "uid": "uid2",
                    "isSelected": "part",
                    "children": [
                        {
                            "name": "logo.png",
                            "uid": "uid3",
                            "isSelected": "all",
                        },
                        {
                            "name": "background.png",
                            "uid": "uid4",
                            "isSelected": "all",
                        }
                    ]
                },
                {
                    "name": "index.html",
                    "uid": "uid5"
                },
                {
                    "name": "about.html",
                    "uid": "uid6"
                },
            ]
        }
    ]
}
var Demo = React.createClass({
  displayName:'Demo',
  getInitialState:function(){
      return {
          tableProps:{
              title:['选项','标题1','标题2','标题3'],
              jsonKey:['id','t1','t2','t3'],
              data:[{id:1,
                t1:'测试1',
                t2:'测试2',
                t3:'测试3'}],
              doList:function(){},
              pageSize:10,
              offset:1, //page:this.state.offset
              totalRows:1,
              checkType:"radio",
          },
      }
  },
  treeCheck : function(uid,status){
      console.log(uid+status);
  },
  treeFlod : function(uid,status){
      console.log(uid+status);
  },
  render:function(){
    console.log(this.state.tableProps);
    return (<div>
      <hr /><hr />
      <div className="base-components">
        <h2>基本组件:</h2>
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
        <Treeview data={tree1Data} selectType="checkbox" onElementCheck={this.treeCheck} onElementFlod={this.treeFlod} expandLevel="3"/>
        <hr />
        <div className="packed-components">
          <h2>包装组件:</h2>
          <p>模态框:</p>
          <Button btnName="弹出模态框" doAction={Modal.show.bind(null,"myModal1")}/>
          <Modal id="myModal1" title="标题1" >
            <span>"a form here"</span> <br/>
            <Button btnName="关闭" doAction={Modal.hide.bind(null,"myModal1")}/>
          </Modal>  
          <p>地图:</p>
          <TencentMap id="2"  mapData={markers}  height={"500px"}> </TencentMap>
        </div>
        <div className="packed-components">
          <h2>组合组件:</h2>
          <p>BSSPanel:</p>
          <BSSPanel pageTitle = "示例Panel">
            <QueryPanel submitAction={queryMetadata} jsonFormat={true} okButtonName="查询(请看console)">
                <Input disName=" 示范输入:" name="demoInput"/>
            </QueryPanel>
            <ToolBarPanel>
              <Button btnName="增删查改"/>
            </ToolBarPanel>
            <TablePanel {...this.state.tableProps}/>
          </BSSPanel>
        </div>
    </div>);
  }
});


React.render(<Demo />, document.getElementById('content'));

