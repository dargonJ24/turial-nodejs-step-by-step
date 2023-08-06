import express from "express"
import { engine} from 'express-handlebars'
import routes from './routes/index.js'
import mongoose from "mongoose"
import * as dotenv from 'dotenv'
dotenv.config()

const app=express()
// api return json
app.use(express.json())
//setup static file
app.use(express.static('src/public'))
//setup express-handlebar
app.engine('.hbs',engine({extname:'.hbs'}))
app.set("view engine",".hbs")
app.set("views","./src/views")
const port=process.env.PORT
/* method routes : 
get :  request data
post : create or update
put : update  require full filed
path : update only  filed you want update
delete : delete data
*/
//setup connect mongodb
mongoose.connect(process.env.MONGO_DB)
.then(()=>{
  console.log("Connect DB success")
})
.catch((err)=>{
  console.log(err)
})

routes(app)
app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})