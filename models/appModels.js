const { name } = require('ejs');
const mongoose=require('mongoose');


const appSchema=new mongoose.Schema({
    name:{
        type:String,
        unique: true,
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
    app_status:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default:Date.now

    }
    

})


// appSchema.method("toJSON", function() {
//     const { __v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
//   });

//   const AppModel = mongoose.model("AppModel", appSchema);
//   return AppModel;



const AppModel=mongoose.model('AppModel',appSchema)

// appSchema.statics.isThisNameInUse=async function(){
//     try{
//         const data=await this.findOne({name})
//         if(name) return false;

//         return true;
//     }catch(error){
//         console.log('App Name already Exists',error.message);
//         return false;
//     }
// }


module.exports=AppModel;