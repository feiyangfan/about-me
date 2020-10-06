const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});
// AboutSchema.index({ createdAt: 1 }, { expireAfterSeconds: 600 });

module.exports = mongoose.model("About", AboutSchema);
