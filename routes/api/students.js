const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passportStudent = require("passport");

// Load Admin Login Validation
const validateStudentLoginInput = require("../../validation/studentlogin");

//load student model
// const Admin = require("../../models/Admin");
const Project = require("../../models/Project");
// const Instructor = require("../../models/Instructor");
const Student = require("../../models/Student");

// /*************Students API ************/
// // @route   POST api/admin/students
// // @desc    Return all students
// // @access  Private
router.get("/getStudents", (req, res) => {
  const errors = {};
  Student.find()
    .then(student => {
      if (!student) {
        errors.nostudents = "No students";
        return res.status(404).json(errors);
      }
      res.json(student);
    })
    .catch(err => res.status(404).json(err));
});

// @route   POST api/student/register
// @desc    register student
// @access  Public
router.post("/registerStudent", (req, res) => {
  const newStudent = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    birthDate: req.body.birthDate,
    isActive: req.body.isActive
  });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newStudent.password, salt, (err, hash) => {
      if (err) throw err;
      newStudent.password = hash;
      newStudent
        .save()
        .then(student => res.json(student))
        .catch(err => console.log(err));
    });
  });
});

// @route   PUT api/student/update/:_id
// @desc    update student
// @access  Private
router.put("/updateStudent/:_id", (req, res) => {
  const updatedStudent = {
    _id: req.params,
    username: req.body.username,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email
  };
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(updatedStudent.password, salt, (err, hash) => {
      if (err) throw err;
      updatedStudent.password = hash;
      Student.findOneAndUpdate(
        { _id: updatedStudent._id },
        {
          $set: {
            ...updatedStudent
          }
        }
      )
        .then(student => res.json(student))
        .catch(err => console.log(err));
    });
  });
});

// @route   POST api/student/login
// @desc    Login user / Return Token
// @access  Public
router.post("/login", (req, res) => {
  // const { errors, isValid } = validateStudentLoginInput(req.body);

  // // Check Validation
  // if (isValid) {
  //   return res.status(400).json(errors);
  // }

  const email = req.body.email;
  const password = req.body.password;

  //find admin by username
  Student.findOne({ email }).then(student => {
    //check for username
    if (!student) {
      // errors.email = "email incorrect";
      return res.status(404).json({ email: "Student not found" });
    }

    //     //check password
    bcrypt.compare(password, student.password).then(isMatch => {
      if (isMatch) {
        // student matched
        const payload = {
          id: student.id,
          username: student.username,
          password: student.password,
          email: student.email,
          isActive: student.isActive
        }; // create JWT Payload
        //sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   POST api/student/current
// @desc    Return current Student
// @access  Private
router.get(
  "/account",
  passportStudent.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Student.findOne({ _id: req.user.id })
      .then(student => {
        if (!student) {
          errors.nostudent = "Not authorized";
          return res.status(404).json(errors);
        }
        res.json(student);
      })
      .catch(err => res.status(404).json(err));
  }
);

/*************Projects API ************/
// @route   POST api/student/projects
// @desc    Return all projects
// @access  Private
router.get("/projects", (req, res) => {
  const errors = {};
  Project.find()
    .then(project => {
      if (!project) {
        errors.noprojects = "No projects";
        return res.status(404).json(errors);
      }
      res.json(project);
    })
    .catch(err => res.status(404).json(err));
});
// @route   PUT api/student/projects/:_id
// @desc    assign instructor to project
// @access  Private
router.put("/project/:_id", (req, res) => {
  const updatedProject = new Project({
    _id: req.params,
    idInstructor: req.body.idInstructor
  });
  Project.findOneAndUpdate(
    { _id: updatedProject._id },
    {
      $set: {
        idInstructor: updatedProject.idInstructor,
        assignmentDate: Date.now()
      }
    }
  )
    .then(updatedProject => res.json(updatedProject))
    .catch(err => console.log(err));
});

// /*************Instructors API ************/
// // @route   POST api/student/instructors
// // @desc    Return all instructors
// // @access  Private
// router.get("/instructors", (req, res) => {
//   const errors = {};
//   Instructor.find()
//     .then(instructor => {
//       if (!instructor) {
//         errors.noinstructors = "No instructors";
//         return res.status(404).json(errors);
//       }
//       res.json(instructor);
//     })
//     .catch(err => res.status(404).json(err));
// });
// // @route   PUT api/student/instructor/:_id
// // @desc    update instructor isActive
// // @access  Private
// router.put("/instructor/:_id", (req, res) => {
//   const updatedInstructor = new Instructor({
//     _id: req.params,
//     isActive: req.body.isActive
//   });
//   Instructor.findOneAndUpdate(
//     { _id: updatedInstructor._id },
//     {
//       $set: {
//         isActive: updatedInstructor.isActive
//       }
//     }
//   )
//     .then(updatedInstructor => res.json(updatedInstructor))
//     .catch(err => console.log(err));
// });

// // @route   PUT api/admin/student/:_id
// // @desc    update student isActive
// // @access  Private
// router.put("/student/:_id", (req, res) => {
//   const updatedStudent = new Student({
//     _id: req.params,
//     isActive: req.body.isActive
//   });
//   Student.findOneAndUpdate(
//     { _id: updatedStudent._id },
//     {
//       $set: {
//         isActive: updatedStudent.isActive
//       }
//     }
//   )
//     .then(updatedStudent => res.json(updatedStudent))
//     .catch(err => console.log(err));
// });

module.exports = router;
