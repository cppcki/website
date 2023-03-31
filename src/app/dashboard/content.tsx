"use client";

import { Session } from "next-auth";
import Image from "next/image";

import { signOut } from "next-auth/react";
import Button from "@/components/Button";

import Logo from "@/assets/images/cki_logo.png";
import Link from "next/link";

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
      <h1><Greeting />{user.name}!</h1>
      <p>@username</p>
      <Button variant="outline" onClick={handleOnSignOut}>sign out</Button>
      <Footer />
    </div>
  );
}
// nav side bar
function Navigation() {
  return (
    <nav> {/* create a button template that allows icon + text to be linked */}
      <a>Dashboard</a>
      <a>Leaderboard</a>
      <a>Family tree</a>
      <a>Gallery</a>
      <a>Profile</a>
      <a>Feedback</a>
      <a>Logout</a>
    </nav>
  );
}

// greets user
function Greeting() {
  const date = new Date();
  const hour = date.getHours();
  let greet;

  if (hour >= 0 && hour < 12) {
    greet = "Good morning, ";
  } else if (hour >= 12 && hour <= 17) {
    greet = "Good afternoon, ";
  } else {
    greet = "Good night, ";
  }

  return (
    <span>{greet}</span>
  );
}

type StatsProps = {
  ranking: number;
  service: number;
  leadership: number;
  fellowship: number;
}
// display personal stats
function Stats(props: StatsProps) {
  const {ranking, service, leadership, fellowship } = props;
  return (
    <div>
      <h1>Your statistics</h1>
        <div>
          <h2>#{ranking}of ranking</h2>
          <h2>{service}hrs of service</h2>
          <h2>{leadership}hrs of leadership</h2>
          <h2>{fellowship}hrs of fellowship</h2>
        </div>
    </div>

  );
}
// display announcements
function Shouts() {
  return (
    <div>
      <h1>Shout</h1>
      <div>
        
      </div>
    </div>
  );
}

// lists all upcoming events
function Events() {
  return (
    <div>
      <h1>Upcoming events</h1>
      <div>

      </div>
    </div>
  );
}

// nav footer
function Footer() {
  // links to home w/ logo, contacts, about us, events, resources, join
  return (
    <div>
      <Link href="/">
        <Image className="w-16 h-16" src={Logo} alt="Circle K International Badge"/>
        <div>
          <h1>Circle K</h1>
          <h2>Cal Poly Pomona</h2>
        </div>
      </Link>
      <div>
        <h3>contact us</h3>
        <nav>
          <a href="media@cppcki.org">media@cppcki.org</a>
          <a href="https://www.instagram.com/cppcki/">cppcki</a>
          <a href="https://www.facebook.com/groups/CPPCKI/?ref=share">cppcki</a>
          <a href="https://www.tiktok.com/@cppcki?is_from_webapp=1&sender_device=pc">cppcki</a>
        </nav>        
      </div>
      <div>
        <nav>
          <a href="/about">about us</a>
          <a href="/events">events</a>
          <a>resources</a>
          <a href="/login">join</a>
        </nav>
      </div>
    </div>
  );
}



export default Content;