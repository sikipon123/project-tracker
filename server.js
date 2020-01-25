const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const admin = require("./routes/api/admin");
const students = require("./routes/api/students");
const instructors = require("./routes/api/instructors");
const projects = require("./routes/api/projects");
const projectAttachments = require("./routes/api/projectAttachments");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected !"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);
// Use Routes
app.use('/api/admin',admin);
app.use('/api/students',students);
app.use('/api/projects',projects);
app.use('/api/projectAttachments',projectAttachments);
app.use("/api/instructors", instructors);

const port = process.env.PORT || 5432;

app.listen(port, () => console.log("Server running on port: ", port));
