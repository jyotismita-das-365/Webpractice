const getStats = async (req, res) => {
  res.status(200).json({
    students: 1000,
    faculty: 80,
    clubs: 10,
    placements: 50,
  });
};

module.exports = { getStats };
