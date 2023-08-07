import {User} from '../models/userModel.js'
import bcrypt from "bcrypt";
export const loginUserServie =({email,password})=>{
   
    return new Promise(async (resolve,reject)=>{
        try{
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
            const isEmail=mailformat.test(email)
            if(isEmail)
            {
                const userDB= await User.find({email:email})
                const checkpassword= bcrypt.compareSync(password,userDB[0].password)
                console.log(checkpassword)
                
                resolve({
                    status:"OKE",
                    data: {
                        email:newUser.email,
                        name:newUser.name
                    }
                })

            }else{
                return resolve({
                    status:'err',
                    message:'user not email'
                })
            }
        }catch(error){
            reject({
                message:'err',
                status:'err'
            })

        }
    }).catch((e)=>console.log(e))

}
export const createUserServie =({email,password,name})=>{
    return new Promise(async (resolve,reject)=>{
        try{
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
            const isEmail=mailformat.test(email)
            if(isEmail)
            {
                const ischeckEmail= await User.find({email:email})
                const ischeckName=await User.find({name})
                if(ischeckEmail.length >0 || ischeckName.length>0)
                {
                   resolve({
                        status:'err',
                        message:'The name or user is existed'
                    })
                }
                const hashpassword =bcrypt.hashSync(password,10)
                const newUser= await User.create({
                    email,
                    name,
                    password:hashpassword
                })
                
                resolve({
                    // status:"OKE",
                    // data: {
                    //     email:newUser.email
                        
                    // }
                })

            }else{
                return resolve({
                    status:'err',
                    message:'user not email'
                })
            }
        }catch(error){
            reject({
                message:'err',
                status:'err'
            })

        }
    }).catch((e)=>console.log(e))
}