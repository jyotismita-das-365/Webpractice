const express = require("express");
const cors = require("cors");

const eventRoutes = require("./routes/eventRoutes");
const contactRoutes = require("./routes/contactRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");
const studentQueryRoutes = require("./routes/studentQueryRoutes");
const statsRoutes = require("./routes/statsRoutes");
const storeRoutes = require("./routes/storeRoutes");
const authRoutes = require("./routes/authRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true, message: "API is running" });
});

app.use("/api/events", eventRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/student-queries", studentQueryRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/store", storeRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
