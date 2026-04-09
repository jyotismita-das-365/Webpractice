const express = require("express");
const asyncHandler = require("../middleware/asyncHandler");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");
const {
  getStoreItems,
  createStoreItem,
  updateStoreItem,
  deleteStoreItem,
} = require("../controllers/storeController");

const router = express.Router();

router
  .route("/")
  .get(protect, asyncHandler(getStoreItems))
  .post(protect, authorizeRoles("teacher"), asyncHandler(createStoreItem));
router
  .route("/:id")
  .put(protect, authorizeRoles("teacher"), asyncHandler(updateStoreItem))
  .delete(protect, authorizeRoles("teacher"), asyncHandler(deleteStoreItem));

module.exports = router;
