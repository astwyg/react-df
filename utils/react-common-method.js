/**
 * Created by WangYG on 15-7-28.
 */
 /*
 * 此方法用于筛选公共参数, 防止无用参数蔓延.如果不需要组合参数, 建议使用BSSForm组件.
 */
 var ReactCommonMethod={
 	selectCommonParam : function(keys){
        var p = this.state.paramReactCommonAction;
        var selected = {};
        for(i in keys){
            selected[keys[i]]=p[keys[i]];
        }
        return selected;
    }
 };

 module.exports = ReactCommonMethod;