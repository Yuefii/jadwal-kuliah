const { registerUser, loginUser } = require("../services/auth.service");
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;

const handleRegistration = async (req, res) => {
  const { nama_lengkap, jurusan, semesters, npm, password } = req.body;
  try {
    const result = await registerUser(
      nama_lengkap,
      jurusan,
      semesters,
      npm,
      password
    );
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleLogin = async (req, res) => {
  const { npm, password } = req.body;
  try {
    const user = await loginUser(npm, password);
    const expiresIn = 60 * 60 * 1;
    const token = jwt.sign({ npm: user.npm }, secretKey, {
      expiresIn: expiresIn,
    });
    res.json({
      data: {
        npm: user.npm,
        nama_lengkap: user.nama_lengkap,
        jurusan: user.jurusanId,
        semester: user.smtId,
      },
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { handleRegistration, handleLogin };
