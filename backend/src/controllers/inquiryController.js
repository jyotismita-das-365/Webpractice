const StudentInquiry = require("../models/StudentInquiry");

const createInquiry = async (req, res) => {
  const inquiry = await StudentInquiry.create(req.body);

  res.status(201).json({
    success: true,
    message: "Application submitted successfully.",
    data: inquiry,
  });
};

module.exports = { createInquiry };
