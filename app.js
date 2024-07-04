const express=require('express')
const bodyParser=require('body-parser');
const dotenv=require('dotenv');
const path=require('path');
const cors=require('cors')
const app=express();
const connection=require('./config/config');

dotenv.config({path:path.join(__dirname,'config','config.env')})

const registers=require('./routes/routes');

connection();

app.use(express.json())
app.use(cors())
app.use('/api/v1/',registers)


app.get('/save',(req,res)=>{
    res.send('Hello World')
})


app.listen(process.env.PORT,()=>{
    console.log(`Server listening on ${process.env.PORT}`);
})