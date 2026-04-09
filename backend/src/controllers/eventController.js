const Event = require("../models/Event");

const getEvents = async (req, res) => {
  const events = await Event.find().sort({ createdAt: -1 });
  res.status(200).json(events);
};

const createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.status(201).json(event);
};

module.exports = {
  getEvents,
  createEvent,
};
