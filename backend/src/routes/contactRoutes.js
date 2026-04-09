const express = require("express");
const asyncHandler = require("../middleware/asyncHandler");
const { createContact } = require("../controllers/contactController");

const router = express.Router();

router.post("/", asyncHandler(createContact));

module.exports = router;
