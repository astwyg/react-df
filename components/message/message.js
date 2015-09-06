/**
 * Created by chenth on 15-7-10.
 */
var $ = require('jquery');
require("jquery-ui");
function MessageBox(){
    this.dialogId="bss_portal_dialog_id";
};
MessageBox.alert=function(text, title, fn){
    // Hope_Dialog_Id="dialog-message";
    this.dialogId="dialog-message";
    var html =
        '<div class="dialog" id="'+this.dialogId+'">' +
        '  <p>' +
        '    <span class="ui-icon ui-icon-circle-check" style="float: left; margin: 0 7px 0 0;"></span>' + text +
        '  </p>' +
        '</div>';
    return $(html).dialog({
        //autoOpen: false,
        resizable: false,
        // dialogClass: "no-close",
        modal: true,
        show: {
            effect: 'fade',
            duration: 300
        },
        close:function(evt,ui){
            $("#dialog-message").dialog("destroy");
            $("#dialog-message").dialog("romove");
        },
        title: title || "提示信息",
        buttons: {
            "确定": function() {
                var dlg = $(this).dialog("close");
                // $(this).dialog("romove");
                fn && fn.call(dlg);
            }
        }
    });
};
MessageBox.jqwait=function(text, title, fn){
    var path=getPath();
    var d=new Date();
    this.dialogId="dialog-wait-"+d.getMilliseconds();
    var html =
        '<div class="dialog" id="'+this.dialogId+'">' +
        '  <p>' +
        '    <span class="ui-icon ui-icon-circle-check" style="float: left; margin: 0 7px 0 0;"></span>'+text+'<img src="'+path+'/images/loading.gif"  width=250 height=80/>'  +
        '  </p>' + '</div>';
    return $(html).dialog({
        //autoOpen: false,
        resizable: false,
        dialogClass: "no-close",
        modal: true,
        show: {
            effect: 'fade',
            duration: 300
        },
        close:function(evt,ui){
            $("#dialog-wait").dialog("destroy");
            $("#dialog-wait").dialog("romove");
        },
        title: title || "正在加载"

    });
};
MessageBox.close=function(){
    if(typeof(this.dialogId)!="undefined"){
        $("#"+this.dialogId).dialog("close");
        $("#"+this.dialogId).dialog("destroy");
        //$("#"+this.dialogId).dialog("romove");
    }
};
MessageBox.jqopen=function(url, id,options,title){
    var d=new Date();
    this.dialogId=id+"_dialog_open_"+d.getMilliseconds();
    var t="提示信息";
    if(title!==undefined ){
        t=title;
    }
    var html =
        '<div class="dialog" id="'+ this.dialogId+'" title="'+t+'">' +
        ' <iframe src="' + url + '" frameBorder="0" style="border: 0; " scrolling="auto" width="100%" height="100%"></iframe>' +
        '</div>';
    return $(html).dialog($.extend({
        modal: true,
        closeOnEscape: false,
        draggable: false,
        resizable: false,
        close: function(event, ui) {
            // $(this).dialog("destroy");// 关闭时销毁
            $(this).dialog("destroy");
            //$(this).dialog("romove");

        }
    }, options));

};
MessageBox.jqconfirm=function(text, title, fn1, fn2){
    this.dialogId="dialog-confirm";
    var html =
        '<div class="dialog" id="'+this.dialogId+'">' +
        '  <p>' +
        '    <span class="ui-icon ui-icon-alert" style="float: left; margin: 0 7px 20px 0;"></span>' + text+
        '  </p>' +
        '</div>';
    return $(html).dialog({
        //autoOpen: false,
        resizable: false,
        modal: true,
        show: {
            effect: 'fade',
            duration: 300
        },
        close:function(evt,ui){
            $("#dialog-confirm").dialog("destroy");
            $("#dialog-confirm").dialog("romove");
        },
        title: title || "提示信息",
        buttons: {
            "确定": function() {
                var dlg = $(this).dialog("close");

                fn1 && fn1.call(dlg, true);
            },
            "取消": function() {
                var dlg = $(this).dialog("close");
                fn2 && fn2(dlg, false);
            }
        }
    });
};
module.exports = MessageBox;
