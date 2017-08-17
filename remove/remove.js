var user = require("../Schema/Schema");

function del(){
	var wherestr = {"username" : "John"};

	user.remove(function(err,result){
		if(!err){
			console.log("结果：" + result);
		}else{
			console.log("出错：" + err);
		}
	})
}

del();