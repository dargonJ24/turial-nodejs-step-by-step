import express from "express"
import { createuserControler, 
    detailsUserController, 
    loginuserControler, 
    userController,
    searchUserController,
    updateUserController,
    detetesUserController
    
 } from "../controller/userController.js"
const router =express.Router()
router.get('/search',searchUserController)
router.delete('/delete/:id',detetesUserController)
router.patch('/update/:id',updateUserController)
router.get("/details",userController)
router.get("/:Userid",detailsUserController)
router.post("/login",loginuserControler)
router.post("/",createuserControler)

export default router