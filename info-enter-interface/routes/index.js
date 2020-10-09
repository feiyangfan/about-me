const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", (req, res) => {
  res.render("login");
});

// @desc to dashboard
// only get this when logged in
router.get("/interface", ensureAuth, async (req, res) => {
  // res.render("dashboard", { name: req.user.displayName });
  console.log("index.js redirect after auth");
  res.send(req.user);
});

module.exports = router;
