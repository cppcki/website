import { Link } from "react-router-dom";

import { 
  Container,
  Content 
} from "./styles";

export function Navbar() {
  return (
    <Container>
      <Content>
        <li> 
          <Link to="/">Home</Link>
        </li>
        <li> 
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <a href="https://forms.gle/RvJPvBacXExm34kP8">Join</a>
        </li>
      </Content>
    </Container>
  );
}