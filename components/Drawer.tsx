import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import Logo from "@app/assets/images/cki_logo.png";
import Home from "@app/assets/token/home.svg";
import Leaderboard from "@app/assets/token/leaderboard.svg";
import Pillar from "@app/assets/token/pillar.svg";
import Create from "@app/assets/token/create.svg";
import Layout from "@app/assets/token/layout.svg";
import Logout from "@app/assets/token/logout.svg";

type DrawerItemProps = {
  href: string;
  label: string;
  icon: any;
}

function DrawerItem(props: DrawerItemProps) {
  const { href, label, icon: Icon } = props;
  return (
    <li className="hover:bg-[#cacaca33] rounded-md p-2">
      <Link className="flex" href={href}>
        <Icon width="30" height="30"/>
        <span className="m-auto ml-2 text-lg hidden lg:block">{label}</span>
      </Link>
    </li> 
  );
}

type DrawerProps = {
  setEventFormVisibility?: (value: boolean) => void;
}

function Drawer(props: DrawerProps) {

  const { setEventFormVisibility } = props;
  const { data } = useSession();

  const handleSignOut = async () => {
    signOut({
      callbackUrl: `${window.location.origin}`
    });
  }

  const handleEventFormVisibility = useCallback(() => {
    if (!setEventFormVisibility) return;
    setEventFormVisibility(true);
  }, [setEventFormVisibility]);

  return (
    <nav className="flex justify-between md:block border-r border-gray p-4 lg:p-10 lg:fixed lg:h-screen bg-white">
      <div className="flex w-fit my-auto md:m-auto md:my-5">
        <Image className="w-10 h-10" src={Logo} alt="Circle K International" width="50" height="50"/>
        <h1 className="text-3xl font-bold text-blue mb-10 ml-3 hidden lg:block">Portal</h1>
      </div>
      <ul className="flex md:flex-col gap-y-7 w-fit">
        <DrawerItem label="Home" href="/dashboard" icon={Home}/>
        <DrawerItem label="Leaderboard" href="/leaderboard" icon={Leaderboard}/>
        <DrawerItem label="Family" href="/family" icon={Pillar}/>
        <DrawerItem label="Gallery" href="/gallery" icon={Layout}/>
        {data?.user.role === "ADMIN" &&
          <li className="hover:bg-[#cacaca33] rounded-md p-2">
            <button onClick={handleEventFormVisibility} className="flex">
              <Create width="30" height="30"/>
              <span className="m-auto ml-2 text-lg hidden lg:block">Create</span>
            </button>
          </li> 
        }
        <li className="hover:bg-[#cacaca33] rounded-md p-2">
          <Link className="flex" href="/profile">
            <Image className="rounded-full" src={data!.user.avatar} width="30" height="30" alt={data!.user.username}/>
            <span className="m-auto ml-2 text-lg hidden lg:block">Profile</span>
          </Link>
        </li>
        <li className="hover:bg-[#cacaca33] rounded-md p-2">
          <button onClick={handleSignOut} className="flex">
            <Logout width="30" height="30"/>
            <span className="m-auto ml-2 text-lg hidden lg:block">Logout</span>
          </button>
        </li> 
      </ul>
    </nav>
  );
}

export default Drawer;