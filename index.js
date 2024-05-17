const express = require("express");
const mongoose = require("mongoose")

const app = express()
const PORT = 4004;

app.listen(PORT,()=>{
    console.log("port is running" ,PORT);
})

mongoose.connect('mongodb://localhost:27017')
.then(()=>{
    console.log("connected");
})
.catch((err)=>{
    console.log(err);
})
