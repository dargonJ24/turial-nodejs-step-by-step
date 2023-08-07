import {User} from '../models/userModel.js'
import bcrypt from "bcrypt";
export const getDetailUserService = (Userid) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("Userid-B2", Userid);
        const findUser = await User.findById(Userid);
        console.log(findUser, Userid);
        if (findUser) {
          resolve({
            status: 'ok',
            data: findUser
          });
        } else {
          resolve({
            status: 'OK',
            message: 'The user is not defined'
          });
        }
      } catch (err) {
        reject({
          status: 'error',
          message: err
        });
      }
    });
  };
export const loginUserServie =({email,password})=>{
   
    return new Promise(async (resolve,reject)=>{
        try{
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
            const isEmail=mailformat.test(email)
            if(isEmail)
            {
                const userDB= await User.find({email:email})
                const checkpassword= bcrypt.compareSync(password,userDB[0].password) // serDB[0].password request data object find
                console.log(checkpassword) 
                
                if(userDB){
                    if(checkpassword)
                   {
                    console.log("login sucesss")
                    resolve({
                        status:"OKE",
                        data:{
                           emal: userDB[0].email, 
                            name: userDB[0].name
                        }
                    })
                   }
                 
                }
                

            }else{
                return resolve({
                    status:'err',
                    status:'user not exist'
                })
            }
        }catch(error){
            reject({
                status:'err',
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
                        status:'The name or user is existed'
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
                    status:'user not email'
                })
            }
        }catch(error){
            reject({
                status:'err',
                status:'err'
            })

        }
    }).catch((e)=>console.log(e))
}