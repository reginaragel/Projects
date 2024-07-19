const mongoose=require('mongoose');

const connection=()=>{
    mongoose.connect(process.env.DB_URL)
    .then((con)=>{
        console.log('MongoDb connected to the host',con.connection.host);
    })
    .catch((err)=>{
        console.log('Failed to connect mongoDB',err);
    })
}

module.exports=connection