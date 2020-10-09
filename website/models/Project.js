const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  details: {
    type: Array,
    required: true,
  },
  github: {
    type: String,
  },
  website: {
    type: String,
  },
});
// ProjectSchema.index({ createdAt: 1 }, { expireAfterSeconds: 600 });

module.exports = mongoose.model("Project", ProjectSchema);
