
import Button from "@app/components/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { prisma, serialize } from "@app/prisma";

function Dashboard() {

  const { data, status } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    signOut({
      callbackUrl: `${window.location.origin}`
    });
  }

  console.log(data);

  return (
    <div>
      <div>
        <code>
          {JSON.stringify(data)}
        </code>
      </div>
      <Button onClick={handleSignOut}>Signout</Button>
    </div>
  );
}

export async function getServerSideProps(context: any) {

  // console.log(context);
  // const user = await prisma.user.findUnique();
  
  // console.log(user);

  return {
    props: {
    }
  }
}

export default Dashboard;