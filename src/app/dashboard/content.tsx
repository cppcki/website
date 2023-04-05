"use client";

import { Session } from "next-auth";
import Image from "next/image";

import { signOut } from "next-auth/react";
import Button from "@/components/Button";

type ContentProps = {
  session: Session
}

function Content(props: ContentProps) {
  const { session } = props;
  const user = session.user;

  if (!user) {
    throw new Error("Failed to get user information from server");
  }

  if (!user.image) {
    throw new Error("Failed to load user's profile picture");
  }

  const handleOnSignOut = () => {
    signOut({
      callbackUrl: "/"
    });
  }

  return (
    <div className="flex flex-col justify-center w-80">
      <Image
        className="rounded-full"
        src={user.image}
        alt={`${user.name} profile`}
        width={100}
        height={100}
      />
      <h1>hi {user.name}</h1>
      <p>{user.email}</p>
      <Button variant="outline" onClick={handleOnSignOut}>sign out</Button>
      <Button variant="outline" href="/event-form">Create event</Button>
    </div>
  );
}

export default Content;