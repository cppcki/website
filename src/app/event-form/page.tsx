//copied from about
'use client'
import TextInput from "@/components/TextLabel";
import React from "react";
import { SyntheticEvent, useCallback, useState } from "react";

function eventForm() {
  type eventItem = {
  title: string,
  location: string,
  thumbnail: string,
  description: string,
  date: string,
  startTime: string,
  endTime: string,
  recurring: boolean,
  points: number
  };

  const [events, setEvent] = React.useState<eventItem>({
    title: "",
    location: "",
    thumbnail: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    recurring: false,
    points: 0
  });

  const handleInput = useCallback((event: SyntheticEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setEvent({
      ...events,
      [target.name]: target.value
    });
  }, [events]);

  function handleClick(event: any){
    console.log(events);
  }
  
  return (
    <div>
      <h1>Add an Event</h1>
      <TextInput
        name="title"
        label="Title"
        type="text"
        placeholder="Title Name Here"
        value={events.title}
        onChange={handleInput}
      />
      <TextInput
        name="location"
        label="Location"
        type="text"
        placeholder="Location "
        value={events.location}
        onChange={handleInput}
      />
      <TextInput
        name="thumbnail"
        label="Thumbnail"
        type="url"
        placeholder="Thumbnail URL"
        value={events.thumbnail}
        onChange={handleInput}
      />
      <TextInput
        name="description"
        label="Description"
        type="text"
        placeholder="Description"
        value={events.description}
        onChange={handleInput}
      />
      <TextInput
        name="date"
        label="Date"
        type="date"
        placeholder="Date"
        value={events.date}
        onChange={handleInput}
      />
      <TextInput
        name="startTime"
        label="Start Time"
        type="time"
        placeholder="Start Time"
        value={events.startTime}
        onChange={handleInput}
      />
      <TextInput
        name="endTime"
        label="End Time"
        type="time"
        placeholder="Date"
        value={events.endTime}
        onChange={handleInput}
      />

      <h2>Recurring?</h2>
      <input className="recurringCheck" name="recurring"  type="checkbox"></input>
      
      <TextInput
        name="points"
        label="Points"
        type="number"
        placeholder="Points"
        value={events.points}
        onChange={handleInput}
      />

      <button onClick={handleClick}>Create Event</button>
    </div>
    
  );
}

export default eventForm;