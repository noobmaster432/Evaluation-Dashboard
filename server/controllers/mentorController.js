const Mentor = require("../models/mentorModels.js");
const Student = require("../models/studentModels.js");

// Get all mentors
exports.getAllMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new mentor
exports.addMentor = async (req, res) => {
  const mentor = new Mentor({
    name: req.body.name,
    email: req.body.email,
  });

  try {
    const newMentor = await mentor.save();
    res.status(201).json(newMentor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Assign a student to a mentor
exports.assignStudentToMentor = async (req, res) => {
  const { mentorId, studentId } = req.body;

  try {
    // Check if mentor and student exist
    const mentor = await Mentor.findById(mentorId);
    const student = await Student.findById(studentId);

    if (!mentor || !student) {
      return res.status(404).json({ message: "Mentor or student not found." });
    }

    // Check if the mentor has reached the maximum limit of assigned students
    if (mentor.assignedStudents.length >= 4) {
      return res.status(400).json({ message: "Maximum limit of assigned students reached for this mentor." });
    }

    // Assign the student to the mentor
    student.assignedMentorID = mentorId;
    await student.save();

    // Update mentor's assigned students list
    mentor.assignedStudents.push(studentId);
    await mentor.save();

    res.status(200).json({ message: "Student assigned to mentor successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Unassign a student from a mentor
exports.unassignStudentFromMentor = async (req, res) => {
  const { mentorId, studentId } = req.body;

  try {
    // Check if mentor and student exist
    const mentor = await Mentor.findById(mentorId);
    const student = await Student.findById(studentId);

    if (!mentor || !student) {
      return res.status(404).json({ message: "Mentor or student not found." });
    }

    // Check if the mentor has less than equal to 3 assigned students
    if (mentor.assignedStudents.length <= 3) {
      return res.status(400).json({ message: "The mentor must have at least 3 assigned students." });
    }

    // Remove the student from the mentor's assigned students list
    mentor.assignedStudents = mentor.assignedStudents.filter(id => id.toString() !== studentId);
    await mentor.save();

    // Unassign the student
    student.assignedMentorID = null;
    await student.save();

    res.status(200).json({ message: "Student unassigned from mentor successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Filter students by marks assigned to a specific mentor
exports.getStudentsWithAssignedMarks = async (req, res) => {
  const { mentorId } = req.params;

  try {
    // Check if mentor exists
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found." });
    }

    // Get assigned students of the mentor
    const students = await Student.find({ assignedMentorID: mentorId });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Filter students by marks not assigned
exports.getStudentsWithoutAssignedMarks = async (req, res) => {
  try {
    const students = await Student.find({ assignedMentorID: null });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add marks to a student
exports.addMarksToStudent = async (req, res) => {
  const { studentId, marks } = req.body;

  try {
    // Check if student exists
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }

    // Add marks to the student
    marks.forEach(mark => {
      student.marks.push({
        parameter: mark.parameter,
        score: mark.score
      });
    });

    await student.save();

    res.status(200).json({ message: "Marks added to student successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Edit marks of a student
exports.editMarksOfStudent = async (req, res) => {
  const { studentId, marks } = req.body;

  try {
    // Check if student exists
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }

    // Edit marks of the student
    marks.forEach(newMark => {
      const existingMark = student.marks.find(mark => mark.parameter === newMark.parameter);
      if (existingMark) {
        existingMark.score = newMark.score;
      }
    });

    await student.save();

    res.status(200).json({ message: "Marks edited for student successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};