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

export function Event({ date, title, imageUrl, body }) {
  return (
    <Container>
      <ImageContainer>
        <img src={imageUrl} alt="" />
      </ImageContainer>
      <Content>
        <CardDate>
          <Date />
          <a>{date}</a>
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
