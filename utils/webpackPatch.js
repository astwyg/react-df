/**
 * ES6 patch for webpack
 *
 * @module webpack patch
 */

Object.assign = Object.assign||function(des, src, override){
	if(src instanceof Array){
        for(var i = 0, len = src.length; i < len; i++)
             extend(des, src[i], override);
    }
    for( var i in src){
        if(override || !(i in des)){
            des[i] = src[i];
        }
    } 
    return des;
}

