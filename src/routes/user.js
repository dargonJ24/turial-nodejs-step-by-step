import express from "express"
import { createuserControler, 
    detailsUserController, 
    loginuserControler, 
    userController,
    searchUserController,
    updateUserController,
    detetesUserController,
    getAllUserController,
    detetesAllUserController,userRefreshController
    
 } from "../controller/userController.js"
import authMiddleware from "../middleware/authMiddleware.js"
const router =express.Router()
router.get('/search',searchUserController)
router.get('/getalluser',authMiddleware,getAllUserController)
router.delete('/delete/:id',detetesUserController)
router.delete('/deleteAll',detetesAllUserController)
router.patch('/update/:id',updateUserController)
router.get("/details",userController)
router.get("/:Userid",detailsUserController)
router.post("/login",loginuserControler)
router.post("/refreshToken",userRefreshController)
router.post("/",createuserControler)
export default router