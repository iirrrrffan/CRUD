const express = require("express");
const userRoute = express.Router();
const userController = require("../Controller/user")


userRoute.post("/create", userController.createUser)
.get("/",userController.getusers)
.post("/update",userController.updateUser)
.delete("/:id",userController.deleteUser)

module.exports=userRoute


