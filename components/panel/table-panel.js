    /**
     * Created by chenth on 15-7-24.
     */
var React=require("react/addons");
var BSSPanel=require("./panel");

var Grid=require("../page/grid");
var PageButton=require("../page/page");

var TablePanel=React.createClass({
    render:function(){
        return (<div>
                <Grid title={this.props.title} noHasCheckBox={this.props.noHasCheckBox} jsonKey={this.props.jsonKey} data={this.props.data} checkType={this.props.checkType}/>
                <PageButton  doList={this.props.doList}  pageSize={this.props.pageSize}  page={this.props.offset} totalRows={this.props.totalRows}/>
              </div>)
    }
});


module.exports=TablePanel;
