import { Link } from "react-router-dom";

import { Header } from "components";

import { Container, Content } from "./styles";

export function Navbar(props) {
  const { color } = props;
  return (
    <Container>
      <Header />
      <Content color={color}>
        <li>
          <Link to="/login">Login Test</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <a href="https://forms.gle/iBqpsS2ngCRVSnsn6">Join</a>
        </li>
      </Content>
    </Container>
  );
}
