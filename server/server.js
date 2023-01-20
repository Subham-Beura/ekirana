const express= require('express')
const mongoose=require('mongoose')
var cors = require('cors')
var bodyParser = require('body-parser')
const auth=require('./auth')
const app=express()

app.use(cors())
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/ekirana');
mongoose.set('strictQuery', false);
app.use('/auth',auth)
app.get('/',(req,res)=>{
    res.send("Hello Wordl")
})
const PORT=4000
app.listen(PORT,()=>{
    console.log("Server Started on ",PORT)
});