import express from "express"
import { createuserControler, 
    detailsUserController, 
    loginuserControler, 
    userController,
    searchUserController } from "../controller/userController.js"
const router =express.Router()
router.get('/search',searchUserController)
router.get("/details",userController)
router.get("/:Userid",detailsUserController)
router.post("/login",loginuserControler)
router.post("/",createuserControler)

export default router