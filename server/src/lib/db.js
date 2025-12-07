// import { PrismaClient } from '../generated/prisma/client'

// const globalForPrisma = global
// const prisma = new PrismaClient();

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// export default prisma;


// server/src/lib/db.js
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;

// IMPORTANT: pass PrismaClientOptions with a datasource URL
// const prismaClientSingleton = () =>
//   new PrismaClient({
//     datasourceUrl: process.env.DATABASE_URL,
//   });

const prisma = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL,
})

// const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;