const prisma = require("../lib/prisma");

const getJadwal = async (tahun, jurusan, semester, kelas) => {
  try {
    const jadwal = await prisma.jadwal.findMany({
      where: {
        tahun_akademik: {
          some: {
            tahun: tahun,
          },
        },
        jurusan: {
          some: {
            nama_jurusan: jurusan,
          },
        },
        semester: {
          some: {
            semester_ke: semester,
          },
        },
        kelas: kelas,
      },
      select: {
        tahun_akademik: {
          select: { tahun: true, semester: true },
        },
        mata_kuliah: {
          select: { nama_matkul: true, sks: true },
        },
        dosen: {
          select: { nama_dosen: true },
        },
        semester: {
          select: { semester_ke: true },
        },
        jurusan: {
          select: { nama_jurusan: true },
        },
        hari: true,
        kelas: true,
        jam: true,
        ruangan: true,
      },
    });

    const formattedJadwal = jadwal.map((jadwalItem) => {
      const formattedItem = {
        kelas: jadwalItem.kelas,
        mata_kuliah: (jadwalItem.nama_matkul, jadwalItem.sks),
        dosen: jadwalItem.nama_dosen,
        hari: jadwalItem.hari,
        jam: jadwalItem.jam,
        ruangan: jadwalItem.ruangan,
      };

      if (jadwalItem.tahun_akademik) {
        formattedItem.tahun_akademik = jadwalItem.tahun_akademik.map(
          (akademik) => {
            return {
              tahun: akademik.tahun,
              semester: akademik.semester,
            };
          }
        );
      }

      if (jadwalItem.mata_kuliah) {
        formattedItem.mata_kuliah = jadwalItem.mata_kuliah.map(
          (nama_matkul) => {
            return {
              matkul: nama_matkul.nama_matkul,
              sks: nama_matkul.sks,
            };
          }
        );
      }
      if (jadwalItem.dosen) {
        formattedItem.dosen = jadwalItem.dosen.map((dosen) => {
          return {
            nama_dosen: dosen.nama_dosen,
          };
        });
      }

      if (jadwalItem.jurusan) {
        formattedItem.jurusan = jadwalItem.jurusan.map(
          (jurusan) => jurusan.nama_jurusan
        );
      }

      if (jadwalItem.semester) {
        formattedItem.semester = jadwalItem.semester.map(
          (semester) => semester.semester_ke
        );
      }
      return formattedItem;
    });
    console.log(formattedJadwal);
    return formattedJadwal;
  } catch (error) {
    throw error;
  }
};

module.exports = { getJadwal };
