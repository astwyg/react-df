/**
 * Created by chenth on 15-7-16.
 */
var React=require("react/addons");

var $ = require('jquery');
//require("jquery-ui");
var APIUtils = require('../utils/api-utils');
var AjaxUtils = require('../utils/ajax');
/**
 *  <Autocomplete name="动态下拉" url="/api/test/ajax" />
 *  name:要显示的名称
 *  url:后台请求，参数为value,格式为后台请求url为"api/test/ajax?value=XXXX",XXXX为要查询的值
 *  Autocomplete.getValue()方法获取下拉选择的值
 * @type {*|Function}
 */

var AutocompleteCache = {};//查询结果缓存

var Autocomplete=React.createClass({
    statics:{
        url:'',
        id:'autocomplete_id',
        ajax:function(value,suc){
            var v={
                value:value
            };
            AjaxUtils.postForm(Autocomplete.url,v,suc);
        },
        getValue:function(){
            var v=$("#"+Autocomplete.id).val();
            return v;
        }
    },
    getInitialState:function(){
      return {
          url:''
      }
    },

    render:function(){
        var url=this.props.url;
        Autocomplete.url=url;

        var disName="";
        if(this.props.id){
            Autocomplete.id=this.props.id;
        }
        if(this.props.name){
            disName=this.props.name;
        }
        $( "#"+Autocomplete.id ).autocomplete({
            minLength:2,
            source: function(request,response){
                var path=getPath();
                var term = request.term;
                if (term in AutocompleteCache) {
                    response(AutocompleteCache[term]);
                    return;
                }
                Autocomplete.ajax(request.term,function(d){
                    AutocompleteCache[term] = d;
                    response(d);
                });


            }
        });
        return (<span><label >{disName}: </label> <input className="form-control input-nm" id={Autocomplete.id} /></span>);
    }
});
module.exports=Autocomplete;
