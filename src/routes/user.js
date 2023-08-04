import express from "express"
import { detailsUserController, userController } from "../controller/userController.js"
const router =express.Router()

router.get("/details",userController)
router.get("/",detailsUserController)
export default router