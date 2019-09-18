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

module.exports=router;