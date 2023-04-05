import { authProcedure, router } from "../trpc";
import prisma from "@/server/prisma";
import { z } from "zod";

const findbyId = authProcedure
  .input(
    z.object({

    })
  ).query(({ input }) => {

  });

const hasOnboarded = authProcedure
  .query(({ input }) => {

  });

const update = authProcedure
  .input(
    z.object({
      firstName: z.string(),
      lastName: z.string(),
      edu: z.string().email(),
      major: z.string(),
      phone: z.string(),
      address: z.string(),
      apt: z.string(),
      city: z.string(),
      zipcode: z.number(),
      dob: z.string().datetime(),
    })
  )
  .mutation(async ({ input, ctx }) => {
    const { 
      firstName, lastName, edu, major, phone, 
      address, apt, city, zipcode, dob
    } = input;

    const user = ctx.session.user;

    const query = await prisma.user.update({
      where: {
        id: user?.id
      },
      data: {
        firstName,
        lastName,
        edu,
        major,
        phone,
        address,
        apt,
        city,
        zipcode,
        dob
      }
    });

    return query;
  });

export default router({
  update
});