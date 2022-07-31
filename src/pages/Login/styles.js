import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  height: 100%;
`;

export const OutsideContainer = styled.div`
  max-width: 800px;
  margin: auto;
  margin-top: 25%;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  align-content: center;
  height: 100%;
  z-index: 1;
`;

export const Left = styled.div`
  width: 35%;
  margin-left: 50px;
  margin-right: 50%;
  margin-top: 60px;
`;

export const Right = styled.div`
  flex: 1;
  line-height: 0;
  //gap: 5px;
  margin-left: 60%;
  margin-top: -100px;
  margin-right: 10%;
`;

export const Description = styled.p`
  font-size: 30px;
  font-weight: 500;
`;

export const Header = styled.h3`
  text-transform: uppercase;
`;
