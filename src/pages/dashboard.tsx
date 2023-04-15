import Image from "next/image";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

import Head from "@/components/Head";
import Button from "@/components/Button";

import getSession from "@/utils/getServerSession";
import prisma from "@/server/prisma";

import type { GetServerSidePropsContext } from "next";

type ContentProps = {
  session: Session
}

function Dashboard(props: ContentProps) {
  const { session } = props;
  const user = session.user;

  if (!user) {
    throw new Error("Failed to load user's payload");
  }

  if (!user.image) {
    throw new Error("Failed to load user's profile picture");
  }

  const handleOnSignOut = () => {
    signOut({
      callbackUrl: "/"
    });
  }

  return (
    <>
      <Head title="Dashboard"/>
      <main className="flex flex-col justify-center w-80">
        <Image
          className="rounded-full"
          src={user.image}
          alt={`${user.name} profile`}
          width={100}
          height={100}
        />
        <p>{user.id}</p>
        <p>{user.email}</p>
        <Button variant="outline" href="/event-form">Create event</Button>
        <Button variant="outline" onClick={handleOnSignOut}>sign out</Button>
      </main>
    </>
  );
}

async function isUserOnboarded(id: string) {

  // If user doesn't complete their onboarding, route them to onboarding.
  const user = await prisma.user.findUnique({
    where: {
      id
    }
  });

  return user?.firstName !== null 
    || user.lastName !== null 
    || user.dob !== null
    || user.major !== null 
    || user.edu !== null;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  // If user isn't logged in, send them to the login page.
  const user = session?.user;
  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }

  const hasOnboarded = await isUserOnboarded(user.id);

  if (!hasOnboarded) {
    return {
      redirect: {
        destination: "/onboarding",
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}

export default Dashboard;