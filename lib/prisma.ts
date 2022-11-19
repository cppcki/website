import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined
}

const Dates = [
  "updateAt",
  "startTime",
  "endTime"
];

export default function serialize(payload: any) {

  if (payload === undefined) {
    return [];
  }

  return payload.map((data: any) => {
    Dates.forEach((key) => {
      data[key] = data[key]?.getTime();
    });
    return data;
  });
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export {
  serialize,
  prisma
}