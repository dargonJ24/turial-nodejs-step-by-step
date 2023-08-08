import {User} from '../models/userModel.js'
import bcrypt from "bcrypt";
import { createUserServie,
     loginUserServie,
     getDetailUserService,
     searchUserService,
     updateUserService,
     deleteUserService,
     getAllUserService
     } from '../service/userService.js';
export const getAllUserController =async(req,res)=>{
    try{
        const response =await getAllUserService()
        return res.status(200).json({
            data:response,
            status:'OK'
        })
    }catch(e){
        return res.status(400).json({
            message:e,
            status:'err'
        })
    }
}
export const detetesUserController=async(req,res)=>{
    try{
        const _id=req.params.id
        if(_id){
            const response = await deleteUserService(_id)
            return res.status(200).json(response)

        }else{
            return res.status(404).json({
                status:'err',
                message:'the userid is required'

            })
        }

    }catch(error){
        return res.status(404).json({
            status:'err',
            message:error
        })
    }
}
export const updateUserController=async(req,res)=>{
        try{
         const {id} =req.params
         const data= req.body
         if(id && data){
            const response =await updateUserService(id,data)
            if(response){
                return res.json(response)
            }else{
                return res.json({
                    status:"err",
                    message:"the server is problem"
                })
            }
         }else{
            return res.json({
                status:'err',
                message:'the id of user is required'
            })
         }
        }catch(err){
         console.log(err)
         return res.json({
             status:'err',
             message:err
         })
        }
     }
export const searchUserController=async(req,res)=>{
   try{
    const {name}=req.query
    if(name){
        const response = await searchUserService(name)
        return res.json(response)
    }else{
        return res.json({
            status :'err',
            message: 'not name not exits '
        })
    

    }

   }catch(err){
    console.log(err)
    return res.json({
        status:'err',
        message:err
    })
   }
}
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
   