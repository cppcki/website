"use client";

import type * as CSS from "csstype";
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
    const { title, details, thumbnail, tags, date, time, location} = props;

    return (
        <div style={Container}>
            <Image style={testImage}
                src={thumbnail}
                alt="boi i wish"
                width={250}
                height={300} 
            />
            <div style={Content}>
                <p>{tags}</p>
                <p>{date} {time}</p>
                <h2 style={CardTitle}>{title}</h2>
                <p>{location}</p>
                <p style={CardDetail}>{details}</p>
            </div>
        </div>
    );
}

export default EventCard;

const Container: CSS.Properties = {
    flexWrap: 'wrap',
    display: 'flex',
    border: 'solid 1px gray',
    borderRadius: '10px',
    width: '300px'
};

const Content: CSS.Properties = {
    width: '100%',
    padding: '10px'
};

const CardDetail: CSS.Properties = {
    marginBlockEnd: '10px',
    marginBlockStart: '10px',
    textTransform: "capitalize"
};

const CardTitle: CSS.Properties = {
    textTransform: "capitalize",
    color: 'blue',
    marginBlockEnd: '10px',
    marginBlockStart: '10px'
};

const testImage: CSS.Properties = {
    overflow: 'hidden',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    height: '300px',
    width: '300px'
};


/*
const eventsData = [
    {
      name: 'Event 1',
      date: '2023-04-15',
      location: 'New York',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    
    {
      name: 'Event 2',
      date: '2023-05-20',
      location: 'London',
      description: 'Nulla vestibulum ullamcorper metus, ac consequat tortor consequat sit amet.'
    },
    
    
    {
      name: 'Event 3',
      date: '2023-06-25',
      location: 'Paris',
      description: 'Phasellus non nisi non sapien gravida interdum.'
    }
  ];
  
  function EventsList() {
    return (
      <div>
        {eventsData.map(event => (
          <EventCard
            key={event.name}
            name={event.name}
            date={event.date}
            location={event.location}
            description={event.description}
          />
        ))}
      </div>
    );
  }

*/

