const express = require("express");
const multer = require("multer");
const { uploadResume, getAllResumes } = require("../controllers/resumeController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("resume"), uploadResume);
router.get("/", getAllResumes);

module.exports = router;
