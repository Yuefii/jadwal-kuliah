const { getJadwalByQuery } = require("../services/jadwal.service");

const jadwalController = async (req, res) => {
  try {
    const jadwal = await getJadwalByQuery(req.query);
    res.json(jadwal);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Terjadi kesalahan saat mengambil data Jadwal." });
  }
};

module.exports = { jadwalController };
