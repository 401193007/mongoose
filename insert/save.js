var User = require("../Schema/Schema");

/**
 * 插入数据
 */
function insert(){
	var user = new User({
		username : "John",
		userpwd : "ah527200",
		userage : 26,
		logindate : new Date()
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