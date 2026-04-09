const express = require("express");
const asyncHandler = require("../middleware/asyncHandler");
const { getStats } = require("../controllers/statsController");

const router = express.Router();

router.get("/", asyncHandler(getStats));

module.exports = router;
