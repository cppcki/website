import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Row = styled.div`
  min-width: 300px;
`;

export const Hyplink = styled.a`
  & > svg {
    fill: ${(props) => props.theme.hue.gold};
  }
`;

export const TextLink = styled.a`
  color: ${(props) => props.theme.hue.gold};
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
`;

export const Col = styled.ul`
  list-style: none;
`;

export const Heading = styled.h3`
  color: ${(props) => props.theme.hue.gold};
  font-weight: 400;
  text-transform: capitalize;
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
`;

export const Subheading = styled.h3`
  color: ${(props) => props.theme.hue.blue};
  text-transform: capitalize;
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
`;

export const TextSpace = styled.p`
  line-height: 45px;
`;

export const SecondCol = styled.h3`
  color: ${(props) => props.theme.hue.gold};
  font-weight: 400;
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
`;
