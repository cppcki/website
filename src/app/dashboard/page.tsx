import { redirect } from "next/navigation";

import Content from "@/app/dashboard/content";
import getSession from "@/utils/getServerSession";

async function Dashboard() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }
  
  return (
    <div>
      <Content session={session}/>
    </div>
  );
}

export default Dashboard;