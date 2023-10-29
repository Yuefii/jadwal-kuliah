const { getMatkul } = require('../services/matkul.service');

const getAllMatkul = async (req, res) => {
  try {
    const result = await getMatkul();
    res.json({
      data : result
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllMatkul };
