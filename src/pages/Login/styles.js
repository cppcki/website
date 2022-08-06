import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  height: 100vh;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: fit-content;
  margin-bottom: 200px;
  width: auto;
`;

export const OutsideContainer = styled.div`
  max-width: 800px;
  margin: auto;
  margin-top: 13%;
`;

export const Description = styled.p`
  font-size: 36px;
  font-weight: 500;
  line-height: 42px;
`;

export const Right = styled.div`
  margin-left: 100px;
  margin-top: 150px;
  width: 601px;
  display: flex;
  justify-content: center;
  @media (max-width: 650px) {
    width: 110%;
    margin-top: 100px;
    margin-left: 0px;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 400px;
  margin-left: 100px;
  @media (max-width: 650px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const Row = styled.div`
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 601px;
  @media (max-width: 650px) {
    width: 100%;
  }
`;
