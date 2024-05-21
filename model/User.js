const mongoose = require("mongoose")


const user = mongoose.Schema({
    name:String,
    email:String,
})

module.exports=mongoose.model('User',user)

