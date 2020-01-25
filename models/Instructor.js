const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const InstructorSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String
    },
    birthDate: {
      type: Date
    },
    isActive: {
      type: Boolean,
      required: false
    }
  },
  { collection: "instructors" }
);

module.exports = Instructor = mongoose.model("instructors", InstructorSchema);
