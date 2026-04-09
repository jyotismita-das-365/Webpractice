const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  const payload = req.body;
  const contact = await Contact.create(payload);

  res.status(201).json({
    success: true,
    message: "Message submitted successfully.",
    data: contact,
  });
};

module.exports = { createContact };
