import {User} from '../models/userModel.js'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
export const RefreshService = (token) => {
  console.log("service: token",token)
  return new Promise((resolve, reject) => {
    try {
      jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
          resolve({ message: err });
        } else {
          if (user) {
            console.log(user);
            const newAcessToken=generalAcessToken({isAdmin: user.isAdmin,_id:user._id})

            resolve({
              status:"OK",
              access_token: newAcessToken
            })
          } else {
            resolve({ message: "The user is not authenticated" });
          }
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};
export const deleteAllUserService=(ids)=>{
  return new Promise(async (resolve,reject)=>{
    try{
      console.log(ids)
     const deleteallUser = await User.deleteMany({_id:ids})
     resolve({
      status:'OK',
      data:deleteallUser
     })
    }catch(e){
      reject({
        status:'err',
        message:e
      })
    }
  })
}
export const getAllUserService=()=>{
  return new Promise(async (resolve,reject)=>{
    try{
     const allUser = await User.find()
     resolve({
      status:'OK',
      data:allUser
     })
    }catch(e){
      reject({
        status:'err',
        message:e
      })
    }
  })
}
export const deleteUserService=async (_id)=>{
  return new Promise(async (resolve, reject) => {
    try {
      const deleteUser =await User.findByIdAndDelete(_id)
      if(deleteUser){
        resolve({
          status:'OK',
          data:deleteUser
        })
      }
      else{
        resolve({
          status: 'err',
          message: 'the user not define'
        });
      }
      
    } catch (e) {
      console.error(e);
      reject({
        status: 'error',
        message: e
      });
    }
  });
 
  }

export const updateUserService = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne(data)
      if(checkUser){
        resolve({
          status:'err',
          message:"the info of user is duplicate"
        })
      }
      const updateUser=await User.findByIdAndUpdate(id,data)
      console.log(updateUser)
      if(updateUser){
        const getnewUser= await getDetailUserService(id)
        resolve({
          status: 'success',
         data :getnewUser
        });
      }else{
        resolve({
          status: 'err',
          message: 'the user not define'
        });
      }
      
    } catch (e) {
      console.error(e);
      reject({
        status: 'error',
        message: e
      });
    }
  });
};
export const searchUserService = (name) => {
    return new Promise(async (resolve, reject) => {
      try {
        const findUser = await User.findOne({ name: name });
        console.log(findUser, name);
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
      } catch (e) {
        console.log(e);
        reject({
          message: e,
          status: 'err'
        });
      }
    });
  };
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
const generalAcessToken=(data)=>{
  const access_token =jwt.sign(data,process.env.ACCESS_TOKEN_SERECT,{expiresIn:'30m'})
  return access_token
}
const generalRefreshToken=(data)=>{
  const access_token =jwt.sign(data,process.env.REFRESH_TOKEN_SECRET,{expiresIn:'365d'})
  return access_token
}
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
                    const access_token=generalAcessToken({isAdmin: userDB[0].isAdmin,_id:userDB[0]._id})
                    const refresh_token=generalRefreshToken({isAdmin: userDB[0].isAdmin,_id:userDB[0]._id})
                    console.log("access_token",access_token)
                    console.log("refresh_token",refresh_token)
                    resolve({
                        status:"OKE",
                        data:{
                          access_token,refresh_token
                        }
                    })
                   }else{
                    return resolve({
                        status:'err',
                        status:'pass err'
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