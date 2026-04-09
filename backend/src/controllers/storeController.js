const StoreItem = require("../models/StoreItem");

const getStoreItems = async (req, res) => {
  const items = await StoreItem.find().sort({ updatedAt: -1 });
  res.status(200).json(items);
};

const createStoreItem = async (req, res) => {
  const item = await StoreItem.create(req.body);
  res.status(201).json(item);
};

const updateStoreItem = async (req, res) => {
  const item = await StoreItem.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!item) {
    res.status(404);
    throw new Error("Store item not found");
  }

  res.status(200).json(item);
};

const deleteStoreItem = async (req, res) => {
  const item = await StoreItem.findById(req.params.id);

  if (!item) {
    res.status(404);
    throw new Error("Store item not found");
  }

  await item.deleteOne();
  res.status(200).json({ success: true, message: "Store item deleted" });
};

module.exports = {
  getStoreItems,
  createStoreItem,
  updateStoreItem,
  deleteStoreItem,
};
