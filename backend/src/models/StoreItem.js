const mongoose = require("mongoose");

const storeItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
      enum: ["ME", "EE", "CSE", "Civil Engineering"],
      default: "CSE",
    },
    type: {
      type: String,
      required: true,
      trim: true,
      default: "Notice",
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    updatedBy: {
      type: String,
      required: true,
      trim: true,
      default: "Teacher",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("StoreItem", storeItemSchema);
