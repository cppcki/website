import Link from "next/link";

import Header from "@app/components/Header";
import { useSession } from "next-auth/react";
import { useMemo } from "react";

function Navbar() {

  const { status } = useSession();

  const authButton = useMemo(() => {
    if (status === "authenticated") {
      return (
        <Link href="/dashboard">dashboard</Link>
      );
    }

    return (
      <Link href="/login">login</Link>
    );
  }, [status]);

  return (
    <nav className="flex justify-between mx-10 my-5 align-middle">
      <Header/>
      <ul className="flex gap-5 my-auto">
        <li>
          <Link href="/resources">resources</Link>
        </li>
        <li>
          {authButton}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;