const axios = require("axios");
require("dotenv").config();

const getResumeMatchScore = async (filePath, jobDescription) => {
  try {
    const response = await axios.post("https://gemini-api-url.com", {
      file: filePath,
      jobDescription: jobDescription,
    }, {
      headers: { Authorization: `Bearer ${process.env.GEMINI_API_KEY}` }
    });

    return response.data.score || 0; // Default to 0 if no score is returned
  } catch (error) {
    console.error("Error calling AI API:", error);
    return 0;
  }
};

module.exports = { getResumeMatchScore };
