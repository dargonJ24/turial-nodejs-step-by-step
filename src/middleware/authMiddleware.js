import jwt from 'jsonwebtoken'
const authMiddleware =(req,res,next) =>{
  //console.log("req.header",req.headers) // print request header
  const token = req.headers.token.split(' ')[1];
   // note header request format :  token : bearer code_token
   if(!token){
    return res.status(404).json({
        message:'Token is valid'
    })
   }
   
   jwt.verify(token,process.env.ACCESS_TOKEN_SERECT,function(err,user){
    if(err){
        return res.status(404).json({
            message:"the user is not authemtication"
        })
    }
    console.log("user",user)
    if(user.isAdmin){
        next()
    }else{
        return res.status(404).json({
            message:"The user is not authecation"
        })
    }
})
  
}
export default authMiddleware