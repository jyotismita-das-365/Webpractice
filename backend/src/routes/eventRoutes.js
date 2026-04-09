const express = require("express");
const asyncHandler = require("../middleware/asyncHandler");
const { getEvents, createEvent } = require("../controllers/eventController");

const router = express.Router();

router.route("/").get(asyncHandler(getEvents)).post(asyncHandler(createEvent));

module.exports = router;
