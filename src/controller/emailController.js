import { sendEmailService } from "../service/EmailService.js"

export const sendEmailController=async (req,res)=>{
   
    try{
        const {email} =req.body
    if(email){
      
       const response = await sendEmailService(email)
       return res.json(response)
    }
    return res.json({
        statu:"OK",
        message:"the id require"
    })
    }catch(e){
        console.log(e)
        return res.json({
            status:'err'
        })
    }

   
}