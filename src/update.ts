import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    // const res = await prisma.user_details.updateMany({
    const res = await prisma.user_details.update({
      where: {
        id: 9
        // age: {
        //   lt: 19,
        // },
      },
      data: {
        // age: 18,
        name: "John",
        phone: "9389828392"
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
