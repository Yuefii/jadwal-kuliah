const prisma = require("../lib/prisma");

const getJadwalByQuery = async (query) => {
  const {
    tahun_akademik,
    jurusan,
    semester,
    kelas,
    hari,
    mata_kuliah,
    waktu,
    dosen,
    ruangan,
  } = query;

  const jadwal = await prisma.jadwal.findMany({
    where: {
      tahun_akademik: {
        tahun: tahun_akademik,
      },
      jurusan: {
        nama_jurusan: jurusan,
      },
      semester: {
        semester_ke: semester,
      },
      kelas: {
        nama_kelas: kelas,
      },
      hari: {
        nama: hari,
      },
      mata_kuliah: {
        nama: mata_kuliah,
      },
      waktu: {
        nama: waktu,
      },
      dosen: {
        nama: dosen,
      },
      ruangan: {
        nama: ruangan,
      },
    },
    select: {
      tahun_akademik: {
        select: { tahun: true },
      },
      jurusan: {
        select: { nama_jurusan: true },
      },
      semester: {
        select: { semester_ke: true },
      },
      kelas: {
        select: { nama_kelas: true },
      },
      hari: {
        select: { nama_hari: true },
      },
      mata_kuliah: {
        select: { nama_matkul: true },
      },
      waktu: {
        select: { jam: true },
      },
      dosen: {
        select: { nama_dosen: true },
      },
      ruangan: {
        select: { nama_ruangan: true },
      },
    },
  });

  return jadwal;
};

module.exports = { getJadwalByQuery };
