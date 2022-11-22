import Image from "next/image";
import { useCallback, useMemo } from "react";
import { format }  from "timeago.js";

import Dots from "@app/assets/token/dots.svg";
import Button from "@app/components/Button";

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
  createdAt: string
  createdBy: User
  location: string
}

type EventsProps = {
  events: EventProps[],
}

function Event(props: EventProps) {

  const { title, description, thumbnail, createdBy, createdAt, tenants } = props;

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

  const createdLabel = useMemo(() => {
    const time = new Date(createdAt);
    return format(time, "en_US");
  }, [createdAt]);

  const handleOnRSVP = useCallback(() => {
    console.log("hi");
  }, []);

  const timeLabel = useMemo(() => {
    return (
      <div>
        time
      </div>
    );
  }, []);

  return (
    <div className="sm:w-[500px] border border-gray rounded-lg mx-auto">
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
      <div className="p-2">
        <div className="flex my-1 gap-x-2">
          {tenantList}
        </div>
        <h1 className="text-xl font-bold">{title}</h1>
        <h2>{}</h2>
        <p>{description}</p>
        <div className="flex py-2">
          <Button className="mt-4 w-full" onClick={handleOnRSVP}>RVSP</Button>
          <div>
          </div>
        </div>
        <span className="text-gray text-sm">{createdLabel}</span>
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
    <div className="flex justify-center gap-y-10 my-10 mx-auto flex-col p-4">
      {events}
    </div>
  );
}

export default Events;
