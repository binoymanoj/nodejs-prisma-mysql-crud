import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    // const res = await prisma.user_details.findMany();
    const res = await prisma.user_details.findMany({
      where: {
        age: {
        //   gte: 21,
          gt: 20,
        },
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
