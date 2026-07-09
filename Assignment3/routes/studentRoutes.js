import express from "express";

import { createStudent,getStudent,updateStudent,deleteStudent} from "../controller/studentController.js";


const router = express.Router();


router.post("/addStudent", createStudent);

router.get("/getStudent", getStudent);

router.put("/updateStudent/:studentId", updateStudent);

router.delete("/deleteStudent/:studentId", deleteStudent);


export default router;