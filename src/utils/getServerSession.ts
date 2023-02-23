import { getServerSession } from "next-auth/next";
import { options } from "@/pages/api/auth/[...nextauth]";

async function getSession() {
  const session = await getServerSession(options);

  return session;
}

export default getSession;