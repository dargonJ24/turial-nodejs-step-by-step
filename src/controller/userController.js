import {User} from '../models/userModel.js'
export const userController=(req,res)=>{
    res.send("User page")
}
export const detailsUserController=(req,res)=>{
    res.send("User detail page")
}
export const createuserControler = async (req, res) => {
    const {email,password,name}=req.body
    try{
        if(email && password && name)
        {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
            const isEmail=mailformat.test(email)
            if(isEmail)
            {
                const ischeckEmail= await User.find({email:email})
                const ischeckName=await User.find({name})
                if(ischeckEmail.length >0 || ischeckName.length>0)
                {
                    return res.json({
                        status:'err',
                        message:'The name or user is existed'
                    })
                }
                const newUser= await User.create({
                    email,
                    name,
                    password
                })
                return res.json({
                    status:"OKE",
                    data: newUser
                })

            }else{
                return res.json({
                    status:'err',
                    message:'user not email'
                })
            }
          

        }
        else{
            return res.json({
                status :'err',
                message: 'the email , passwords  require '
            })

        }

    }
    catch(err)
    {
        console.log(err)
        return res.json({
            status :'err',
            message:err
        })
    }
  };