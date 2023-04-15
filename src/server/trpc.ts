import { Context } from "@/server/context";
import { initTRPC, TRPCError } from "@trpc/server";
import SuperJSON from "superjson";

const t = initTRPC.context<Context>();

const trpc = t.create({
  transformer: SuperJSON,
  errorFormatter({ shape }) {
    return shape
  }
});

const isAuth = trpc.middleware(({ next, ctx }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED"
    });
  }

  return next({
    ctx: {
      session: ctx.session
    }
  });
});

export const router = trpc.router;
export const procedure = trpc.procedure;
export const middleware = trpc.middleware;
export const mergeRouters = trpc.mergeRouters;
export const authProcedure = procedure.use(isAuth);