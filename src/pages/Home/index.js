import { Anchor, Header, Navbar } from "../../components";

import {
  Wrapper,
  Container,
  Left,
  Right,
  Motto,
  Content,
  Description,
  Image
} from "./styles";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../assets/images/events/", 
  false, /\.(png|jpe?g|svg)$/)
);

export function Home() {

  return (
    <Wrapper>
      <Container>
        <Left>
          <Navbar/>
          <Content>
            <Header/>
            <Motto>
              We love service so matcha
            </Motto>
            <Description>
              Become part of one of the largest collegiate community service, 
              leadership development, and friendship organization in the world.
            </Description>
            <Anchor text="learn more" href="https://forms.gle/RvJPvBacXExm34kP8"/>
          </Content>
        </Left>
        <Right>
          {images.map((image, index) => {
            return (
              <img key={index} src={image} alt="memories"/>
            )
          })}
        </Right>
      </Container>
    </Wrapper>
  );
}