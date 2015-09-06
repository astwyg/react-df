/**
 * Created by Administrator on 2015/4/2.
 */
var React = require('react');
var $ = require('jquery');
var tree = require('./jquery-tree');
var TreeDemo = React.createClass({

    componentDidMount: function(){
         var _data = this.props.data === undefined ? []:this.props.data;
         var _checkboxFlag = this.props.checkbox === undefined ? false : this.props.checkbox;
         if(typeof _checkboxFlag !== 'boolean')_checkboxFlag = false;
         var _obj = this.props.fn;
         if(_obj==undefined){
            _obj = {};
         }
         _obj.data = _data;
         _obj.checkbox = _checkboxFlag;
         _obj.animate = true;
         $('#myTree').tree(_obj);
   },

    render : function(){
       var style = { display: 'none' };
       return  (<div id="myTree" className="tree">
           <div className="tree-folder" style={style}>
               <div className="tree-folder-header">
                   <i className="icon-folder-close"></i>
                   <div className="tree-folder-name"></div>
               </div>
               <div className="tree-folder-content"></div>
               <div className="tree-loader" style={style}></div>
           </div>
           <div className="tree-item" style={style}>
               <i className="tree-dot"></i>
               <div className="tree-item-name"></div>
           </div>
       </div>);
   }
});

module.exports = TreeDemo;
