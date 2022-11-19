import Link from "next/link";

import Header from "@app/components/Header";

function Navbar() {
  return (
    <nav className="flex justify-between mx-10 my-5 align-middle">
      <Header/>
      <ul className="flex gap-5 my-auto">
        <li>
          <Link href="/resources">Resources</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;