import { useMemo } from "react";
import { Register, Footer, Header, ParticleBG } from "../../components";

import {
  Wrapper,
  Container,
  Left,
  Right,
  Description,
  OutsideContainer,
} from "./styles";

export function Login() {
  return (
    <Wrapper>
      <ParticleBG />
      <Container>
        <Left>
          <Header />
          <Description>
            Stay connected with the circle and never miss another Dango again.
          </Description>
        </Left>
        <Right>
          <Register />
        </Right>
      </Container>
      <OutsideContainer>
        <Footer />
      </OutsideContainer>
    </Wrapper>
  );
}
