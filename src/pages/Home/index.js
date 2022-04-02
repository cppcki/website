import { Anchor, Header, Navbar } from "../../components";
import Induction2021 from "../../assets/images/induction2021.jpg";

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
          <Image img={Induction2021}></Image>
        </Right>
      </Container>
    </Wrapper>
  );
}