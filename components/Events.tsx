import Image from "next/image";
import { useMemo } from "react";

import Dots from "@app/assets/token/dots.svg";

type User = {
  username: string
  avatar: string
}

type EventProps = {
  eventId: string
  title: string
  description: string
  thumbnail: string
  published: boolean
  tenants: string[]
  level: string
  startTime: string
  endTime: string
  updatedAt: string
  createdBy: User
}

type EventsProps = {
  events: EventProps[],
}

function Event(props: EventProps) {

  const { title, description, thumbnail, createdBy, tenants } = props;

  const tenantList = useMemo(() => {
    return tenants?.map((tenant: string) => {
      return (
        <div
          key={tenant}
          className="bg-blue px-2 py-1 rounded-lg text-white text-xs font-bold">
          {tenant}
        </div>
      );
    });
  }, [tenants]);

  return (
    <div className="w-[500px] border border-gray rounded-lg">
      <div className="flex p-3 justify-between">
        <div className="flex">
          <Image className="w-8 h-8 rounded-full object-cover" src={createdBy.avatar} width="100" height="100" alt={title}/>
          <h1 className="ml-2 my-auto">{createdBy.username}</h1>
        </div>
        <div className="flex">
          <Dots className="my-auto" width="20" height="20"/>
        </div>
      </div>
      <Image className="w-full object-cover" src={thumbnail} width="500" height="500" alt={title}/>
      <div className="p-2 mb-5">
        <div className="flex my-1 gap-x-2">
          {tenantList}
        </div>
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Events(props: EventsProps) {
  const { events: data } = props;

  console.log("@events", data);

  const events = useMemo(() => {
    return data?.map((event: EventProps, index: number) => {
      return (
        <Event key={index} {...event}/>
      );
    });
  }, [data]);

  return (
    <div className="flex gap-y-10 my-10 mx-auto flex-col">
      {events}
    </div>
  );
}

export default Events;
