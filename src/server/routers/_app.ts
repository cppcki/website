import { router } from "../trpc";

import users from "@/server/routers/users";

export const appRouter = router({
  users
});

export type AppRouter = typeof appRouter;