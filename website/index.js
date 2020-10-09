const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const About = require("./models/Aboutme");
const Project = require("./models/Project");

require("dotenv").config();

const app = express();
const port = process.env.PORT || "9000";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.urlencoded({ extended: false }));

mongoose.connect(`${process.env.MONGODB_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get("/", async (req, res) => {
  const about = await About.find();
  console.log(about);
  const projects = await Project.find();
  res.render("index", { about: about, projects: projects });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// | My name is Feiyang Fan. I am an third-year computer science specialist studying at
// u
//   a(href="https://www.utoronto.ca/") University of Toronto.
// |  I am interested in web development, desktop development, mobile development, data processing, and machine learning. This is a small website I made about me. Currently, I am working on a
// u
//   a(href="https://github.com/feiyangfan/my-daily-planner"
//     ) web daily planner app
// |  that have many simple but useful features! Anyways, have a nice day!
