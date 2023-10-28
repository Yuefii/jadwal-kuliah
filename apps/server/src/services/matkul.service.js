const prisma = require('../lib/prisma');

const getMatkul = async () => {
  try {
    const result = await prisma.mata_Kuliah.findMany();
    return result;
  } catch (error) {
    throw new Error('Get data mata kuliah failed');
  }
};

module.exports = { getMatkul };
