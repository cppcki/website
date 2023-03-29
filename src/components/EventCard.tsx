"use client";

import type * as CSS from "csstype";
import Image, { StaticImageData } from "next/image";
import DateImage from "@/assets/images/Date.png";

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
        <div style={Container}>
            <Image style={testImage}
                src={thumbnail}
                alt="Alt image"
            />
            <div style={Content}>
                <div style={CardDate}>📅 {date} @ {time}</div>
                <h2 style={CardTitle}>{title}</h2>
                <p style={CardLocation}>{location}</p>
                <p style={CardDetail}>{details}</p>
            </div>
        </div>
    );
}

export default EventCard;

const Container: CSS.Properties = {
    flexDirection: "column",
    display: 'flex',
    border: 'solid 1px #ECECEC',
    borderRadius: '10px',
    width: '300px',
    minWidth: "300px",
    minHeight: '450px',
    backgroundColor: "#FDFDFD",
    textAlign: "left",
    padding: 0,
    margin: 0,
    mixBlendMode: "normal"
};

const Content: CSS.Properties = {
    width: '100%',
    padding: '10px',
};

const CardDetail: CSS.Properties = {
    marginBlockEnd: '10px',
    marginBlockStart: '10px',
    fontSize: "14px",
    textTransform: "capitalize",
    fontWeight: 500,
};

const CardTitle: CSS.Properties = {
    textTransform: "capitalize",
    color: '#004B85',
    fontSize: "24px", 
    fontWeight: 'bold',
    marginBlockEnd: '10px',
    marginBlockStart: '10px',
    lineHeight: '25px',
};

const testImage: CSS.Properties = {
    overflow: 'hidden',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    height: "300px",
    minHeight: "300px",
    width: '300px'
};

const CardDate: CSS.Properties = {
  color: "#333333",
  textTransform: "capitalize",
  marginBlockStart: "10px",
  marginBlockEnd: "10px",
  fontSize: "13px",
  lineHeight: "0px",
  fontWeight: 500,
}

const DateIcon: CSS.Properties = {
  fill: "#333333",
  width: "12px",
  marginRight: "5px"
}

const TagContainer: CSS.Properties = {
  display: "flex",
  marginBottom: "10px",
  gap: "10px"
}

const Tag: CSS.Properties = {
  borderRadius: "5px",
  backgroundColor: "#004B85",
  paddingTop: "2px",
  paddingBottom: "2px",
  paddingLeft: "5px",
  paddingRight: "5px",
  color: "#333333"
}

const CardLocation: CSS.Properties = {
  color: "#333333",
  textTransform: "capitalize",
  fontSize: "15px",
  marginBlockStart: "0",
  marginBlockEnd: "10px",
  lineHeight: '7px',
  fontWeight: 500,
}


