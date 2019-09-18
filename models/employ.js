const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//create employ schema &model

const EmploySchema=new Schema({
	EmployeeId:{
		type:Number,
		required:[true,'Student Id is required']
	},
	FirstName:
	{
		type:String,
		required:[true,'Name is required']
	},
	LastName:{
		type:String,
		required:[false]
	},
	Password:{
		type:String,
		required:[true,'Password is required']
	}
	
	
	
	
	
});
const Employ=mongoose.model('employ',EmploySchema);


module.exports=Employ;	