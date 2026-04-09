const express = require("express");
const asyncHandler = require("../middleware/asyncHandler");
const { createInquiry } = require("../controllers/inquiryController");

const router = express.Router();

router.post("/", asyncHandler(createInquiry));

module.exports = router;
