"use client";

import Image, { StaticImageData } from "next/image";

type EventCardProps = {
    title: string;
    details: string;
    thumbnail: StaticImageData;
    tags: string;
    date:string;
    time: string;
    location: string;
}

function EventCard(props: EventCardProps) {
  const { title, details, thumbnail, date, time, location,} = props;

  return (
    <div className="flex-col flex border-solid border-2 border-gray-300 rounded-lg w-72 min-w-0 min-h-fit bg-white text-left p-0 m-0 min-blend-normal">
      <Image className="overflow-hidden rounded-t-lg h-72 w-72 min-h-0"
        src={thumbnail}
        alt="Alt image"
      />
      <div className="w-full p-2.5">
        <div className="capitalize text-gray-600 text-sm font-medium">📅 {date} @ {time}</div>
        <h2 className="capitalize text-blue-600	text-2xl font-bold mb-2">{title}</h2>
        <p className="capitalize text-sm text-gray-600 font-medium">{location}</p>
        <p className="text-sm capitalize font-medium">{details}</p>
      </div>
    </div>
  );
}

export default EventCard;


