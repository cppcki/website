import React from "react";
import {
  Container,
  ImageContainer,
  CardTitle,
  CardBody,
  CardDate,
  Content,
} from "./styles";

import { ReactComponent as Date } from "../../assets/images/Date.svg";

export function Event(props) {

  const { date, title, imageUrl, body } = props;

  return (
    <Container>
      <ImageContainer>
        <img src={imageUrl} alt="" />
      </ImageContainer>
      <Content>
        <CardDate>
          <Date />
          {date}
        </CardDate>
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardBody>
          <p>{body}</p>
        </CardBody>
      </Content>
    </Container>
  );
}
