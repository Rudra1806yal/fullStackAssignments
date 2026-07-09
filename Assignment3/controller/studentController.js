import Student from "../model/studentModel.js";

// Get all students
const getStudent = async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json({
            success: true,
            message: "Data fetched successfully",
            data: students
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to get data",
            error: error.message
        });
    }
};


// Create student
const createStudent = async (req, res) => {
    try {

        const { name, age, gender } = req.body;

        if (!name || !age || !gender) {
            return res.status(400).json({
                success: false,
                message: "Name, age and gender are required"
            });
        }


        const newStudent = await Student.create({
            name,
            age,
            gender
        });


        res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: newStudent
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to create student",
            error: error.message
        });

    }
};


// Update student
const updateStudent = async (req, res) => {
    try {

        const { studentId } = req.params;

        const updatedStudent = await Student.findByIdAndUpdate(
            studentId,
            req.body,
            { new: true }
        );


        if (!updatedStudent) {
            return res.status(404).json({
                success:false,
                message:"Student not found"
            });
        }


        res.status(200).json({
            success:true,
            message:"Student updated successfully",
            data:updatedStudent
        });


    } catch(error){

        res.status(500).json({
            success:false,
            message:"Failed to update student",
            error:error.message
        });

    }
};


// Delete student
const deleteStudent = async(req,res)=>{
    try{

        const {studentId}=req.params;


        const deletedStudent = await Student.findByIdAndDelete(studentId);


        if(!deletedStudent){
            return res.status(404).json({
                success:false,
                message:"Student not found"
            });
        }


        res.status(200).json({
            success:true,
            message:"Student deleted successfully"
        });


    }catch(error){

        res.status(500).json({
            success:false,
            message:"Failed to delete student",
            error:error.message
        });

    }
};


export {createStudent,getStudent,updateStudent,deleteStudent};