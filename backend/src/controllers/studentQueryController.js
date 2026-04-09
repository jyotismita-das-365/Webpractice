const StudentQuery = require("../models/StudentQuery");

const createStudentQuery = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    res.status(400);
    throw new Error("Please provide name, email, subject and message");
  }

  const query = await StudentQuery.create({
    user: req.user._id,
    name,
    email,
    subject,
    message,
  });

  res.status(201).json({
    success: true,
    message: "Student query submitted successfully.",
    data: query,
  });
};

module.exports = { createStudentQuery };
