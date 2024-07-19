const express=require('express')

const {saveApp}=require('../controllers/appControllers');
const { connection } = require('mongoose');
const { collection } = require('../models/appModels');
const AppModel = require('../models/appModels');

const router=express.Router();

router.post('/register',async(req,res)=>{

    
    var name=req.body.name;
    var logo=req.body.logo;
    var details=req.body.details;
    var domain=req.body.url;
    var app_status=true

    var data={
        "name":name,
        "logo":logo,
        "details":details,
        "domain":domain,
        "app_status":app_status
    
    }
    

    connection.collection('registered').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log('Record Inserted SuccessFully')
        // console.log(data)
    })
  
   
})



module.exports=router;