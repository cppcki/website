import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  height: 100%;
`;

export const OutsideContainer = styled.div`
  max-width: 800px;
  margin: auto;
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

export const Content = styled.div`
  margin: 10%;
`;

export const Left = styled.div`
  width: 30%;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  line-height: 0;
  gap: 5px;
  align-self: center;
  margin-left: 500px;
`;

export const Description = styled.p`
  font-size: 30px;
  font-weight: 500;
`;
