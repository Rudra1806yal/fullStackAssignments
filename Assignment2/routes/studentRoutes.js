import express from 'express'
import {createStudent, getStudent, updateStudent, deleteStudent} from '../controller/studentController.js'

const router = express.Router();

router.post("/addStudent", createStudent);      
router.get("/getStudent", getStudent); 
router.put("/updateStudent/:id", updateStudent); 
router.delete("/deleteStudent/:id", deleteStudent); 

export default router
