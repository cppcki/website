import {
  Container,
  Input,
  Description,
  LoginButton,
  ForgetPassword,
  Line,
  ContGoogle,
  Logo,
  LoginLink,
} from "./styles";

import Google from "../../assets/images/google_logo.png";
import { Link } from "react-router-dom";

export function Register() {
  function getData(val) {
    console.warn(val.target);
  }

  function passwordData(val) {
    console.warn(val.target);
  }

  return (
    <Container>
      <Description>email:</Description>
      <Input placeholder="billybronco@cpp.edu" type="text" onChange={getData} />
      <Description>password:</Description>
      <Input type="password" onChange={passwordData} />
      <LoginLink to="/">
        <LoginButton primary>Login</LoginButton>
      </LoginLink>
      <ForgetPassword to="/">
        <h3>Forgot Password?</h3>
      </ForgetPassword>
      <Line />
      <Description style={{ marginLeft: "125px" }}>
        Dont have an account?
        <ForgetPassword to="/About"> Sign Up</ForgetPassword>
      </Description>
      <LoginLink to="/">
        <ContGoogle>
          <Logo src={Google} alt="Google Logo" />
          <p>Continue with Google</p>
        </ContGoogle>
      </LoginLink>
    </Container>
  );
}

//Notes:
/*
Buttons do work but does not change the cursor when hovering over bottom. For some reason, the cursor symbol changes when its off center from the button. IDK why
The "Sign Up" and "Continue with Google" hold temporary links
*/
