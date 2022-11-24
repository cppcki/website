import Image from "next/image";
import { useCallback, useMemo, useRef } from "react";
import { format } from "timeago.js";
import { RouterOutput, trpc } from "@app/utils/trpc";

import Dots from "@app/assets/token/dots.svg";
import Button from "@app/components/Button";
import { useMutation } from "@tanstack/react-query";
import { forwardRef } from "react";

type User = {
  username: string
  avatar: string
}

type EventProps = {
  eventId: string;
  title: string;
  description: string;
  thumbnail: string;
  published: boolean;
  tenants: string[];
  level: string;
  startTime: string;
  endTime: string;
  updatedAt: string;
  createdAt: string;
  createdBy: User;
  location: string;
}

const Event = forwardRef((props: EventProps, ref) => {
  const { 
    title,
    description,
    thumbnail,
    createdBy,
    createdAt,
    tenants,
    startTime,
    endTime,
    location
  } = props;

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

  const payload = async () => {
    const response = await fetch("/api/events", {
      method: "PUT",
    });
  };

  const mutation = useMutation({
    mutationFn: payload
  });

  const handleOnRSVP = useCallback(() => {
    console.log("hi");
  }, []);

  const timeLabel = useMemo(() => {
    const start = new Date(startTime);
    const end = new Date(endTime);

    const isSameDay = start.getDate() === end.getDate() 
      && start.getMonth() === end.getMonth() 
      && start.getFullYear() === end.getFullYear();

    if (isSameDay) {

      const day = start.toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
        weekday: "long",
        month: "long",
        day: "2-digit"
      });

      const startingTime = start.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
      });

      const endingTime = end.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric"
      });

      return (
        <span>
          {day} @ {startingTime} - {endingTime}
        </span>
      );
    } else {

      const startingDay = start.toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
        weekday: "long",
        month: "long",
        day: "2-digit",
      });

      return (
        <div>
          {startingDay}
        </div>
      );
    }
  }, [startTime, endTime]);

  return (
    <div ref={ref} className="sm:w-[500px] border border-gray rounded-lg mx-auto">
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
        <h3>{location}</h3>
        <h1 className="text-xl font-bold">{title}</h1>
        <h2>{timeLabel}</h2>
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
});

Event.displayName = "Event";

function Events() {

  const observer = useRef<IntersectionObserver>(null);
  
  const queryInput = {
    limit: 10
  };

  const eventsQuery = trpc.events.list.useInfiniteQuery(queryInput, {
    getNextPageParam: (lastPage) => lastPage.nextCursor
  });

  const lastItemRef = useCallback(element => {
    if (eventsQuery.isLoading) return;

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting && eventsQuery.hasNextPage) {
        await eventsQuery.fetchNextPage();
      }
    });

    if (element) {
      observer.current.observe(element);
    }

  }, [eventsQuery.isLoading]);

  const events = useMemo(() => {
    const pages = eventsQuery.data?.pages;
    if (!pages) return null;

    const items = [];

    for (const page of pages) {
      const { events } = page;
      items.push(...events);
    }

    return items.map((item: any, index: number) => {
      const itemId = item.eventId;
      if (items.length === index + 1) {
        return (
          <Event ref={lastItemRef} key={itemId} {...item}/>
        );
      }

      return (
        <Event key={itemId} {...item}/>
      );
    });
  }, [eventsQuery.data?.pages]);

  return (
    <div className="flex justify-center gap-y-10 my-10 mx-auto flex-col p-4">
      {events}
    </div>
  );
}

export default Events;
