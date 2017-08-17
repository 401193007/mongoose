// schema是mongoose里会用到的一种数据模式，可以理解为表结构的定义；每个schema会映射到mongodb中的一个collection，它不具备操作数据库的能力

var mongoose = require("../about_db/db");
var Schema = mongoose.Schema;

// 　　定义一个Schema就这么简单，指定字段名和类型

// 　　Schema Types内置类型如下：

// 　　String

// 　　Number

// 　　Boolean | Bool

// 　　Array

// 　　Buffer

// 　　Date

// 　　ObjectId | Oid

// 　　Mixed

// var UserSchema = new Schema({
// 	name : {
// 		type : String
// 	},
// 	age : {
// 		type : Number
// 	}
// });

// model是由schema生成的模型，可以对数据库的操作
// module.exports = mongoose.model("xxxs",UserSchema);


var UserSchema = new Schema({
	name : {
		type : String
	},
	age : {
		type : Number
	},
	date : {
		type : Date
	}
},{ collection: 'hahas'});

UserSchema.index({name:1},{unique:true});

// model是由schema生成的模型，可以对数据库的操作
module.exports = mongoose.model("user",UserSchema);
