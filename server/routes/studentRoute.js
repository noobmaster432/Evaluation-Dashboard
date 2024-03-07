const router = require('express').Router();
const studentController = require('../controllers/studentController.js');

// Get all students
router.get('/', studentController.getAllStudents);

// Add a new student
router.post('/', studentController.addStudent);

module.exports = router;