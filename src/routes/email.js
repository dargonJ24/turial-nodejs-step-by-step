import express from "express"
import { sendEmailController } from "../controller/emailController.js"

const router =express.Router()
router.post("/sendEmail",sendEmailController)
export default router