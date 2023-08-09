import jwt from 'jsonwebtoken'
const authMiddleware =(req,res,next) =>{
  //console.log("req.header",req.headers) // print request header
  const token = req.headers.token.split(' ')[1];
   // note header request format :  token : bearer code_token
   console.log("token",token)
   
   jwt.verify(token,'access_token',function(err,user){
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