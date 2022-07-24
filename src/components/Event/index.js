import React, { useMemo } from "react";
import {
  Container,
  Image,
  CardTitle,
  CardLocation,
  CardDate,
  Content,
} from "./styles";

import parseDate from "utils/date";

import { ReactComponent as DateIcon } from "../../assets/images/Date.svg";

const PLACEHOLDER_IMAGE = "https://lh3.google.com/u/0/d/1FRtJ1v2NLr-H-jpJ5F2FtgF8oGna1pC3=w3728-h1838-iv2";

export function Event(props) {

  const { title, rsvp, startTime, endTime, location, thumbnail } = props;

  console.log(startTime);

  const date = useMemo(() => {
    return parseDate(startTime * 1000, endTime * 1000);
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

Event.defaultProps = {
  thumbnail: PLACEHOLDER_IMAGE 
}