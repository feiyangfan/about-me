const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Project = require("./models/Project");
const About = require("./models/Aboutme");

require("dotenv").config();

const app = express();
const port = process.env.PORT || "8000";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.urlencoded({ extended: false }));

mongoose.connect(`${process.env.MONGODB_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Routes
app.get("/", async (req, res) => {
  const projects = await Project.find();
  const about = await About.find();
  // console.log(projects);
  res.render("index", { projects: projects, about: about });
});

app.post("/sendAData", async (req, res) => {
  // await console.log(req.body);
  await About.create({
    content: req.body.content,
  });
  res.redirect("/");
});

app.post("/deleteAbout", async (req, res) => {
  // await console.log(req.body);
  await About.deleteMany({});
  res.redirect("/");
});

app.post("/sendPData", async (req, res) => {
  // await console.log(req.body);
  await Project.create({
    name: req.body.pname,
    desc: req.body.pdesc,
    details: req.body.pdetail,
    githubLink: req.body.githubLink,
  });
  res.redirect("/");
});

app.post("/deleteProject", async (req, res) => {
  // await console.log(req.body);
  await Project.deleteOne({ _id: req.body.id });
  res.redirect("/");
});

app.post("/editProject", async (req, res) => {
  // await console.log(req.body);
  const project = await Project.findOne({ _id: req.body.id });
  console.log(project);
  res.render("edit", { project: project });
});

app.post("");

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
