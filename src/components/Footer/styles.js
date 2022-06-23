import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Row = styled.div`
  min-width: 300px;
`;

export const Link = styled.a`
  & > svg {
    fill: ${(props) => props.theme.hue.gold};
  }
`;

export const TextLink = styled.a`
  color: ${(props) => props.theme.hue.gold};
  font-size: 20px;
  margin: 10px;
  text-decoration: none;
`;

export const Icon = styled.img`
  float: left;
  display: block;
`;

export const Logo = styled.img`
  display: block;
  max-height: 86px;
  max-width: 86px;
  text-transform: capitalize;
`;

export const Center = styled.p`
  text-align: center;
  justify-content: center;
`;

export const Col = styled.ul`
  list-style: none;
`;

export const Heading = styled.div`
  color: ${(props) => props.theme.hue.gold};
  font-size: 20px;
  font-weight: 300;
  text-transform: capitalize;
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
`;

export const Subheading = styled.div`
  color: ${(props) => props.theme.hue.blue};
  font-size: 20px;
  text-transform: capitalize;
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
`;

export const TextHeight = styled.div`
  line-height: 40px;
`;
