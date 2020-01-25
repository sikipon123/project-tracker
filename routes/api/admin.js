const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load Admin Login Validation
const validateAdminLoginInput = require("../../validation/adminlogin");

//load admin model
const Admin = require("../../models/Admin");
const Project = require("../../models/Project");
const Instructor = require("../../models/Instructor");
const Student = require("../../models/Student");

// @route   POST api/admin/register
// @desc    register admin
// @access  Public
router.post("/register", (req, res) => {
  const newAdmin = new Admin({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newAdmin.password, salt, (err, hash) => {
      if (err) throw err;
      newAdmin.password = hash;
      newAdmin
        .save()
        .then(admin => res.json(admin))
        .catch(err => console.log(err));
    });
  });
});

// @route   PUT api/admin/update/:_id
// @desc    update admin
// @access  Private
router.put("/update/:_id", (req, res) => {
  const updatedAdmin = new Admin({
    _id: req.params,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(updatedAdmin.password, salt, (err, hash) => {
      if (err) throw err;
      updatedAdmin.password = hash;
      Admin.findOneAndUpdate(
        { _id: updatedAdmin._id },
        {
          $set: {
            username: updatedAdmin.username,
            password: updatedAdmin.password,
            email: updatedAdmin.email
          }
        }
      )
        .then(admin => res.json(admin))
        .catch(err => console.log(err));
    });
  });
});

// @route   POST api/admin/login
// @desc    Login user / Return Token
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateAdminLoginInput(req.body);

  // Check Validation
  if (isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  const password = req.body.password;

  //find admin by username
  Admin.findOne({ username }).then(admin => {
    //check for username
    if (!admin) {
      errors.username = "Username incorrect";
      return res.status(404).json(errors);
    }

    //check password
    bcrypt.compare(password, admin.password).then(isMatch => {
      if (isMatch) {
        // admin matched
        const payload = {
          id: admin.id,
          username: admin.username,
          password: admin.password,
          email: admin.email
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

// @route   POST api/admin/current
// @desc    Return current Admin
// @access  Private
router.get(
  "/account",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("hello");
    const errors = {};
    Admin.findOne({ _id: req.user.id })
      .then(admin => {
        if (!admin) {
          errors.noadmin = "Not authorized";
          return res.status(404).json(errors);
        }
        res.json(admin);
      })
      .catch(err => res.status(404).json(err));
  }
);

/*************Projects API ************/
// @route   POST api/admin/projects
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
// @route   PUT api/admin/projects/:_id
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
        assignmentDate: Date.now(),
        status:"in progress"
      }
    }
  )
    .then(updatedProject => res.json(updatedProject))
    .catch(err => console.log(err));
});

/*************Instructors API ************/
// @route   POST api/admin/instructors
// @desc    Return all instructors
// @access  Private
router.get("/instructors", (req, res) => {
  const errors = {};
  Instructor.find()
    .then(instructor => {
      if (!instructor) {
        errors.noinstructors = "No instructors";
        return res.status(404).json(errors);
      }
      res.json(instructor);
    })
    .catch(err => res.status(404).json(err));
});
// @route   PUT api/admin/instructor/:_id
// @desc    update instructor isActive
// @access  Private
router.put("/instructor/:_id", (req, res) => {
  const updatedInstructor = new Instructor({
    _id: req.params,
    isActive: req.body.isActive
  });
  Instructor.findOneAndUpdate(
    { _id: updatedInstructor._id },
    {
      $set: {
        isActive: updatedInstructor.isActive
      }
    }
  )
    .then(updatedInstructor => res.json(updatedInstructor))
    .catch(err => console.log(err));
});

/*************Students API ************/
// @route   POST api/admin/students
// @desc    Return all students
// @access  Private
router.get("/students", (req, res) => {
  const errors = {};
  Student.find()
    .then(student => {
      if (!student) {
        errors.nostudents = "No instructors";
        return res.status(404).json(errors);
      }
      res.json(student);
    })
    .catch(err => res.status(404).json(err));
});

// @route   PUT api/admin/student/:_id
// @desc    update student isActive
// @access  Private
router.put("/student/:_id", (req, res) => {
  const updatedStudent = new Student({
    _id: req.params,
    isActive: req.body.isActive
  });
  Student.findOneAndUpdate(
    { _id: updatedStudent._id },
    {
      $set: {
        isActive: updatedStudent.isActive
      }
    }
  )
    .then(updatedStudent => res.json(updatedStudent))
    .catch(err => console.log(err));
});

module.exports = router;
