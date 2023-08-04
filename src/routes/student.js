import express from "express"
import { detailsStudentController, studentController } from "../controller/studentController.js"
const router =express.Router()
router.get("/details",detailsStudentController)
router.get("/",studentController)
export default router