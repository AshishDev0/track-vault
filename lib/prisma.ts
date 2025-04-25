// // lib/prisma.ts
// import { PrismaClient } from '@prisma/client';

// declare global {
//   // Extend the global object to include the Prisma Client
//   var prisma: PrismaClient | undefined;
// }

// // Instantiate Prisma Client or use the existing one
// const prisma = global.prisma || new PrismaClient();

// // Assign the Prisma Client to the global object in development
// if (process.env.NODE_ENV !== 'production') {
//   global.prisma = prisma;
// }

// export default prisma;


import { PrismaClient } from "./generated/prisma/client";

// Instantiate Prisma Client or use the existing one
const prisma = new PrismaClient();

export default prisma;
