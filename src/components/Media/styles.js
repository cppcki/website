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
    }
    margin-right: 35px;
    list-style-type: none;
  }
  & > li:hover {
    fill: ${props => props.theme.hue.blue};
  }
`;