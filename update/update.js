var user = require("../Schema/Schema");

/**
 * 更新
 */
function update(){
	var wherestr = {"username":"John"};
	var updatestr = {"userpwd" : "xh527000"};

	user.update(wherestr,updatestr,function(err,result){
		if(!err){
			console.log("结果：" + result);
		}else{
			console.log("出错：" + err);
		}
	})
}

update();