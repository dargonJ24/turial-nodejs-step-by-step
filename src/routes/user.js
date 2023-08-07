import express from "express"
import { createuserControler, detailsUserController, loginuserControler, userController } from "../controller/userController.js"
import { loginUserServie } from "../service/userService.js"
const router =express.Router()

router.get("/details",userController)
router.get("/",detailsUserController)
router.post("/login",loginuserControler)
router.post("/",createuserControler)

export default router