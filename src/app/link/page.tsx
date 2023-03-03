import Content from "@/app/link/content";

import getServerSession from "@/utils/getServerSession";
import prisma from "@/utils/prisma";

async function fetchUser() {

  const session = await getServerSession();
  if (!session?.user?.email) {
    return null;
  }

  const user = prisma.user.findUnique({
    where: {
      email: session?.user?.email
    }
  });

  return user;
}

async function Link() {

  const user = await fetchUser();

  console.log(user);

  return (
    <div>
      <Content/>
    </div>
  );
}

export default Link;