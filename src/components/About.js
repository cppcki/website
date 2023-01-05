import styled from "styled-components";

import Banquet from "../assets/images/banquet_brush.png";

export default function About() {
  return (
    <Container>
      <Flex>
        <Row>
          <Title>Ah yes, the dango!</Title>
        </Row>
        <Row>
          <Content>
            <p>
              Circle K blends community service and leadership training with the
              opportunity to meet many other college students at service
              projects, conferences, and conventions and form genuine lifelong
              friendships with people of all walks of life.
            </p>
            <p>
              It is a self-governing organization and elects its own officers,
              conducts its own meetings, and determines its own service
              activities. This high degree of autonomy allows for a unique
              service experience driven entirely by the members for the members.
            </p>
          </Content>
          <Left>
            <Image src={Banquet} height={300} />
          </Left>
        </Row>
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  /* max-width: 800px; */
  /* margin: auto; */
`;

const Flex = styled.div`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  flex-wrap: wrap;
  min-height: 400px;
`;

const Row = styled.div`
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  @media (max-width: 650px) {
    flex-direction: column-reverse;
  }
`;

const Content = styled.div`
  width: 35%;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const Left = styled.div`
  margin: auto;
  width: 50%;
  justify-content: center;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 4rem;
`;

const Image = styled.img.attrs((props) => ({
  as: !props.src && "div",
}))`
  max-width: 500px;
  height: ${(p) => p.height}px;
  background: transparent;
  transform: translate(${(p) => p.x || 0}, ${(p) => p.y || 0});
`;
