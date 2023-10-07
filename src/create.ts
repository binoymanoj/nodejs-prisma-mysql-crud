import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    const data = [
      { name: 'Binoy', age: 21, email: 'binoypm2002@gmail.com', phone: '9944626794' },
      { name: 'John doe', age: 20, email: 'slkdfj@gmail.com', phone: '9878927888' },
      { name: 'Vimal', age: 19, email: 'sbflksdfj@gmail.com', phone: '8737488983' },
      { name: 'Abinesh', age: 22, email: 'fbhujn@gmail.com', phone: '8748393344' },
      { name: 'Vijay', age: 17, email: 'rfgfrf@gmail.com', phone: '7654424543' },
      { name: 'Preethi', age: 25, email: 'ertghgr@gmail.com', phone: '8765434564' },
    ];

    // const userData = [{ name: 'David Laid', age: 21, email: 'vghyuhbn@gmail.com', phone: '8767899872' }];
    const userData = [{ name: 'David', age: 21, email: 'bhuijns@gmail.com', phone: '8732899872' }];
    const res = await prisma.user_details.createMany({
      data: userData,
      skipDuplicates: true,
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
