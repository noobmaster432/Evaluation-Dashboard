const router = require('express').Router();
const mentorController = require('../controllers/mentorController.js');

// Get all mentors
router.get('/', mentorController.getAllMentors);

// Add a new mentor
router.post('/', mentorController.addMentor);

// Filter students by marks assigned
router.get('/students/assigned', mentorController.getStudentsWithAssignedMarks);

// Filter students by marks not assigned
router.get('/students/unassigned', mentorController.getStudentsWithoutAssignedMarks);

// Assign a student to a mentor
router.post("/assign", mentorController.assignStudentToMentor);

// Unassign a student from a mentor
router.post('/unassign', mentorController.unassignStudentFromMentor);

// Add marks to a student
router.post('/marks/add', mentorController.addMarksToStudent);

// Edit marks of a student
router.put('/marks/edit', mentorController.editMarksOfStudent);

module.exports = router;