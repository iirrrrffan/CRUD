const express = require("express")
const Router=require('./Routes/userController')
const app = express()
const PORT = 4000;
const mongoose = require("mongoose")


mongoose.connect("mongodb://127.0.0.1:27017/CRUD")
.then(()=>{
 console.log("DB is connected");
})
.catch((err)=>{
    console.log(err);
}
)
app.listen(PORT,()=>{
    console.log(`running on ${PORT}`);
})
app.use("/",Router)