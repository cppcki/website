import React from "react";
import {
  Container,
  Image,
  CardTitle,
  CardLocation,
  CardDate,
  Content,
} from "./styles";

import { ReactComponent as Date } from "../../assets/images/Date.svg";

export function Event(props) {

  const { date, title, imageUrl, location } = props;

  return (
    <Container>
      <Image src={imageUrl} alt={`${title} event`}/>
      <Content>
        <CardDate>
          <Date />
          {date}
        </CardDate>
        <CardTitle>{title}</CardTitle>
        <CardLocation>{location}</CardLocation>
      </Content>
    </Container>
  );
}
