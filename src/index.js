const express =require('express')
const app=express()
const port=3000
/* method routes : 
get :  request data
post : create or update
put : update  require full filed
path : update only  filed you want update
delete : delete data
*/
app.get("/",(req,res)=>{
  res.send("hello world")
})
app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})