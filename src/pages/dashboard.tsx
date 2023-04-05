import Image from "next/image";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

import Head from "@/components/Head";
import Button from "@/components/Button";

import getSession from "@/utils/getServerSession";
import { redirect } from "next/navigation";

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
      <div className="flex flex-col justify-center w-80">
        <Image
          className="rounded-full"
          src={user.image}
          alt={`${user.name} profile`}
          width={100}
          height={100}
        />
        <p>{user.id}</p>
        <p>{user.email}</p>
        <Button variant="outline" onClick={handleOnSignOut}>sign out</Button>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  console.log(session);

  if (!session) {
    redirect("/");
  }

  return {
    props: {
      session
    }
  }
}

export default Dashboard;