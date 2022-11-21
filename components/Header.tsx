import Image from "next/image";

import Logo from "@app/assets/images/cki_logo.png";
import Link from "next/link";

function Header() {
  return (
    <Link href="/" className="flex gap-3">
      <Image className="w-16 h-16" src={Logo} alt="Circle K International Badge"/>
      <div className="my-auto">
        <h1 className="text-gold font-bold">Circle K</h1>
        <h2 className="text-blue font-medium leading-none">Cal Poly Pomona</h2>
      </div>
    </Link>
  );
}

export default Header;