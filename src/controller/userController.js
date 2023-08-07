import {User} from '../models/userModel.js'
import bcrypt from "bcrypt";
import { createUserServie, loginUserServie,getDetailUserService } from '../service/userService.js';
export const detailsUserController=async (req,res)=>{
    console.log("req.params",req.params)
    const {Userid} =req.params
    if(Userid){
        console.log("req.params-B1",Userid)
       const response = await getDetailUserService(Userid)
       return res.json(response)
    }
    return res.json({
        statu:"OK",
        message:"the id require"
    })
   
}
export const loginuserControler = async (req, res) => {
    var {email,password}=req.body
    if(email && password)
    {
     const response = await loginUserServie({email,password})
     return res.json(response)
    }
    else{
        return res.json({
        status :'err',
        message: 'the email or passwords  not exits '
    })

    }}
export const userController=(req,res)=>{
    res.send("User page")
}

export const createuserControler = async (req, res) => {
    var {email,password,name}=req.body
    if(email && password && name)
    {
     const response = await createUserServie({email,password,name})
     return res.json(response)
    }
    else{
        return res.json({
        status :'err',
        message: 'the email , passwords  require '
    })

    }}
   