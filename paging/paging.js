var user = require("../Schema/Schema");

function paging(){
	user.find({}).exec(function(err,result){
		if(err) console.error(err);

		console.log(result);
	});
}

paging();
