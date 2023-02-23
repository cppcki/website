"use client"

import Image, { StaticImageData } from "next/image";

import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

import useIncrementValue from "@/utils/hooks/useIncrementValue";

import ServiceTenantImage from "@/assets/images/tenants/service.png";
import LeadershipTenantImage from "@/assets/images/tenants/leadership.png";
import FellowshipTenantImage from "@/assets/images/tenants/fellowship.png";

function Hero() {
  return (
    <div className="mt-10 flex justify-center flex-col">
      <div className="my-6">
        <h3 className="text-center lg:text-6xl md:text-5xl text-4xl font-black capitalize">we love service</h3>
        <h1 className="text-center lg:text-8xl md:text-7xl text-5xl font-black capitalize">so matcha! 🍵</h1>
      </div>
      <p className="text-xl max-w-2xl text-center mx-auto">
        Become part of one of the largest collegiate community service, leadership development, and friendship organization in the world.
      </p>
      <div className="flex justify-center gap-x-10 my-10">
        <Button variant="fill" href="/login" className="first-letter:capitalize">join us</Button>
        <Button variant="outline" className="first-letter:capitalize">explore events</Button>
      </div>
    </div>
  );
}

type TenantItemProps = {
  title: string;
  value: number;
  thumbnail: StaticImageData;
  description: string;
}

function TenantItem(props: TenantItemProps) {
  const { title, value, thumbnail, description } = props;

  const hours = useIncrementValue(value);

  return (
    <div className="flex flex-col max-w-xs">
      <Image
        draggable={false}
        className="aspect-square object-contain"
        width={100}
        height={100}
        src={thumbnail}
        alt={`${title}_tenant`}
      />
      <h1 className="font-black text-5xl">
        {hours}+
      </h1>
      <h2 className="text-2xl font-normal first-letter:capitalize">{title} hours</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
}

function Tenants() {
  return (
    <div className="flex gap-x-2 justify-around my-10 flex-wrap">
      <TenantItem
        title="service"
        thumbnail={ServiceTenantImage}
        value={273}
        description="Make a difference within college, university campuses, and communities through acts of service."
      />
      <TenantItem
        title="leadership"
        thumbnail={LeadershipTenantImage}
        description="Opportunities and chances for developing one's character and skills."
        value={609}
      />
      <TenantItem
        title="fellowship"
        thumbnail={FellowshipTenantImage}
        description="Create a sense of community within the club and enable members to have tight-knit bonds with one another."
        value={325}
      />
    </div>
  );
}

type EventItemProps = {
  title: string;
  description: string;
}

function EventItem(props: EventItemProps) {
  const { title, description } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function Events() {
  return (
    <div className="mt-20">
      <div className="mb-10">
        <h1 className="font-extrabold text-center text-5xl first-letter:capitalize">upcoming events</h1>
        <p className="text-center text-xl my-3">Like what you&apos;re seeing? Come on out and hang with us!</p>
      </div>
      <div>
        <EventItem
          title="CKI goes Ice Skating"
          description="admada djas dadasdasdj asdjasdsfs dfsfsfs fs fsf sf sfsffd."
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="max-w-7xl m-auto px-8">
      <Navbar/>
      <Hero/>
      <Tenants/>
    </main>
  );
}