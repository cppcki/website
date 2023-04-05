import { getServerSession } from "next-auth/next";
import { options } from "@/pages/api/auth/[...nextauth]";
import { GetServerSidePropsContext, PreviewData } from "next/types";
import { ParsedUrlQuery } from "querystring";

async function getSession(context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) {
  const session = await getServerSession(context.req, context.res, options);

  return session;
}

export default getSession;