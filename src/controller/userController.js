import {User} from '../models/userModel.js'
import bcrypt from "bcrypt";
import { createUserServie, loginUserServie } from '../service/userService.js';
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
export const detailsUserController=(req,res)=>{
    res.send("User detail page")
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
   