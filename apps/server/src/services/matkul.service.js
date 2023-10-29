const prisma = require('../lib/prisma');

const getMatkul = async () => {
  try {
    const result = await prisma.mata_Kuliah.findMany({
      include: {
        jurusan: {
          select: {
            nama_jurusan: true,
          },
        },
        semester: {
          select: {
            semester: true,
          },
        },
        dosen: {
          select: {
            nama_dosen: true,
          },
        },
      }});
    return result;
  } catch (error) {
    throw new Error('Get data mata kuliah failed');
  }
};

module.exports = { getMatkul };
