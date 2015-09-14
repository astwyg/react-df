var $ = require('jquery');
//var progressJS = require('Progress.js').progressJs;
//var ActionUtils = require('./action-utils');
var MessageBox=require("../message/message");

var APIUtils = {
  request: function(req) {

    var deferred = $.Deferred();

    var request;
    if(req.form&&req.form==true){
      request = $.ajax({
        dataType: 'json',
        method: req.method,
        url: req.url,
        data: req.data
      });
    }else{
      request = $.ajax({
        contentType: 'application/json',
        dataType: 'json',
        method: req.method,
        url: req.url,
        data: JSON.stringify(req.data)
      });
    }


    request.done(function(data) {
      deferred.resolve(data);
    });

    request.fail(function(xhr, textStatus, error) {


      if (xhr.status === 401) {
        window.location = '/login';
      }

      if (xhr.status === 500 || xhr.status === 503) {

        MessageBox.alert("服务器错误！","提示");
      }

      deferred.reject();
    });

    return deferred.promise();
  }
};

module.exports = APIUtils;
