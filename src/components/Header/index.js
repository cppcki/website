import { Link } from "react-router-dom";

import CKI_Logo from "../../assets/images/cki_logo.png";

import { 
  Container, 
  Logo,
  Content,
  Heading,
  Subheading
} from "./styles";

export function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo src={CKI_Logo} alt="Circle K International Logo"/>
      </Link>
      <Content>
        <Heading>Circle K</Heading>
        <Subheading>Cal Poly Pomona</Subheading>
      </Content>
    </Container>
  );
}