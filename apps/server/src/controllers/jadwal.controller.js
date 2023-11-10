const { getJadwal } = require("../services/jadwal.service");

const getJadwalByParams = async (req, res) => {
  const { tahun, jurusan, semester, kelas } = req.params;
  try {
    const jadwal = await getJadwal(tahun, jurusan, semester, kelas);
    res.json(jadwal);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getJadwalByParams };
