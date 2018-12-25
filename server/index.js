const mongoose  = require('mongoose');
const express = require ("express");
const app = express();

const cors = require('cors');
var port = 5000;

app.use(cors('*'));

var url = "'mongodb://localhost:27017/diwali";
const Document

mongoose.connect(url,(err)=>{
    if(!err){
        console.log(`Db connected successfully ${JSON.stringify(err,undefined,2)}`)
    }else console.log(`Error in Db conction ${JSON.stringify(err,undefined,2)}`)
});

app.get('/docuemnt',(req,res)=>{

})
app.listen(port,console.log(`Port runing in localhost ${port}`));

