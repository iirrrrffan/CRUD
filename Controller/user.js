const userSchema = require("../model/User")

const createUser = async (req,res)=>{
    try {
        const {name,email} = req.body;
        const data = await userSchema.create({
        name,
        email
        })
        if(!data){
            return res.status(404).json({
                status:'fail',
                message:"fill the form "
            })
        }
        return res.status(201).json({
            status:'success',
            message:'create new user succesfullly',
            data:data
        })
        userSchema.save()
    } catch (error) {
        console.log(error);
    }
}
 
const getusers=async(req,res)=>{
    try {
        const data=await userSchema.find()
        if(!data){
            return res.status(404).json({
                status:'fail',
                message:"no datta found"
            })
        }
        return res.status(200).json({
            status:'suucess',
            data:data
        })
        
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (req,res)=>{
    try {
        const {id,name,email} = req.body;
        const newdata={name,email}
        const data = await userSchema.findByIdAndUpdate(id,{name,email},{new:true})
        if(!data){
            return res.status(404).json({
                status:"fail",
                message:"no data here"
            })
        }
        return res.status(400).json({
            status:"done",
            data:data
        })
        userSchema.save()
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (req,res)=>{
    try {
        const {id}=req.params
        const data =  await userSchema.findByIdAndDelete(id)
        if(!data){
            return res.status(404).json({
                status:"fail",
                message:"fail"
            })
        }
    } catch (error) {
        console.log(error);
    }
}


module.exports={createUser,getusers,updateUser,deleteUser}