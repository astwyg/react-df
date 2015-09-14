/**
 * Created by chenth on 15-7-13.
 * Changed by whsygh on 2015-07-22 13:07:03 -> add some props.
 */

var React = require('react/addons');
/**
 * <Button actions=[] code="" btnName="增加" disabled={this.state.dis} disabledName="正在请求......" doAction={this._doAction}/>
 * disabled:些属性判断按钮是否可用disabled：true此按钮不可用
 * disabledName：不可用时显示的名称
 * doAction:当点击该按钮时调用parent中的方法去执行
 * id:按钮的id, 用于直接操作DOM, 一般不应传入此参数
 * cssClass(String):按钮的显示样式,与Bootstrap相同,可选值包括:
    btn-default : 白色按钮样式;
    btn-primary : 蓝色按钮, 如果不传入此参数,取此值为默认值;
    btn-success : 绿色按钮, 一般表示成功;
    btn-info    : 浅蓝色按钮, 一般表示信息;
    btn-warning : 橙色按钮, 一般表示警告;
    btn-danger  : 红色按钮, 一般表示严重警告;
    btn-lg      : 尺寸设置为大;
    btn-sm      : 尺寸设置为小;
    btn-xs      : 尺寸设置为极小;
    btn-block   : 尺寸将填充满父元素;
    active      : 按钮将直接显示为已被按下.
    允许同时传入颜色和尺寸两个参数, 比如:"btn-danger btn-xs", 除此之外, 还有一些不常用的取值请参考Bootstrap官方网站.
 * customClass(String): 按照用户自定义的style进行显示, 自定义style代码需要放入css/style.css
 * actions:该菜单所有的操作编码
 * code:当前按钮的操作编码
 * @type {*|Function}
 */
var Button=React.createClass({
    displayName:'Common Button',

    getInitialState:function(){
        return {
            dis:false,
            cssClass:'primary'
        };
    },
    _doClick:function(e){ //e is short for event
      e.preventDefault()
      if(this.props.doAction){
          this.props.doAction();
      }
    },
    getDefaultProps: function(){
        return{
            type:"button",
        }
    },
    render:function(){
        var name="";
        var dis = this.props.disabled;
        var cssClass = this.props.cssClass?this.props.cssClass:'btn-primary';
        var className = this.props.customClass? this.props.customClass: "btn "+cssClass
        if(dis&&dis==true){
            return <button type={this.props.type} className={className} >{this.props.disabledName}</button>; //cannot use class=XX , use className=XX instead
        }
        if(this.props.btnName){
            name=this.props.btnName
        };
        var actions=this.props.actions;//该菜单所拥有的的操作
        var code=this.props.code;//该按钮对应的操作编码
        //var isDisplay=false;//默认是不显示
        var isDisplay=true;//没有实现该处理，所以默认全部显示
        if(actions){
            if(code){
                var l=actions.length;
                for(var i=0;i<l;i++){
                    var obj=actions[i];
                    if(obj==code){
                        isDisplay=true;
                        break;
                    }
                }
            }
        };

    return (isDisplay?<button type={this.props.type} className={className} onClick={this._doClick}>{name}</button>:null);
    }
});
module.exports=Button;
