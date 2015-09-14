
/**
 * 正则表达式验证
 *
 */
var RegUtils = {
    number:"number",
    numberMsg:'只能为数字',
    isNumber:function(v){
        var reg=/^\d+$/g;
        if(!reg.test(v)){
            return false;
        }
        return true;
    },
    validate:function(type,v){
        var isResult=true;
        switch(type)
        {
            case 'number':
                isResult=this.isNumber(v);
                break;
            default:
        }
        return isResult;
    }


};
module.exports = RegUtils;
