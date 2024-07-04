const mongoose=require('mongoose');


const appSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    domain:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default:Date.now

    }
    

})
const appModel=mongoose.model('Register',appSchema)


module.exports=appModel;