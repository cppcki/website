import { useMemo } from "react";
import { Register, Footer, Header, ParticleBG } from "../../components";

import {
  Wrapper,
  Container,
  Right,
  Description,
  Flex,
  Row,
  Content,
  OutsideContainer,
} from "./styles";

export function Login() {
  return (
    <Wrapper>
      <ParticleBG />
      <Container>
        <Flex>
          <Row>
            <div>
              <Header />
              <Content>
                <Description>
                  Stay connected with the circle and never miss another Dango
                  again.
                </Description>
              </Content>
            </div>
            <Right>
              <Register />
            </Right>
          </Row>
        </Flex>
      </Container>
      <OutsideContainer>
        <Footer />
      </OutsideContainer>
    </Wrapper>
  );
}
