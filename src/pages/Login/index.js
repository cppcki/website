import { useMemo } from "react";
import { Register, Footer, Header, ParticleBG } from "../../components";

import CKI_Logo from "../../assets/images/cki_logo.png";

import {
  Wrapper,
  Container,
  Left,
  Right,
  Content,
  Description,
  OutsideContainer,
} from "./styles";

export function Login() {
  return (
    <Wrapper>
      <ParticleBG />
    </Wrapper>
  );
}

//To do list
/*
Make login from figma
get footer to fit inside the animated area
fix the bounds of footer in this index
Change "We Love Service Blah Blah" to the class Circle K symbol
*/
