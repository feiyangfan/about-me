const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
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
  const projects = await Project.find();
  res.render("index", { projects: projects });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
