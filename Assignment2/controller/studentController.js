import students from "../model/studentModel.js";

// Get all students
const getStudent = (req, res) => {
    try {
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

// Create a new student
const createStudent = (req, res) => {
    try {
        const { name, age, gender } = req.body;

        if (!name || !age || !gender) {
            return res.status(400).json({
                success: false,
                message: "Name, age and gender are required"
            });
        }

        const newStudent = {
            id: students.length ? students[students.length - 1].id + 1 : 1,
            name,
            age,
            gender
        };

        students.push(newStudent);

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
const updateStudent = (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const student = students.find((value) => value.id === id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        const { name, age, gender } = req.body;

        if (name) student.name = name;
        if (age) student.age = age;
        if (gender) student.gender = gender;

        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: student
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update student",
            error: error.message
        });
    }
};

// Delete student
const deleteStudent = (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const index = students.findIndex((value) => value.id === id);

        if (index === -1) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        students.splice(index, 1);

        res.status(200).json({
            success: true,
            message: "Student deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete student",
            error: error.message
        });
    }
};

export {getStudent,createStudent,updateStudent,deleteStudent};