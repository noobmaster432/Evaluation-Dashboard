const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  assignedMentorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mentor",
    default: null,
  },
  marks: [
    {
      parameter: { type: String, required: true },
      score: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("Student", studentSchema);
