const express=require('express')
const bodyParser=require('body-parser');
const dotenv=require('dotenv');
const path=require('path');
const cors=require('cors')
const app=express();
const connection=require('./config/config');

dotenv.config({path:path.join(__dirname,'config','config.env')})

const registers=require('../backend/routes/routes');
const {saveApp}=require('./controllers/appControllers')

connection();

// app.use((req, res, next) => {
//     console.log('Request Received:', req.method, req.url);
//     next();
// });

app.use(express.json())
app.use(cors())
app.use('/api/v1/',registers)

app.post('/test', (req, res) => {
    console.log('Test route hit:', req.body);
    res.send('Test route working');s
    res.json(req.body);
});


app.get('/save',(req,res)=>{
    res.send('Hello World')
})


app.listen(process.env.PORT,()=>{
    console.log(`Server listening on ${process.env.PORT}`);
})