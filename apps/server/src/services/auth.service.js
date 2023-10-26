const prisma = require('../lib/prisma');
const bcrypt = require('bcrypt');


const registerUser = async (npm, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const result = await prisma.mahasiswa.create({
      data: {
        npm,
        password: hashedPassword,
      },
    });
    return result;
  } catch (error) {
    throw new Error('Registration failed');
  }
};

const loginUser = async (npm, password) => {
  const user = await prisma.mahasiswa.findUnique({
    where: { npm },
  });

  if (!user) {
    throw new Error('User not found');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    return user;
  } else {
    throw new Error('Login failed');
  }
};

module.exports = { registerUser, loginUser };
