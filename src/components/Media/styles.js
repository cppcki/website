import styled from "styled-components";

export const Container = styled.ul`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  padding-inline-start: 0;
  & > li {
    & > a svg {
      width: 20px;
      height: 20px;
      fill: white;
    }
    margin-right: 35px;
    list-style-type: none;
  }
  & > li a svg:hover {
    fill: ${props => props.theme.hue.gold};
  }
`;