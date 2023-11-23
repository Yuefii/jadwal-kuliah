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
    include: {
      jurusan: {
        select: { nama_jurusan: true },
      },
      semester: {
        select: { semester_ke: true },
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
      semester: user.semester,
      jurusan: user.jurusan,
      avatar: user.avatar,
    },
  });
};

const updateProfile = async (npm, newData) => {
  try {
    const { nama_lengkap, jurusanNama, semesterKe } = newData;

    const user = await prisma.mahasiswa.findUnique({
      where: {
        npm,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const updatedUserData = {};

    if (nama_lengkap) {
      updatedUserData.nama_lengkap = nama_lengkap;
    }

    if (jurusanNama) {
      const jurusan = await prisma.jurusan.findUnique({
        where: {
          nama_jurusan: jurusanNama,
        },
      });

      if (!jurusan) {
        throw new Error("Jurusan tidak ditemukan");
      }

      updatedUserData.jurusan = {
        connect: { id: jurusan.id },
      };
    }

    if (semesterKe) {
      const semesters = await prisma.semester.findUnique({
        where: {
          semester_ke: semesterKe,
        },
      });

      if (!semesters) {
        throw new Error("Semester tidak ditemukan");
      }

      updatedUserData.semester = {
        connect: { id: semesters.id },
      };
    }

    const updatedUser = await prisma.mahasiswa.update({
      where: {
        npm,
      },
      data: updatedUserData,
    });

    return updatedUser;
  } catch (error) {
    throw new Error("Update failed: " + error.message);
  }
};

const uploadAvatar = async (req, res) => {
  const userData = req.userData;

  if (!req.files || !req.files.avatar) {
    return res.status(400).json({
      message: "No file uploaded",
    });
  }

  const avatarFile = req.files.avatar;

  try {
    const avatarFileName = `${Date.now()}_${avatarFile.name}`;

    avatarFile.mv(`public/${avatarFileName}`, async (err) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to upload avatar",
          error: err.message,
        });
      }

      try {
        const updatedUser = await prisma.mahasiswa.update({
          where: { npm: userData.npm },
          data: { avatar: avatarFileName },
        });

        return res.json({
          message: "Avatar uploaded successfully",
          user: updatedUser,
        });
      } catch (error) {
        return res.status(500).json({
          message: "Failed to update user with avatar",
          error: error.message,
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to handle avatar upload",
      error: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  profileUser,
  updateProfile,
  uploadAvatar,
};
