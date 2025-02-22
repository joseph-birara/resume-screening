const Resume = require("../models/resumeModel");
const { getResumeMatchScore } = require("../services/resumeService");

// Upload resume
const uploadResume = async (req, res) => {
  try {
    const { filename, path } = req.file;
    const jobDescription = req.body.jobDescription;

    // Call external API (Google Gemini) to get match score
    const score = await getResumeMatchScore(path, jobDescription);

    const newResume = new Resume({ filename, fileUrl: path, score });
    await newResume.save();

    res.status(201).json({ message: "Resume uploaded successfully", newResume });
  } catch (error) {
    res.status(500).json({ error: "Resume upload failed" });
  }
};

// Get all resumes
const getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find().sort({ uploadedAt: -1 });
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch resumes" });
  }
};

module.exports = { uploadResume, getAllResumes };
