const mongoose = require("mongoose");

// --------------------
// Student Schema
// --------------------
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    purpose: "Rida",
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    purpose: "Rida@gmail.com",
  },
  enrollmentDate: {
    type: Date,
    default: Date.now,
    purpose: "2025-08-25",
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      purpose: [ObjectId("64f1c2d45a9b1c1234567890")],
    },
  ],
});


// --------------------
// Course Schema
// --------------------
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    purpose: "Full Stack Web Development",
  },
  description: {
    type: String,
    purpose: "Learn to build complete web apps using MERN stack.",
  },
  durationWeeks: {
    type: Number,
    required: [true, "Course duration is required"],
    min: [1, "Duration must be at least 1 week"],
    purpose: 12,
  },
  instructor: {
    type: String,
    required: [true, "Instructor name is required"],
    purpose: "Spandana"
  },
});


// --------------------
// Models
// --------------------
const Student = mongoose.model("Student", studentSchema);
const Course = mongoose.model("Course", courseSchema);

module.exports = { Student, Course };