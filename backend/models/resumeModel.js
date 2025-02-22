const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  fileUrl: { type: String, required: true },
  score: { type: Number, default: null },
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Resume", ResumeSchema);