import Image from "next/image";

import Logo from "@/assets/images/cki_logo.png";
import Link from "next/link";

function Header() {
  return (
    <Link href="/" className="flex gap-3">
      <Image className="w-16 h-16" src={Logo} alt="Circle K International Badge"/>
      <div className="my-auto">
        <h1 className="leading-none">Circle K</h1>
        <h2 className="font-medium text-xl leading-none">Cal Poly Pomona</h2>
      </div>
    </Link>
  );
}

export default Header;