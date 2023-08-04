import express from "express"
const router =express.Router()

router.get("/details",(req,res)=>{
    res.send("user details page")
})
router.get("/",(req,res)=>{
    res.send('user page')
})
export default router