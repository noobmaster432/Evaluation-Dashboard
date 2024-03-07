// controllers/studentController.js
const Student = require("../models/studentModels.js");

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new student
exports.addStudent = async (req, res) => {
  const student = new Student({
    name: req.body.name,
  });

  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
