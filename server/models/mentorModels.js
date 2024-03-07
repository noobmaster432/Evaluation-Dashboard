const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email already exists"],
  },
  assignedStudents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
}, {
    timestamps: true,
});

module.exports = mongoose.model("Mentor", mentorSchema);