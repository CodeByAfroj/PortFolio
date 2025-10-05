import express from "express"
import User from "../models/userModel.js";
//get 
export const show = async(req,res)=>{
   try {
    const users = await User.find();
    if(users.length==0){
        return res.json("No response....")
    }
    return res.status(201).json(users)
   } catch (error) {
    return res.json({
        message:"Error while creating a Book",
        error:error.message
    })
    
   }

}


export const create = async(req,res)=>{
    const{name,email,msg} = req.body;
    try {
         const newUser = new Book({
            name,email,msg
         })
         const saveDetails = await newUser.save();
         return res.status(201).json(saveDetails)
    } catch (error) {
        return res.json({
            message:"Error while sharing details",
            error:error.message
        })
    }
}


