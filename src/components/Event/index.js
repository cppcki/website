import React, { useMemo } from "react";
import {
  Container,
  Image,
  CardTitle,
  CardLocation,
  CardDate,
  Content,
} from "./styles";

import { ReactComponent as DateIcon } from "../../assets/images/Date.svg";

const PLACEHOLDER_IMAGE = "https://drive.google.com/uc?export=view&id=1FRtJ1v2NLr-H-jpJ5F2FtgF8oGna1pC3";

export function Event(props) {

  const { title, rsvp, startTime, endTime, location, thumbnail } = props;

  const date = useMemo(() => {
    const startDate = new Date(startTime * 1000);
    const endDate = new Date(endTime * 1000);

    const startingTime = endDate.toLocaleTimeString("en-US", { hour: '2-digit', minute:'2-digit' });
    const startingDay = startDate.toLocaleDateString("en-US", { dateStyle: "full" });
    return `${startingDay} @ ${startingTime.toLowerCase()}`
  }, [startTime, endTime]);

  return (
    <Container>
      <Image src={thumbnail} alt={`${title} event`}/>
      <Content>
        <CardDate>
          <DateIcon />
          {date}
        </CardDate>
        <CardTitle>{title}</CardTitle>
        <CardLocation>{location}</CardLocation>
      </Content>
    </Container>
  );
}
