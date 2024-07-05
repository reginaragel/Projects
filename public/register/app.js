const express=require('express')
const App = require('./src/appRegister')

const app=express()
const port=5000



app.post('/registry',async(req,res)=>{
    try {
        const appData = await App.create(req.body);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})
app.listen(port,()=>{
    console.log('Server Listening on port 5000......');
})