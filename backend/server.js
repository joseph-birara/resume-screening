require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Connect Database
connectDB();

app.use("/api/resumes", resumeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
