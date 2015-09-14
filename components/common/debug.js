var React=require("react/addons");

var Debug = {
	showLog:true,
	clone: function(myObj){
		if(typeof(myObj) != 'object') return myObj; 
		if(myObj == null) return myObj; 
		var myNewObj = new Object(); 
		for(var i in myObj) 
			myNewObj[i] = this.clone(myObj[i]); 
		return myNewObj; 
	},
	log: function(data,string){
		if(!this.showLog)
			return;
		if(string)
			console.log(string);
		if (typeof(data)=="object"){
			var tmp = this.clone(data);
			console.log(tmp);
		}
		else{
			console.log(data);
		}
	}

};


module.exports=Debug;