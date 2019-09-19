const express=require('express');
const routes=require('./routes/emp');//commented when we use app.use and require together
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

//Set our express app
const app=express();


//connect to mongodb

mongoose.connect('mongodb://localhost/employee');



app.use(bodyParser.json());

//initialize routes
app.use('/emp',require('./routes/emp'));


// 

app.use(function(err,req,res,next){
	
	res.status(422).send({error:err.message});
});

//Listen for request
app.listen(4000,function(){
	
console.log('Now listening for request');	
});