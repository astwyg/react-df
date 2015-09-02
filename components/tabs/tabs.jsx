/**
 * @module Tabs
 */
var React = require('react/addons');
//var Debug = require("../../common/debug");

/**
 * 标签页组件
 * @class Tabs
 * @constructor
 * @param {String} maxHeight 最大高度, Tab超过此高度会在右边出现滚动条
 * @param {Children} Tab 传入标签, 格式参考Tab组件
 * @example
 * <Tabs maxHeight="300px">
        <Tab title="111" id="1">
            <p>456</p><p>456</p><p>456</p><p>456</p><p>456</p><p>456</p>
        </Tab>
        <Tab title="222" id="2" isActive={true}>
            <p>789</p>
        </Tab>
    </Tabs>
 */
var Tabs=React.createClass({
    displayName:'Tabs',
    getInitialState:function(){
    	return{}
    },
    getDefaultProps: function(){
        return{
            maxHeight:"auto"
        }
    },
    componentWillMount:function(){
    },
    render:function(){
    	var ul = [];
		this.props.children.forEach(function(node){
				var href = "#"+node.props.id;
				ul.push (
					<li className={node.props.isActive?"active":null}>
				      <a href={href} data-toggle="tab">
				         {node.props.title}
				      </a>
				    </li>
				);
			}
		);
        return(
        	<div>
        		<ul className="nav nav-tabs">
        			{ul}
        		</ul>
                <div className="tab-content" style={{"max-height":this.props.maxHeight}}>
        		  {this.props.children}
                </div>
			</div>);
	}
});
module.exports=Tabs;