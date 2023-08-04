import userroutes from "./user.js"
import studentroutes  from "./student.js"
const routes= (app)=>{
    app.use('/user',userroutes)
    app.use('/student',studentroutes)
}
export default  routes