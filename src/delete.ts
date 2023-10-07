import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    // const res = await prisma.user_details.deleteMany({
    const res = await prisma.user_details.delete({
      where: {
        id: 8
        // age: {
        //   lt: 19,
        // },
      },
    });

    console.log(res);
  } catch (error) {
    console.log(error);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

main();
