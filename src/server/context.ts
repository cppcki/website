import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

import { getServerSession } from "next-auth";
import { options } from "@/pages/api/auth/[...nextauth]";

export const createContext = async (opts: trpcNext.CreateNextContextOptions) => {
  const { req, res } = opts;

  const session = await getServerSession(req, res, options);

  return {
    session
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;