import {
  Container,
  Input,
  Description,
  LoginButton,
  ForgetPassword,
  Line,
  ContGoogle,
  Logo,
  ButtonLink,
  ListContainer,
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
      <ListContainer>
        <Description>email:</Description>
        <div>
          <Input
            placeholder="billybronco@cpp.edu"
            type="text"
            onChange={getData}
          />
        </div>
        <Description>password:</Description>
        <Input type="password" onChange={passwordData} />
        <ButtonLink to="/">
          <LoginButton primary type="submit" value="submit">
            Login
          </LoginButton>
        </ButtonLink>
        <ForgetPassword to="/">
          <h3>Forgot Password?</h3>
        </ForgetPassword>
        <Line />
        <Description style={{ marginLeft: "60px" }}>
          Dont have an account?
          <ForgetPassword to="/About" style={{ marginLeft: "2px" }}>
            {" "}
            Sign Up
          </ForgetPassword>
        </Description>
        <ButtonLink to="/">
          <ContGoogle primary type="submit" value="submit">
            <span>
              <Logo src={Google} alt="Google Logo" />
            </span>
            <p>Continue with Google</p>
          </ContGoogle>
        </ButtonLink>
      </ListContainer>
    </Container>
  );
}

//Notes:
/*
Buttons do work but does not change the cursor when hovering over bottom. For some reason, the cursor symbol changes when its off center from the button. IDK why
The "Sign Up" and "Continue with Google" hold temporary links
*/
