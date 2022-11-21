import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { prisma, serialize } from "@app/prisma";

import Drawer from "@app/components/Drawer";
import Events from "@app/components/Events";

function Dashboard(props: any) {

  const { events } = props;

  return (
    <div>
      <Head>
        <title>Dashboard - Circle K @ CPP</title>
      </Head>
      <main className="flex">
        <Drawer/>
        <Events events={events}/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context: any) {

  const events = await prisma.event.findMany({
    include: {
      createdBy: {
        select: {
          username: true,
          avatar: true
        }
      }
    }
  });

  return {
    props: {
      events: serialize(events)
    }
  }
}

Dashboard.auth = {
  role: "member",
  loading: <p>dashboard loading...</p>,
  unauthorized: "/login"
}

export default Dashboard;