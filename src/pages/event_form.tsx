import React, { SyntheticEvent, useCallback, useState } from 'react';

import Head from "@/components/Head";
import Main from "@/components/Main";
import TextInput from "@/components/TextLabel";
import Button from "@/components/Button";
import Navbar from '@/components/Navbar';

type EventItem = {
  title: string,
  location: string,
  thumbnail: string,
  description: string,
  date: string,
  startTime: string,
  endTime: string,
  recurring: boolean,
  sunday: boolean,
  monday: boolean,
  tuesday: boolean,
  wednesday: boolean,
  thursday: boolean,
  friday: boolean,
  saturday: boolean,
  // points: number
};

function RecurringDays(props: any) {
  const { visible, events, handleInput } = props;
  var inputType = "";
  if (visible == true)
    inputType = "checkbox";
  else {
    inputType = "hidden";
  }

  return (
    <div>
      <p hidden={!visible}>Sunday</p>
      <input type={inputType} name="sunday" value={events.sunday} onChange={handleInput} />
      <p hidden={!visible}>Monday</p>
      <input type={inputType} name="monday" value={events.monday} onChange={handleInput} />
      <p hidden={!visible}>Tuesday</p>
      <input type={inputType} name="tuesday" value={events.tuesday} onChange={handleInput} />
      <p hidden={!visible}>Wednesday</p>
      <input type={inputType} name="wednesday" value={events.wednesday} onChange={handleInput} />
      <p hidden={!visible}>Thrusday</p>
      <input type={inputType} name="thursday" value={events.thursday} onChange={handleInput} />
      <p hidden={!visible}>Friday</p>
      <input type={inputType} name="friday" value={events.friday} onChange={handleInput} />
      <p hidden={!visible}>Saturday</p>
      <input type={inputType} name="saturday" value={events.saturday} onChange={handleInput} />
    </div>
  );
}

function EventForm() {
  const [events, setEvent] = useState<EventItem>({
    title: "",
    location: "",
    thumbnail: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    recurring: false,
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    // points: 0
  });

  const handleInput = useCallback((event: SyntheticEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    switch (target.type) {
    case "checkbox":
      setEvent({
        ...events, [target.name]: target.checked
      });
      break;
    default:
      setEvent({
        ...events, [target.name]: target.value
      });
      break;
    }
  }, [events]);

  const handleOnClick = () => {
    console.log(events);
  }

  return (
    <div>
      <Navbar/>
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
      <input
        className="recurringCheck"
        name="recurring"
        onChange={handleInput}
        type="checkbox" />
      <RecurringDays
        visible={events.recurring}
        events={events}
        handleInput={handleInput}
      />
      {/* <TextInput
        name="points"
        label="Points"
        type="number"
        placeholder="Points"
        value={events.points}
        onChange={handleInput}
      /> */}
      <Button variant="outline" disableDebounce onClick={handleOnClick}>Create Event</Button>
    </div>
  );
}

function Event_Form() {
  return (
    <>
      <Head title="Events" />
      <Main>
        <EventForm />
      </Main>
    </>
  );
}

export default Event_Form;