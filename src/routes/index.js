import userroutes from "./user.js"
import studentroutes  from "./student.js"
import emailroutes from "./email.js"
const routes= (app)=>{
    app.use('/email',emailroutes)
    app.use('/user',userroutes)
    app.use('/student',studentroutes)
    app.get('/',(req,res)=>{
        res.render('home')
    })
}
export default  routes