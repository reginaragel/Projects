const express=require('express')

const {saveApp}=require('../controllers/appControllers')

const router=express.Router();

router.post('/register',saveApp)

module.exports=router;