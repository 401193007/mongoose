var mongoose = require("mongoose");
var DB_URL = "mongodb://localhost:27017/test";

mongoose.connect(DB_URL);  //连接数据库

mongoose.connection.on("connected",function(){
	console.log('Mongoose connection open to ' + DB_URL);  
});

mongoose.connection.on("error",function(err){
	console.log(err);
});

mongoose.connection.on("disconnected",function(){
	console.log("连接断开");
});

module.exports = mongoose;