const express=require('express');
const router=express.Router();
const Posts=require('../models/employ');


router.get('/employ',function(req,res){
	
	res.send({type:'GET'});
	
});

//add a new Employee in database Employee
router.post('/employ',function(req,res,next){
	
	
	
	Posts.create(req.body).then(function(employ){
	
	res.send(employ);
		
}).catch(next);
	
});



router.post('/user',function(req,res,next){

	Posts.findOne({EmployeeId:req.body.EmployeeId}).then(function (result){
	
		if(result!=null){
			if(req.body.Password==result.Password){
				res.send('Welcome');
			 }else{
				res.send("Wrong Name,Try Again");
		}
	 }else{
			 res.send("Invalid user");
			 res.end();
	 }
				
			
		
		}).catch(next);
		
	});
	
module.exports=router;