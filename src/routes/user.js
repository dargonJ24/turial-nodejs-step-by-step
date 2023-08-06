import express from "express"
import { createuserControler, detailsUserController, userController } from "../controller/userController.js"
const router =express.Router()

router.get("/details",userController)
router.get("/",detailsUserController)
router.post("/",createuserControler)
export default router