const prisma = require("../lib/prisma");
const bcrypt = require("bcrypt");

const registerUser = async (
  nama_lengkap,
  jurusanNama,
  semesterKe,
  npm,
  password
) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const jurusan = await prisma.jurusan.findUnique({
      where: {
        nama_jurusan: jurusanNama,
      },
    });

    if (!jurusan) {
      throw new Error("Jurusan tidak ditemukan");
    }
    const semesters = await prisma.semester.findUnique({
      where: {
        semester_ke: semesterKe,
      },
    });

    if (!semesters) {
      throw new Error("Jurusan tidak ditemukan");
    }
    const result = await prisma.mahasiswa.create({
      data: {
        nama_lengkap,
        npm,
        password: hashedPassword,
        jurusan: {
          connect: { id: jurusan.id },
        },
        semester: {
          connect: { id: semesters.id },
        },
      },
    });
    console.log(result);
    return result;
  } catch (error) {
    throw new Error("Registration failed" + error.message);
  }
};

const loginUser = async (npm, password) => {
  const user = await prisma.mahasiswa.findUnique({
    where: { npm },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    return user;
  } else {
    throw new Error("Login failed");
  }
};

const profileUser = async (req, res) => {
  const userData = req.userData;

  const user = await prisma.mahasiswa.findUnique({
    where: {
      npm: userData.npm,
    },
    select: {
      npm: true,
      nama_lengkap: true,
      semester: {
        select: {
          semester_ke: true,
        },
      },
      jurusan: {
        select: {
          nama_jurusan: true,
        },
      },
    },
  });

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  return res.json({
    data: {
      npm: user.npm,
      nama_lengkap: user.nama_lengkap,
      semester: user.semester.map((s) => s.semester_ke),
      jurusan: user.jurusan.map((j) => j.nama_jurusan),
    },
  });
};

module.exports = { registerUser, loginUser, profileUser };
