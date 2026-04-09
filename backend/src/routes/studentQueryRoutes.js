const express = require("express");
const asyncHandler = require("../middleware/asyncHandler");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");
const { createStudentQuery } = require("../controllers/studentQueryController");

const router = express.Router();

router.post(
  "/",
  protect,
  authorizeRoles("student"),
  asyncHandler(createStudentQuery),
);

module.exports = router;
