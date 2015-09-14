/**
 * Created by chenth on 15-7-24.
 */
var $=require("jquery");
var ReactCommonAction={
    getInitialState:function(){
        return {
            paramReactCommonAction:{},
            formSubmitBtnDis:false,
            buttonActionCode:["code123"]
        };
    },
    componentDidMount:function(){
        this.state.paramReactCommonAction={};
    },
    /**
     * 返回Onchange  事件设置的值
     * @returns {*|ReactCommonAction.getInitialState.paramReactCommonAction|s.getInitialState.paramReactCommonAction|{}|ReactCommonAction.state.paramReactCommonAction|s.state.paramReactCommonAction}
     */
    getParamValue:function(){
        return this.state.paramReactCommonAction;
    },
    getFormJsonValue:function(formId){
        var param=$("#"+formId).serialize();
        param=decodeURIComponent(param,true);
        var json={};
        var vs=param.split("&");
        for(i in vs){
            var obj= vs[i].split("=");
            json[obj[0]]=obj[1];
        };
        return json;
    },
    /**
     * 设置form表单提交按钮在提交时,是否禁用提交按钮
     *
     * @param isDis ture:禁用,false:不禁用
     */
    setSubmitDisabled:function(isDis){
        var bl=false;
        if(isDis&&isDis==true){
            bl=isDis;
        }
        this.setState({formSubmitBtnDis:bl});
    },
    /**
     *监听onChange事件
     * @param obj {name:value}格式
     * @private
     */
    _doChange:function(obj){ //onChange event
        var p=this.state.paramReactCommonAction;
        for(o in obj ){
            p[o]=obj[o];
        }
        this.state.paramReactCommonAction=p;
    }
    

};
module.exports = ReactCommonAction;