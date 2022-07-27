import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.footer`
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px;

  @media (max-width: 450px) {
    justify-content: space-around;
  }
`;

export const Row = styled.div`
  margin: ${props => props?.aligin ? "0 auto" : 0};

  @media (max-width: 400px) {
    width: 100%;
    margin-bottom: 10px;
  }

  @media (max-width: 450px) {
    margin: 0;
  }
`;

export const HeadingRow = styled.div`
  @media (max-width: 450px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const Legal = styled.div`
  text-align: center;
  text-transform: uppercase;
  margin-top: 10px;
  font-size: 12px;
`;

export const StyledAnchor = styled.a`
  color: ${(props) => props.theme.hue.gold};
  text-decoration: none;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  & > svg {
    fill: ${(props) => props.theme.hue.gold};
    width: 20px;
    margin-right: 10px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.hue.blue};
  text-decoration: none;

  & > h3 {
    margin-bottom: 25px;
    margin-block-start: 0;
  }

  &:hover {
    color: ${(props) => props.theme.hue.gold};
  }
`;

export const Logo = styled.img`
  display: block;
  max-height: 86px;
  max-width: 86px;
  text-transform: capitalize;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-bottom: 10px;
`;

export const Heading = styled.div`
  color: ${(props) => props.theme.hue.gold};
  font-size: 20px;
  text-transform: capitalize;
  margin: 0;
`;

export const Subheading = styled.h3`
  color: ${(props) => props.theme.hue.blue};
  margin-block-start: 0;

`;