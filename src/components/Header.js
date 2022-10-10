import { Link } from "react-router-dom";
import styled from "styled-components";
import CKI_Logo from "../assets/images/cki_logo.png";

export default function Header() {
  return (
    <Container>
      <Wrapper to="/">
        <Logo src={CKI_Logo} alt="Circle K International Logo"/>
        <Content>
          <Heading>Circle K</Heading>
          <Subheading>Cal Poly Pomona</Subheading>
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  min-width: 220px;
  height: 60px;
  margin-bottom: 10px;
`;

const Wrapper = styled(Link)`
  display: flex;
  text-decoration: none;
`;

const Content = styled.div`
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  max-width: 200px;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const Heading = styled.div`
  color: ${props => props.theme.hue.gold};
  font-size: 20px;
  font-weight: 300;
  text-transform: lowercase;
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
`

const Subheading = styled.div`
  color: ${props => props.theme.hue.blue};
  font-size: 20px;
  text-transform: lowercase;
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
`

const Logo = styled.img`
  display: block;
  max-height: 60px;
  max-width: 60px;
`; 