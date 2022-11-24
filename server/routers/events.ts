import { router, procedure } from "@app/server/trpc";
import { prisma } from "@app/prisma";
import { z } from "zod";

const list = procedure
  .input(
    z.object({
      limit: z.number().min(1).max(50).nullish(),
      cursor: z.string().nullish()
    })
  )
  .query(async ({ input }) => {
    const limit = input.limit ?? 50;
    const { cursor } = input;

    const events = await prisma.event.findMany({
      take: limit + 1,
      cursor: cursor ? {
        eventId: cursor
      } : undefined,
      orderBy: {
        createdAt: "desc"
      },
      include: {
        createdBy: {
          select: {
            username: true,
            avatar: true
          }
        }
      }
    });

    let nextCursor: typeof cursor | undefined = undefined;

    if (events.length > limit) {
      // remove the last event and use it as next cursor.
      const nextEvent = events.pop();
      nextCursor = nextEvent?.eventId;
    }

    return {
      events: events.reverse(),
      nextCursor
    };
  });

const create = procedure
  .input(
    z.object({
      title: z.string(),
      location: z.string(),
      description: z.string(),
      startTime: z.date(),
      endtime: z.date(),
      level: z.enum(["CLUB", "DIVISON", "DISTRICT", "NATIONAL"])
    })
  )
  .mutation();

export default router({
  list,
  create
});