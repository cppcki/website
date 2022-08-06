import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  flex-wrap: wrap;
  display: flex;
  line-height: 0;
`;

export const Description = styled.p`
  font-size: 14px;
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
  border-radius: 5px;
  border-color: black;
  height: 34px;
  width: 301px;
  font-size: 14px;
  line-height: 17px;
`;

export const ButtonLink = styled(Link)`
  margin: 10px;
  height: 34px;
  width: 301px;
  display: block;
  text-decoration: none;
`;

export const LoginButton = styled.button`
  background: ${(props) => (props.primary ? "#004B85" : "white")};
  color: ${(props) => (props.primary ? "white" : "#004B85")};

  font-size: 1em;
  padding: 9px 10px;
  border: 1px solid #9e9e9e;
  border-radius: 5px;
  height: 34px;
  width: 301px;
  text-align: center;
  display: block;

  &:hover {
    background: ${(props) => (props.primary ? "#B1953A" : "white")};
  }
`;

export const ForgetPassword = styled(Link)`
  color: ${(props) => props.theme.hue.blue};
  text-decoration: none;
  font-weight: 600;

  & > h3 {
    margin-left: 105px;
    font-size: 14px;
  }

  &:hover {
    color: ${(props) => props.theme.hue.gold};
  }
`;

export const Line = styled.hr`
  background: grey;
  width: 301px;
  height: 3px;
  margin-left: 10px;
`;

export const ContGoogle = styled.button`
  color: #004b85;
  background-color: white;
  font-size: 1em;
  padding: 9px 10px;
  border: 1px solid #004b85;
  border-radius: 5px;
  border-style: groove;
  height: 34px;
  width: 301px;
  margin-top: 15px;
  text-align: center;
  display: flex;

  & > p {
    font-family: "Roboto";
    font-size: 14px;
    margin-left: 5px;
    margin-top: auto;
  }
`;

export const Logo = styled.img`
  display: block;
  height: 19px;
  width: 19px;
  text-align: center;
  margin-left: 62px;
`;

export const ListContainer = styled.div`
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  flex-direction: column;
`;
