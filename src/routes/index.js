import userroutes from "./user.js"
import studentroutes  from "./student.js"
const routes= (app)=>{
    
    app.use('/user',userroutes)
    app.use('/student',studentroutes)
    app.get('/',(req,res)=>{
        res.render('home')
    })
}
export default  routes