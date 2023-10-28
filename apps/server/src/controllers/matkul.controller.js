const { getMatkul } = require('../services/matkul.service');

const getAllMatkul = async (req, res) => {
  const { nama_matkul } = req.body;
  try {
    const result = await getMatkul(nama_matkul);
    res.json({
      data : result
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllMatkul };
