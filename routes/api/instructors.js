const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passportInstructor = require("passport");

// Load Instructor Model (Schema)
const Instructor = require("../../models/Instructor");

// get instructors
router.get("/getInstructors", (req, res) => {
  Instructor.find()
    .then(instructors => res.json(instructors))
    .catch(err => res.send("cannot get"));
});

// Instructor Resigtration
router.post("/registerinstructor", (req, res) => {
  const newInstructor = new Instructor({
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
    bcrypt.hash(newInstructor.password, salt, (err, hash) => {
      if (err) throw err;
      newInstructor.password = hash;
      newInstructor
        .save()
        .then(instructors => res.json(instructors))
        .catch(err => console.log(err));
    });
  });
});

// Login Instructor / Returning JWT Token
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find Instructor by email
  Instructor.findOne({ email: email }).then(instructor => {
    // check for Instructor
    if (!instructor) {
      return res.status(404).json({ email: "Instructor not found" });
    }

    //Check the Password
    bcrypt.compare(password, instructor.password).then(isMatch => {
      if (isMatch) {
        // User Matched

        // JWT Payload
        const payload = {
          id: instructor.id,
          firstName: instructor.firstName,
          lastName: instructor.lastName,
          email: instructor.email,
          isActive: instructor.isActive
        };

        // Sign Token
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
        return res.status(400).json({ password: "Paswword Incorrect" });
      }
    });
  });
});

// Return current Instructor
router.get(
  "/current",
  passportInstructor.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Instructor.findOne({ _id: req.user.id })
      .then(instructor => {
        if (!instructor) {
          errors.noinstructor = "Not authorized";
          return res.status(404).json(errors);
        }
        res.json(instructor);
      })
      .catch(err => res.status(404).json(err));
    console.log("_id: req.user.id", _id);
  }
);

router.get("/getoneinstructor/:_id", (req, res) => {
  const { _id } = req.params;
  Instructor.findOne({ _id })
    .then(instructor => res.json(instructor))
    .catch(err => res.send("error"));
});
router.get("/getonestudent/:_id", (req, res) => {
  const { _id } = req.params;
  Student.findOne({ _id })
    .then(student => res.json(student))
    .catch(err => res.send("error"));
});

router.get("/getProjects/:idInstructor", (req, res) => {
  const { idInstructor } = req.params;
  Project.find({ idInstructor })
    .then(project => res.json(project))
    .catch(err => res.send("error"));
});

// validate project
router.put("/updateProject/:_id", (req, res) => {
  const { _id } = req.params;
  const modifiedField = req.body;
  Project.findOneAndUpdate({ _id }, { $set: { ...modifiedField } })
    .then(project => res.json(project))
    .catch(err => res.send("error"));
});

module.exports = router;
