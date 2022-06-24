import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  min-width: 220px;
  height: 60px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Wrapper = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export const Content = styled.div`
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  max-width: 200px;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const Heading = styled.div`
  color: ${props => props.theme.hue.gold};
  font-size: 20px;
  font-weight: 300;
  text-transform: lowercase;
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
`

export const Subheading = styled.div`
  color: ${props => props.theme.hue.blue};
  font-size: 20px;
  text-transform: lowercase;
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
`

export const Logo = styled.img`
  display: block;
  max-height: 60px;
  max-width: 60px;
`;