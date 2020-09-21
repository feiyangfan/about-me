const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Project = require("./models/Project");

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
  // console.log(projects);
  res.render("index", { projects: projects });
});

app.post("/sendData", async (req, res) => {
  // await console.log(req.body);
  await Project.create({
    name: req.body.name,
    desc: req.body.desc,
    details: req.body.detail,
  });
  res.redirect("/");
});

app.post("/deleteProject", async (req, res) => {
  // await console.log(req.body);
  await Project.deleteOne({ _id: req.body.id });
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
