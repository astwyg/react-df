/**
 * Created by chenth on 15-7-10.
 */
var React = require('react/addons');

var Grid=React.createClass({
    statics:{
        datas:{},
        getCheckedValue:function(){
            var arr=[];
            var datas=Grid.datas;
            for(var k in datas){
                var d=datas[k];

                if(d>0 || d.length>0){
                    arr.push(d);
                }
            }

            return arr;
        },
        cleanData:function(){
            Grid.datas=[];
        }
    },

    getInitialState : function(){
        return {
            datas:[],
            prifx:"id_"

        };
    },
    getDefaultProps: function(){
        return{
            checkType :"checkbox",
        }
    },
    _checkBoxOnChange:function(event){

        var datas=[];
        if(this.props.checkType == "checkbox"){
            datas=Grid.datas;
        }
        else if(this.props.checkType == "radio"){
            Grid.datas = [];
            Grid.cleanData();
        }
        var v=event.target.value;

        if(event.target.checked){
            datas[this.state.prifx+v]=v;
        }else{
            datas[this.state.prifx+v]=0;
        }
        this.state.datas=datas;
        Grid.datas=this.state.datas;
    },
    render:function(){

        var title=this.props.title; //这里不知道为什么不能直接在t中使用this.props.XXX
        var key=this.props.jsonKey;
        var data=this.props.data;
        var checkType = this.props.checkType;
        var rows=[];
        var titleData=[];
        if(title){
            title.forEach(function(d){
                var t=<th>{d}</th>;
                titleData.push(t);
            });
        }


        var self=this;

        var t= <table  className="table table-hover table-bordered">
        <thead>
        <tr>
        {titleData}
        </tr>
        </thead>
        <tbody>
        {data&&data.length>0? this.props.data.map(function(source, key) {
            return <tr key={key}>
            {this.props.jsonKey.map(function(column, columnKey) {
                if(columnKey==0){
                    if(self.props.noHasCheckBox&&self.props.noHasCheckBox==true){
                         return <td key={columnKey}>{source[column]}</td>
                    }
                    else{
                        return <td key={columnKey}><input type={checkType} onChange={self._checkBoxOnChange} name="id" value={source[column]}/></td>
                }
            }else{
                return <td key={columnKey}>{source[column]}</td>
            }
        })}
    </tr>
}.bind(this)) : <td colSpan={this.props.title.length + 1}><div className="text-center">暂无数据，请输入查询条件进行查询。</div></td>}
</tbody>
</table>;
return (t);
}
});
module.exports=Grid;