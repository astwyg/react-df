/**
 * Created by chenth on 15-7-28.
 */

var React=require("react/addons");
var Button=require("../html/button");
var $=require("jquery");

var BSSForm=React.createClass({
    statics:{
        errorObj:{},
        cleanError:function(){
            BSSForm.errorObj={};
        },
        setErrorMsg:function(name,msg){
            var obj={
                name:name,
                errorMsg:msg
            }


            BSSForm.errorObj=obj;
        }
    },
    getInitialState : function(){
        return {
            elem:{}

        };
    },
    componentDidMount:function(){
        var node=this.getDOMNode();
        this.state.elem=node;
    },

    _submitAction:function(){

        var error=BSSForm.errorObj;

        var param={};
        if(error['errorMsg']&&error['errorMsg'].length>0){
            param={
                errorObj: error
            };
            if(this.props.submitAction){
                this.props.submitAction(param);
                return;
            }

        };
       var node=this.state.elem;
        param=$(node).serialize();
        if(this.props.submitAction){
            param=$(node).serialize();
            param=decodeURIComponent(param,true);
            if(this.props.jsonFormat&& this.props.jsonFormat==true){
              var json={};
              var vs=param.split("&");
              if(vs.length>1){
                for(var i in vs){
                      var obj= vs[i].split("=");
                      json[obj[0]]=obj[1];
                  };
              }else{
                var obj= vs[0].split("=");
                json[obj[0]]=obj[1];
              }
              
              this.props.submitAction(json);
          } else{
                this.props.submitAction(param);
            }
       }
    },
    render:function(){
        var okName="确定";
        var props=this.props;

        if(this.props.okButtonName){
            okName=this.props.okButtonName;
        };
        return (<form  {...props}>{this.props.children}{this.props.hideDefaultButton&&this.props.hideDefaultButton==true?null:<Button btnName={okName} disabledName={this.props.disabledName} disabled={this.props.disabledSubmitBtn}   doAction={this._submitAction} type="submit"/>}<span>{BSSForm.errorMsg}</span></form>);
    }
});
module.exports=BSSForm;