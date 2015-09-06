/**
 * Created by WangYG on 2015年7月23日 17:25:28
 */

var React=require("react/addons");
var $ = require('jquery');
var Modal=require("./modal");
var Button=require("../button/button");

/**
 * <Button btnName="触发MessageBox" doAction={MessageBox.show.bind(null,"i am title","i am message")} cssClass="btn-info" />
 * !!请勿实例化此组件,仅可使用show方法显示提示框!!
 * show方法参数1:null
 * show方法参数2(String):标题
 * show方法参数3(String):内容
 */
var MessageBox = React.createClass({
	statics:{
		title : null,
		message : null,
		show : function(title,message){
			mb = (<Modal id="MessageBoxModal" title={title} submitAction={Modal.hide.bind(null,"MessageBoxModal")} >
			        <span>{message}</span> <br/>
					<br/>
			      </Modal>);
			$("body").append("<div id='MessageBox'></div>");
			React.render(mb, document.getElementById("MessageBox")); /*使用$("#"+this.props.uniqueID)会找不到节点, 原因不详*/
			$("#MessageBoxModal").modal();
		}
	},
	render : function(){
		return (<div></div>);
	}
});

module.exports = MessageBox;