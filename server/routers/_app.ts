import { z } from 'zod';
import { procedure, router } from '../trpc';
import { prisma } from "@app/prisma";

import eventRouter from '@app/server/routers/events';

export const appRouter = router({
  events: eventRouter
});

export type AppRouter = typeof appRouter;