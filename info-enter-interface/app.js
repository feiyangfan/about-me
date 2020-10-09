const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Project = require("./models/Project");
const About = require("./models/Aboutme");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const connectDB = require("./config/db");
const { ensureAuth, ensureGuest } = require("./middleware/auth");

require("dotenv").config();

const app = express();
const port = process.env.PORT || "8000";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.urlencoded({ extended: false }));

connectDB();

// ==============SETUP SESSION================
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
// ==============DONE================

// ==============SETUP PASSPORT================

require("./config/passport")(passport);

app.use(passport.initialize());
app.use(passport.session());

// ==============DONE================

// Routes
app.get("/", async (req, res) => {
  res.render("login");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/interface",
    failureRedirect: "/",
    failureFlash: true,
  })
);

app.get("/interface", ensureAuth, async (req, res) => {
  const projects = await Project.find();
  const about = await About.find();
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
  await About.deleteMany({});
  res.redirect("/");
});

app.post("/sendPData", async (req, res) => {
  await Project.create({
    name: req.body.pname,
    desc: req.body.pdesc,
    details: req.body.pdetail,
    githubLink: req.body.githubLink,
  });
  res.redirect("/");
});

app.post("/deleteProject", async (req, res) => {
  await Project.deleteOne({ _id: req.body.id });
  res.redirect("/");
});

app.post("/editProject", async (req, res) => {
  // await console.log(req.body);
  const project = await Project.findOne({ _id: req.body.id });
  res.render("edit", { project: project });
});

app.post("/doneEditProject", async (req, res) => {
  const project = await Project.updateOne(
    { _id: req.body.id },
    {
      name: req.body.pname,
      desc: req.body.pdesc,
      details: req.body.pdetail,
      githubLink: req.body.githubLink,
    }
  );
  res.redirect("/");
});

app.post("");

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
