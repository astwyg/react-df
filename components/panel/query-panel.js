    /**
     * Created by chenth on 15-7-24.
     */
var React=require("react/addons");

var BSSForm=require("../html/form");

    /**
     * <BSSForm submitAction={this.submitAction} jsonFormat=true disabledName＝"不可用" disabledSubmitBtn＝“false” okButtonName="保存"></BSSForm>
     * submitAction(必须）
     *   form表单按钮提交时回调方法
     *  jsonFormat  true|false
     *    form表单序列化数据是否为json格式
     * okButtonName
     *   此参数非必须
     *  form表单按钮名称默认为查询
     *  disabledSubmitBtn:true|false 默认为false
     *      此参数非必须
     *   是否在提交form表达时禁用提交按钮
     *  disabledName:
     *   此参数非必须
     *   禁用提交按钮时显示的名称
     *
     * @type {*|Function}
     */
var QueryPanel=React.createClass({
    getInitialState:function(){
            return {
                dis:false
            };
        },
    /**
     * 表达提交回调方法
     * @param param
     */
    submitAction:function(param){

        if(this.props.submitAction){

            this.props.submitAction(param);
        }

    },
    render:function(){
    var formProps={
        submitAction:this.submitAction,
        jsonFormat:true,
        okButtonName:"查询"
    };
    if(this.props&&this.props.submitAction){
        formProps=this.props;
        if(!this.props.jsonFormat){
            formProps.jsonFormat=true;
        }
    }
    return (<div className="query-panel"><BSSForm {...formProps} >{this.props.children}</BSSForm></div>)
}
});


module.exports=QueryPanel;
