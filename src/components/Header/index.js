import CKI_Logo from "../../assets/images/cki_logo.png";

import { 
  Container, 
  Logo,
  Content,
  Heading,
  Subheading,
  Wrapper
} from "./styles";

export function Header() {
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