var User = require("../Schema/Schema");

/**
 * 插入数据
 */
function insert(){
	var user = new User({
		name : "new",
		age : 12112
	});

	user.save(function(err,res){
		if(!err){
			console.log("结果：" + res)
		}else{
			console.log("出错：" + err);
		}
	});
} 

insert();