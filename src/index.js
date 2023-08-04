import express from "express"
import { engine} from 'express-handlebars'
const app=express()
//setup express-handlebar
app.engine('.hbs',engine({extname:'.hbs'}))
app.set("view engine",".hbs")
app.set("views","./src/views")
const port=3000
/* method routes : 
get :  request data
post : create or update
put : update  require full filed
path : update only  filed you want update
delete : delete data
*/
app.get("/",(req,res)=>{
  res.render('home',{isshow: false})
})
app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})