import { PrismaClient } from '@prisma/client';
// declare global {
//   var prisma: PrismaClient | undefined;
// }
// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

// let prisma: PrismaClient;

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient();
// } else {
//   // @ts-ignore 7017
//   if (!global.prisma) {
//     // @ts-ignore 7017
//     global.prisma = new PrismaClient();
//   }
//   // @ts-ignore 7017
//   prisma = global.prisma;
// }
// export default prisma;
