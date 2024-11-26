const express = require("express");
const { UserModel } = require("../model/user.model");

const UserRouter = express.Router();

// User Route where User data will store 
UserRouter.post("/add",async(req,res)=>{
    const {MobileNumber,Name} = req.body;
    try {
        const User = new UserModel({
            MobileNumber,
            Name
        })
        await User.save()
    res.status(201).json({ msg: "User added successfully",User});
    } catch (error) {
        res.status(400).json({msg:"err"})
    }
})

module.exports = {
    UserRouter
}


