import express from "express"
const router =express.Router()
router.get("/details",(req,res)=>{
    res.send("Student detail page")
})
router.get("/",(req,res)=>{
    res.send("Student page")
})
export default router