import { useState } from "react";
import Head from "next/head";

import { prisma, serialize } from "@app/prisma";

import Drawer from "@app/components/Drawer";
import Events from "@app/components/Events";
import EventForm from "@app/components/EventForm";
import Modal from "@app/components/Modal";
import { trpc } from "@app/utils/trpc";
import { useMemo } from "react";
import { useEffect } from "react";

function Dashboard() {

  const [eventFormOpen, setEventFormOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Dashboard - Circle K @ CPP</title>
      </Head>
      <main className="md:flex">
        <Drawer setEventFormVisibility={setEventFormOpen}/>
        <Events/>
        <Modal
          isOpen={eventFormOpen}
          onClose={() => setEventFormOpen(false)}>
          <EventForm/>
        </Modal>
      </main>
    </div>
  );
}

Dashboard.auth = {
  role: "member",
  loading: <p>dashboard loading...</p>,
  unauthorized: "/login"
};

export default Dashboard;