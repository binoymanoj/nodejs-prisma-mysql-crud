import { PrismaClient } from "@prisma/client/edge";
const prisma = new PrismaClient();

async function main() {
  const users = prisma.user_details.findMany();
  console.log(users);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
