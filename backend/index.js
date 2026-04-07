const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB, saveContactDetails } = require("./db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
  }),
);
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({ message: "API is running" });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, phone, description } = req.body;

    if (!name || !phone || !description) {
      return res.status(400).json({
        success: false,
        message: "Name, phone, and query are required",
      });
    }

    await saveContactDetails({ name, phone, description });

    return res.status(201).json({
      success: true,
      message: "Contact details saved successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to save contact details",
    });
  }
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
