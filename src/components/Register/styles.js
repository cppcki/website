import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Description = styled.p`
  font-size: medium;
  text-transform: capitalize;
  margin-left: 10px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 15px;
  margin: 10px;
  color: ${(props) => props.inputColor || "black"};
  background: white;
  border-style: groove;
  border-radius: 3px;
  border-color: black;
  height: 40px;
  width: 150%;
  font-size: medium;
`;

export const LoginLink = styled(Link)`
  margin: 10px;
  height: 40px;
  width: 100%;
`;

export const LoginButton = styled.button`
  background: ${(props) => (props.primary ? "royalblue" : "white")};
  color: ${(props) => (props.primary ? "white" : "royalblue")};

  font-size: 1em;
  padding: 9px 10px;
  border: 0px solid;
  border-radius: 7px;
  height: 40px;
  width: 100%;
  font-size: medium;
  text-align: center;
`;

export const ForgetPassword = styled(Link)`
  color: ${(props) => props.theme.hue.blue};
  text-decoration: none;
  font-weight: 600;

  & > h3 {
    margin-left: 180px;
    margin-bottom: 10px;
    font-size: medium;
  }

  &:hover {
    color: ${(props) => props.theme.hue.gold};
  }
`;

export const Line = styled.hr`
  background: grey;
  width: 30em;
  height: 3px;
`;

export const ContGoogle = styled.button`
  color: royalblue;
  background: white;
  padding: 9px 10px;
  border: 3px solid royalblue;
  border-radius: 7px;
  border-style: groove;
  height: 40px;
  width: 100%;

  & > p {
    font-size: medium;
    text-align: center;
    margin-top: -20px;
    margin-left: 25px;
  }
`;

export const Logo = styled.img`
  display: block;
  max-height: 22px;
  max-width: 22px;
  margin-left: 125px;
`;
