import Image from "next/image";
import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/react";

import Button from "@app/components/Button";

import Logo from "@app/assets/images/cki_logo.png";

import Home from "@app/assets/token/home.svg";
import Leaderboard from "@app/assets/token/leaderboard.svg";
import Pillar from "@app/assets/token/pillar.svg";
import Create from "@app/assets/token/create.svg";

type DrawerItemProps = {
  href: string
  label: string
  icon: any
}

function DrawerItem(props: DrawerItemProps) {
  const { href, label, icon: Icon } = props;
  return (
    <li className="hover:bg-[#cacaca33] rounded-md p-3">
      <Link className="flex" href={href}>
        <Icon width="30" height="30"/>
        <span className="m-auto ml-2 text-lg item">{label}</span>
      </Link>
    </li> 
  );
}

function Drawer() {

  const { data } = useSession();

  const handleSignOut = async () => {
    signOut({
      callbackUrl: `${window.location.origin}`
    });
  }

  return (
    <nav className="border-r border-gray p-10 fixed h-screen bg-white">
      <div className="flex w-fit">
        <Image className="w-10 h-10" src={Logo} alt="Circle K International" width="50" height="50"/>
        <h1 className="text-3xl font-bold text-blue mb-10 ml-3">Portal</h1>
      </div>
      <ul className="flex flex-col gap-y-7 w-fit">
        <DrawerItem label="Home" href="/dashboard" icon={Home}/>
        <DrawerItem label="Leaderboard" href="/leaderboard" icon={Leaderboard}/>
        <DrawerItem label="Family" href="/family" icon={Pillar}/>
        {data?.user.role === "ADMIN" &&
          <li className="hover:bg-[#cacaca33] rounded-md p-3">
            <button className="flex">
              <Create width="30" height="30"/>
              <span className="m-auto ml-2 text-lg">Create</span>
            </button>
          </li> 
        }
        <li className="hover:bg-[#cacaca33] rounded-md p-3">
          <Link className="flex" href="/profile">
            <Image className="rounded-full" src={data!.user.avatar} width="30" height="30" alt={data!.user.username}/>
            <span className="m-auto ml-2 text-lg">Profile</span>
          </Link>
        </li> 
        <li>
          <Button onClick={handleSignOut}>Signout</Button>
        </li>
      </ul>
    </nav>
  );
}

export default Drawer;