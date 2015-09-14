var APIUtils = require('./api-utils');
/**
 * ajax请求处理封装
 * @type {{get: Function, post: Function}}
 */
var AjaxUtils = {
  get:function(url,sucCall){
      var req={
          url:url,
          method:"GET"
      };
      APIUtils.request(req).then(function(d){
          sucCall(d);
      });
  },
  post:function(url,data,sucCall){
      var req = {
          url:url,
          method:"POST",
          form:false,
          data:data
      };
      APIUtils.request(req).then(function(d){
        sucCall(d);
      });
  },
  postForm:function(url,data,sucCall) {
      var req={
          url:url,
          method:"POST",
          form:true,
          data:data
      };
      APIUtils.request(req).then(function(d){
        sucCall(d);
      });
    }
};
module.exports = AjaxUtils;
