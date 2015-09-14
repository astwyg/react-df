/*
 * WangYG 2015年8月5日 15:20:48
*/


var React=require("react/addons");
var Treeview = require("./treeview");
var Grid=require("../page/grid");
var PageButton=require("../page/page");

/**
 * 使用说明
 * <Treeview treeCheck={this.treeCheck} treeFlod={this.treeFlod}/>
 * treeCheck: 当树中节点被选中时的操作(一般为ajax请求, 渲染右边表格数据)
 *  -(param1) uid:选中节点的id
 * treeFlod: 当数中父节点展开时的操作(一般为ajax请求,渲染子集)
 *  -(param1) uid:展开节点的id
 */

var TreeWithTable = React.createClass({
    name: 'TreeWithTable',

    getDefaultProps: function(){
        return{
            treeData:{
                treedata: [
                    {
                        "name": "no data",
                        "uid": "dummy1",
                        "children":[
                            {"name":"no data",
                            "uid":"dummy2"
                            },
                            {"name":"no data",
                            "uid":"dummy3"
                            },
                        ]
                    }, 
                    {
                        "name": "no data",
                        "uid": "dummy4",
                        "children":[
                            {"name":"no data",
                            "uid":"dummy5"
                            },
                            {"name":"no data",
                            "uid":"dummy6"
                            },
                        ]
                    },    
                ]
            },
            title:["选择","内容"],
            jsonKey:["id","value"],
            data:[{id:"testId",value:"testValue"}],
            doList:null,
            pageSize:10,
            offset:1,
            totalRows:1,
        }
    },
    treeCheck: function(uid,status){
        if(status=="check"){
            this.props.treeCheck(uid);
        }
    },
    treeFlod: function(uid,status){
        if(status=="unflod"){
            this.props.treeFlod(uid);
        }
    },
    render: function(){
        return(<div>
                <Treeview cssClass="tree-left" data={this.props.treeData} selectType="r" onElementCheck={this.treeCheck} onElementFlod={this.treeFlod}/>
                <div className="table-right">
                    <Grid title={this.props.title} noHasCheckBox={this.props.noHasCheckBox} jsonKey={this.props.jsonKey} data={this.props.tableData}/>
                    <PageButton  doList={this.props.doList}  pageSize={this.props.pageSize}  page={this.props.offset} totalRows={this.props.totalRows}/>
                </div>
            </div>
        );
    }

});


module.exports=TreeWithTable;